"use client";

import { useEffect, useState } from "react";
import { TicketTable } from "@/components/tickets/ticket-table";
import { getTickets } from "@/services/ticket.service";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getTickets();

        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Data Tiket</h1>
      </div>
      <TicketTable tickets={tickets} />
    </>
  );
}
