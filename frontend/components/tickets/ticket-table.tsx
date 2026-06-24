import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { StatusBadge } from "./status-badge";
import { PriorityBadge } from "./priority-badge";

type Ticket = {
  id: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
};

type TicketTableProps = {
  tickets: Ticket[];
};

export function TicketTable({ tickets }: TicketTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.title}</TableCell>
            <TableCell>{ticket.category}</TableCell>
            <TableCell>
              <PriorityBadge priority={ticket.priority} />
            </TableCell>
            <TableCell>
              <StatusBadge status={ticket.status} />
            </TableCell>
            <TableCell>{ticket.createdAt}</TableCell>
            <TableCell className="text-right">
              Detail
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}