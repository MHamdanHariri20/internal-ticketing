"use client";

import { useEffect, useState } from "react";
import { SummaryCard } from "@/components/dashboard/summary-card";
import axios from "@/lib/axios";

type DashboardSummary = {
  tickets: {
    total: number;
    open: number;
    inProgress: number;
    done: number;
    rejected: number;
  };
};

export default function DashboardPage() {
const [summary, setSummary] = useState<DashboardSummary | null>(null);

useEffect(() => {
  const fetchSummary = async () => {
    try {
      const { data } = await axios.get<DashboardSummary>(
        "/dashboard/summary"
      );

      setSummary(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchSummary();
}, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Ringkasan tiket saat ini.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <SummaryCard title="Total Tickets" value={summary?.tickets.total} />
        <SummaryCard title="Open" value={summary?.tickets.open} />
        <SummaryCard title="In Progress" value={summary?.tickets.inProgress} />
        <SummaryCard title="Done" value={summary?.tickets.done} />
        <SummaryCard title="Rejected" value={summary?.tickets.rejected} />
      </div>
    </div>
  );
}