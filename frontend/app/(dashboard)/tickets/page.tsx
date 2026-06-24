"use client";

import { useEffect, useState } from "react";
import { TicketTable } from "@/components/tickets/ticket-table";
import { getTickets } from "@/services/ticket.service";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Data Tiket</h1>
        </div>
        <Button asChild>
          <Link href="/tickets/create">Create Ticket</Link>
        </Button>
      </div>
      <TicketTable tickets={tickets} />
    </>
  );
}
