import { TicketTable } from "@/components/tickets/ticket-table";

const tickets = [
  {
    id: "1",
    title: "Printer Error",
    category: "Hardware",
    priority: "High",
    status: "OPEN",
    createdAt: "2025-06-23",
  },
  {
    id: "2",
    title: "VPN Tidak Bisa",
    category: "Network",
    priority: "Medium",
    status: "IN_PROGRESS",
    createdAt: "2025-06-22",
  },
];

export default function TicketsPage() {
    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Data Tiket</h1>
            </div>
            <TicketTable tickets={tickets} />
        </>
    );
}