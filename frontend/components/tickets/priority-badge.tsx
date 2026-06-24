import { Badge } from "@/components/ui/badge";

type PriorityBadgeProps = {
  priority: string;
};

const priorityStyles: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-900",
  MEDIUM: "bg-amber-100 text-amber-700",
  HIGH: "bg-red-100 text-red-700",
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <Badge
      className={priorityStyles[priority] ?? "bg-gray-100 text-gray-900"}
    >
      {priority.replaceAll("_", " ")}
    </Badge>
  );
}