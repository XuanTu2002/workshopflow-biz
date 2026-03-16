import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const products = [
  { id: "SP-001", name: "Cửa sắt 2 cánh", category: "Cửa", price: "2,250,000đ", bom: 5, status: "active" },
  { id: "SP-002", name: "Lan can inox 304", category: "Lan can", price: "1,900,000đ/m", bom: 4, status: "active" },
  { id: "SP-003", name: "Cổng sắt mỹ thuật", category: "Cổng", price: "15,000,000đ", bom: 8, status: "active" },
  { id: "SP-004", name: "Khung bàn sắt", category: "Nội thất", price: "700,000đ", bom: 3, status: "draft" },
  { id: "SP-005", name: "Giá kệ sắt 5 tầng", category: "Nội thất", price: "1,200,000đ", bom: 6, status: "active" },
];

export default function ProductsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Sản phẩm & Định mức (BOM)</h1>
          <p className="text-sm text-muted-foreground mt-1">Quản lý sản phẩm và định mức vật tư</p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" /> Thêm sản phẩm
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm sản phẩm..." className="pl-9" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="rounded-xl border bg-card p-5 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-card-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{p.id}</p>
              </div>
              <Badge variant={p.status === "active" ? "default" : "outline"}>
                {p.status === "active" ? "Hoạt động" : "Nháp"}
              </Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Danh mục</span>
                <span className="font-medium">{p.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Giá bán</span>
                <span className="font-medium">{p.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vật tư BOM</span>
                <span className="font-medium">{p.bom} loại</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
