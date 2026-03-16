import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { Bell } from "lucide-react";

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b px-6 bg-card">
          <div className="pl-12 lg:pl-0">
            <h2 className="text-lg font-semibold text-foreground">Xưởng Cơ Khí Nội Thất</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                3
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                AD
              </div>
              <span className="hidden sm:block text-sm font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
