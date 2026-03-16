import StatCard from "@/components/dashboard/StatCard";
import ProductionStatusChart from "@/components/dashboard/ProductionStatusChart";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentOrders from "@/components/dashboard/RecentOrders";
import InventoryAlerts from "@/components/dashboard/InventoryAlerts";
import { ShoppingCart, Factory, Warehouse, Users, TrendingUp, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tổng quan</h1>
        <p className="text-sm text-muted-foreground mt-1">Tình hình hoạt động xưởng hôm nay</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Đơn hàng mới"
          value="24"
          change="+12% so với tuần trước"
          changeType="positive"
          icon={ShoppingCart}
          iconClassName="bg-accent/10 text-accent"
        />
        <StatCard
          title="Đang sản xuất"
          value="18"
          change="5 đơn gần hoàn thành"
          changeType="neutral"
          icon={Factory}
        />
        <StatCard
          title="Tồn kho thấp"
          value="3"
          change="Cần nhập hàng gấp"
          changeType="negative"
          icon={AlertTriangle}
          iconClassName="bg-warning/10 text-warning"
        />
        <StatCard
          title="Doanh thu tháng"
          value="210M"
          change="+18% so với tháng trước"
          changeType="positive"
          icon={TrendingUp}
          iconClassName="bg-success/10 text-success"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProductionStatusChart />
        <RevenueChart />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <InventoryAlerts />
      </div>
    </div>
  );
}
