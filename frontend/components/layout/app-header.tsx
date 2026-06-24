"use client";

import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/tickets": "Tickets",
};

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 items-center border-b bg-background px-6">
      <h1 className="text-xl font-semibold">
        {titles[pathname] ?? "Internal Ticketing"}
      </h1>
    </header>
  );
}