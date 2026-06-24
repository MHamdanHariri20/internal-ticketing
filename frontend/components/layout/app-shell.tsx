import { ReactNode } from "react";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-muted/100">
      <div className="flex min-h-screen">
        <AppSidebar />

        <main className="flex flex-1 flex-col">
          <AppHeader />

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}