import { Badge } from "@/components/ui/badge";

type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  OPEN: "bg-white text-black border",
  IN_PROGRESS: "bg-gray-100 text-gray-900",
  DONE: "bg-green-100 text-green-700",
  REJECTED: "bg-red-100 text-red-700",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      className={statusStyles[status] ?? "bg-gray-100 text-gray-900"}
    >
      {status.replaceAll("_", " ")}
    </Badge>
  );
}