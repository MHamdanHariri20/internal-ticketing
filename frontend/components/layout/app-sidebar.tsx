"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Ticket, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/brand/app-logo";
import { useEffect, useState } from "react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Tickets",
    href: "/tickets",
    icon: Ticket,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    router.replace("/login");
  }

  return (
    <aside className="flex h-screen flex-col border-r bg-background w-20 lg:w-64">
      <div className="border-b p-6">
        <AppLogo />
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link key={menu.href} href={menu.href}>
              <Button
                variant={pathname === menu.href ? "secondary" : "ghost"}
                className="mb-1 w-full justify-start lg:justify-start cursor-pointer"
              >
                <Icon className="mr-2 h-4 w-4 lg:mr-2" />
                <span className="hidden lg:block">{menu.title}</span>
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <p className="mb-3 hidden text-sm font-medium lg:block">{user?.name}</p>

        <Button
          variant="outline"
          className="w-full justify-start lg:justify-start"
          onClick={logout}
        >
          <LogOut className="-4 w-4 lg:mr-2" />
          <span className="hidden lg:block">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
