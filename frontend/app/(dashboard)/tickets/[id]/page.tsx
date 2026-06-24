"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PriorityBadge } from "@/components/tickets/priority-badge";

import CommentForm from "@/components/forms/comment-form";
import { createComment } from "@/services/ticket.service";

import { getTicketById, updateTicketStatus } from "@/services/ticket.service";

export default function TicketDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [ticket, setTicket] = useState<any>(null);

  const user = useMemo(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  }, []);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await getTicketById(id);

        setTicket(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchTicket();
    }
  }, [id]);

  const fetchTicket = async () => {
    try {
      const data = await getTicketById(id);

      setTicket(data);
      setStatus(data.status);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTicket();
    }
  }, [id]);

  const handleCreateComment = async (comment: string) => {
    await createComment(id, comment);

    await fetchTicket();
  };

  const handleUpdateStatus = async () => {
    try {
      await updateTicketStatus(id, status);

      await fetchTicket();
    } catch (error) {
      console.error(error);
    }
  };

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div>
        <Button asChild variant="outline" size="sm">
          <Link href="/tickets">← Back to Tickets</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Ticket Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Title</p>
            <p className="font-medium">{ticket.title}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Category</p>
            <p>{ticket.category}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Priority</p>
            <PriorityBadge priority={ticket.priority} />
          </div>

          {user?.role === "ADMIN" && (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Change Status</p>

                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="OPEN">Open</SelectItem>

                    <SelectItem value="IN_PROGRESS">In Progress</SelectItem>

                    <SelectItem value="DONE">Done</SelectItem>

                    <SelectItem value="REJECTED">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleUpdateStatus}>Update Status</Button>
            </div>
          )}

          <div>
            <p className="text-sm text-muted-foreground">Description</p>

            <p>{ticket.description}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Attachment</p>

            <p>{ticket.attachmentUrl || "-"}</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <CommentForm onSubmit={handleCreateComment} />
            </div>
            {ticket.comments.length === 0 ? (
              <p className="text-muted-foreground">No comments yet.</p>
            ) : (
              <div className="space-y-4">
                {[...ticket.comments]
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime(),
                  )
                  .map((comment: any) => (
                    <div key={comment.id} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{comment.user.name}</p>

                        <p className="text-xs text-muted-foreground">
                          {new Date(comment.createdAt).toLocaleString()}
                        </p>
                      </div>

                      <p className="mt-2 text-sm">{comment.comment}</p>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activity Logs</CardTitle>
          </CardHeader>

          <CardContent>
            {!ticket.activities?.length ? (
              <p className="text-muted-foreground">No activity logs yet.</p>
            ) : (
              <div className="space-y-4">
                {ticket.activities.map((activity: any) => (
                  <div key={activity.id} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{activity.user?.name}</p>

                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <p className="mt-2 text-sm">{activity.activity}</p>

                    {activity.oldStatus && activity.newStatus && (
                      <p className="text-sm text-muted-foreground">
                        {activity.oldStatus} → {activity.newStatus}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
