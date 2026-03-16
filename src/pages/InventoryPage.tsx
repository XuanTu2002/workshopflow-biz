import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Plus, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const rawMaterials = [
  { id: "NL-001", name: "Sắt hộp 40x40", unit: "mét", stock: 120, min: 200, price: "45,000đ/m" },
  { id: "NL-002", name: "Sắt hộp 20x40", unit: "mét", stock: 350, min: 200, price: "35,000đ/m" },
  { id: "NL-003", name: "Inox 304 ống 42", unit: "mét", stock: 180, min: 100, price: "120,000đ/m" },
  { id: "NL-004", name: "Sơn tĩnh điện đen", unit: "kg", stock: 15, min: 50, price: "85,000đ/kg" },
  { id: "NL-005", name: "Vít M8x20", unit: "cái", stock: 500, min: 1000, price: "800đ/cái" },
  { id: "NL-006", name: "Gỗ MDF 18mm", unit: "tấm", stock: 45, min: 20, price: "350,000đ/tấm" },
];

const finishedGoods = [
  { id: "TP-001", name: "Cửa sắt 2 cánh", stock: 8, unit: "bộ", cogs: "1,250,000đ" },
  { id: "TP-002", name: "Lan can inox 304", stock: 25, unit: "mét", cogs: "950,000đ/m" },
  { id: "TP-003", name: "Cổng sắt mỹ thuật", stock: 2, unit: "bộ", cogs: "8,500,000đ" },
];

export default function InventoryPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Quản lý Kho</h1>
          <p className="text-sm text-muted-foreground mt-1">Kho nguyên liệu & thành phẩm</p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" /> Nhập kho
        </Button>
      </div>

      <Tabs defaultValue="raw">
        <TabsList>
          <TabsTrigger value="raw">Nguyên liệu</TabsTrigger>
          <TabsTrigger value="finished">Thành phẩm</TabsTrigger>
        </TabsList>

        <TabsContent value="raw" className="mt-4 space-y-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Tìm vật tư..." className="pl-9" />
          </div>
          <div className="rounded-xl border bg-card shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mã</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Vật tư</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Tồn kho</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden sm:table-cell">Tối thiểu</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden md:table-cell">Đơn giá</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">TT</th>
                </tr>
              </thead>
              <tbody>
                {rawMaterials.map((m) => {
                  const isLow = m.stock < m.min;
                  return (
                    <tr key={m.id} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs">{m.id}</td>
                      <td className="px-4 py-3 font-medium">{m.name}</td>
                      <td className="px-4 py-3 text-right font-medium">{m.stock} {m.unit}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">{m.min}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden md:table-cell">{m.price}</td>
                      <td className="px-4 py-3">
                        {isLow ? (
                          <div className="flex items-center gap-1 text-destructive">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            <span className="text-xs font-medium">Thấp</span>
                          </div>
                        ) : (
                          <Badge variant="outline" className="text-success border-success/30">Đủ</Badge>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="finished" className="mt-4">
          <div className="rounded-xl border bg-card shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mã</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Sản phẩm</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Tồn kho</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Giá vốn</th>
                </tr>
              </thead>
              <tbody>
                {finishedGoods.map((g) => (
                  <tr key={g.id} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">{g.id}</td>
                    <td className="px-4 py-3 font-medium">{g.name}</td>
                    <td className="px-4 py-3 text-right">{g.stock} {g.unit}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{g.cogs}</td>
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
