import { Plus, Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const orders = [
  { id: "DH-001", dealer: "Đại lý Minh Phát", products: "Cửa sắt 2 cánh x20", total: "45,000,000đ", deposit: "22,500,000đ", status: "production", date: "15/03/2026" },
  { id: "DH-002", dealer: "Đại lý Hoàng Gia", products: "Lan can inox x15", total: "28,500,000đ", deposit: "14,250,000đ", status: "cutting", date: "14/03/2026" },
  { id: "DH-003", dealer: "Đại lý Thành Công", products: "Cổng sắt mỹ thuật x5", total: "75,000,000đ", deposit: "37,500,000đ", status: "qc", date: "13/03/2026" },
  { id: "DH-004", dealer: "Đại lý Việt Tiến", products: "Khung bàn sắt x50", total: "35,000,000đ", deposit: "35,000,000đ", status: "completed", date: "12/03/2026" },
  { id: "DH-005", dealer: "Đại lý Phú Quý", products: "Giá kệ sắt x30", total: "21,000,000đ", deposit: "0đ", status: "pending", date: "11/03/2026" },
];

const statusConfig: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Chờ duyệt", variant: "outline" },
  cutting: { label: "Cắt phôi", variant: "secondary" },
  production: { label: "Đang SX", variant: "default" },
  qc: { label: "QC", variant: "secondary" },
  completed: { label: "Hoàn thành", variant: "default" },
};

export default function OrdersPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Đại lý & Đơn hàng</h1>
          <p className="text-sm text-muted-foreground mt-1">Quản lý đơn hàng và công nợ đại lý</p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" /> Tạo đơn hàng
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Tìm theo mã ĐH, đại lý..." className="pl-9" />
        </div>
        <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
      </div>

      <div className="rounded-xl border bg-card shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/30">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mã ĐH</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Đại lý</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Sản phẩm</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Tổng tiền</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden sm:table-cell">Đặt cọc</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b last:border-0 hover:bg-muted/20 transition-colors cursor-pointer">
                  <td className="px-4 py-3 font-mono text-xs font-semibold">{o.id}</td>
                  <td className="px-4 py-3 font-medium">{o.dealer}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{o.products}</td>
                  <td className="px-4 py-3 text-right font-medium">{o.total}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">{o.deposit}</td>
                  <td className="px-4 py-3">
                    <Badge variant={statusConfig[o.status]?.variant}>{statusConfig[o.status]?.label}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
