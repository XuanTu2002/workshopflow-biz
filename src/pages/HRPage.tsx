import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const employees = [
  { id: "NV-001", name: "Nguyễn Văn Hùng", team: "Tổ 1 - Hàn", role: "Tổ trưởng", piecesThisMonth: 145, salary: "12,500,000đ" },
  { id: "NV-002", name: "Trần Minh Tuấn", team: "Tổ 2 - Cắt", role: "Tổ trưởng", piecesThisMonth: 180, salary: "14,200,000đ" },
  { id: "NV-003", name: "Lê Đức Anh", team: "Tổ 1 - Hàn", role: "Thợ chính", piecesThisMonth: 120, salary: "10,800,000đ" },
  { id: "NV-004", name: "Phạm Văn Minh", team: "Tổ Sơn", role: "Tổ trưởng", piecesThisMonth: 200, salary: "15,000,000đ" },
  { id: "NV-005", name: "Hoàng Văn Đức", team: "Tổ 3 - Lắp ráp", role: "Thợ chính", piecesThisMonth: 95, salary: "8,500,000đ" },
];

const payroll = [
  { month: "03/2026", totalWorkers: 25, totalPieces: 1240, totalSalary: "285,000,000đ", status: "pending" },
  { month: "02/2026", totalWorkers: 24, totalPieces: 1180, totalSalary: "268,000,000đ", status: "paid" },
  { month: "01/2026", totalWorkers: 23, totalPieces: 1050, totalSalary: "245,000,000đ", status: "paid" },
];

export default function HRPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Nhân sự & Lương sản phẩm</h1>
        <p className="text-sm text-muted-foreground mt-1">Quản lý thợ, tổ đội và tính lương khoán</p>
      </div>

      <Tabs defaultValue="employees">
        <TabsList>
          <TabsTrigger value="employees">Danh sách thợ</TabsTrigger>
          <TabsTrigger value="payroll">Bảng lương</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="mt-4">
          <div className="rounded-xl border bg-card shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mã NV</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Họ tên</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">Tổ đội</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Vai trò</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">SP tháng này</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden sm:table-cell">Lương tạm tính</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">{e.id}</td>
                    <td className="px-4 py-3 font-medium">{e.name}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{e.team}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <Badge variant={e.role === "Tổ trưởng" ? "default" : "outline"}>{e.role}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">{e.piecesThisMonth}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">{e.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="payroll" className="mt-4">
          <div className="rounded-xl border bg-card shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tháng</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Số thợ</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Tổng SP</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Tổng lương</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {payroll.map((p) => (
                  <tr key={p.month} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-medium">{p.month}</td>
                    <td className="px-4 py-3 text-right">{p.totalWorkers}</td>
                    <td className="px-4 py-3 text-right font-semibold">{p.totalPieces}</td>
                    <td className="px-4 py-3 text-right font-semibold">{p.totalSalary}</td>
                    <td className="px-4 py-3">
                      <Badge variant={p.status === "paid" ? "default" : "outline"}>
                        {p.status === "paid" ? "Đã trả" : "Chưa trả"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
