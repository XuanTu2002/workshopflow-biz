import { Badge } from "@/components/ui/badge";

const orders = [
  { id: "DH-001", dealer: "Đại lý Minh Phát", product: "Cửa sắt 2 cánh", qty: 20, status: "production", date: "15/03/2026" },
  { id: "DH-002", dealer: "Đại lý Hoàng Gia", product: "Lan can inox", qty: 15, status: "cutting", date: "14/03/2026" },
  { id: "DH-003", dealer: "Đại lý Thành Công", product: "Cổng sắt mỹ thuật", qty: 5, status: "qc", date: "13/03/2026" },
  { id: "DH-004", dealer: "Đại lý Việt Tiến", product: "Khung bàn sắt", qty: 50, status: "completed", date: "12/03/2026" },
  { id: "DH-005", dealer: "Đại lý Phú Quý", product: "Giá kệ sắt", qty: 30, status: "pending", date: "11/03/2026" },
];

const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Chờ duyệt", variant: "outline" },
  cutting: { label: "Cắt phôi", variant: "secondary" },
  production: { label: "Sản xuất", variant: "default" },
  qc: { label: "Kiểm tra QC", variant: "secondary" },
  completed: { label: "Hoàn thành", variant: "default" },
};

export default function RecentOrders() {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-card">
      <h3 className="text-sm font-semibold text-card-foreground mb-4">Đơn hàng gần đây</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3 font-medium text-muted-foreground">Mã ĐH</th>
              <th className="pb-3 font-medium text-muted-foreground">Đại lý</th>
              <th className="pb-3 font-medium text-muted-foreground hidden sm:table-cell">Sản phẩm</th>
              <th className="pb-3 font-medium text-muted-foreground text-right">SL</th>
              <th className="pb-3 font-medium text-muted-foreground">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                <td className="py-3 font-mono text-xs font-medium">{order.id}</td>
                <td className="py-3">{order.dealer}</td>
                <td className="py-3 hidden sm:table-cell text-muted-foreground">{order.product}</td>
                <td className="py-3 text-right">{order.qty}</td>
                <td className="py-3">
                  <Badge variant={statusMap[order.status]?.variant || "outline"}>
                    {statusMap[order.status]?.label || order.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
