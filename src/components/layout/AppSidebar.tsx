import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Factory,
  Warehouse,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Package,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Tổng quan", icon: LayoutDashboard, path: "/" },
  { label: "Đại lý & Bán hàng", icon: ShoppingCart, path: "/orders" },
  { label: "Sản phẩm & BOM", icon: Package, path: "/products" },
  { label: "Sản xuất", icon: Factory, path: "/production" },
  { label: "Kho vật tư", icon: Warehouse, path: "/inventory" },
  { label: "Nhân sự & Lương", icon: Users, path: "/hr" },
  { label: "Báo cáo", icon: BarChart3, path: "/reports" },
  { label: "Cài đặt", icon: Settings, path: "/settings" },
];

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 px-4 border-b border-sidebar-border">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
          <Wrench className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-bold text-sidebar-accent-foreground tracking-tight">
              MechERP
            </span>
            <span className="text-[10px] text-sidebar-muted">
              Quản lý xưởng cơ khí
            </span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className={cn("h-[18px] w-[18px] shrink-0", isActive && "text-sidebar-primary")} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse button - desktop only */}
      <div className="hidden lg:block border-t border-sidebar-border p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center rounded-lg p-2 text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} />
          <div className="relative z-50 h-full w-64 bg-sidebar">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-4 text-sidebar-muted hover:text-sidebar-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-200 shrink-0",
          collapsed ? "w-[68px]" : "w-60"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
