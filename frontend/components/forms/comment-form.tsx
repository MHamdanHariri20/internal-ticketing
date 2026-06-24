"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type CommentFormProps = {
  onSubmit: (comment: string) => Promise<void>;
};

export default function CommentForm({
  onSubmit,
}: CommentFormProps) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    try {
      setLoading(true);

      await onSubmit(comment);

      setComment("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Textarea
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        placeholder="Write a comment..."
      />

      <Button
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Add Comment"}
      </Button>
    </div>
  );
}