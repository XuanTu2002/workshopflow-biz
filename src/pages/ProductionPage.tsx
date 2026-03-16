import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const workOrders = [
  { id: "LSX-001", order: "DH-001", product: "Cửa sắt 2 cánh", qty: 20, stage: "welding", assignee: "Tổ 1 - Anh Hùng", progress: 60 },
  { id: "LSX-002", order: "DH-002", product: "Lan can inox", qty: 15, stage: "cutting", assignee: "Tổ 2 - Anh Tuấn", progress: 25 },
  { id: "LSX-003", order: "DH-003", product: "Cổng sắt mỹ thuật", qty: 5, stage: "painting", assignee: "Tổ Sơn - Anh Minh", progress: 80 },
  { id: "LSX-004", order: "DH-006", product: "Bàn làm việc sắt", qty: 30, stage: "assembly", assignee: "Tổ 3 - Anh Đức", progress: 90 },
];

const stageConfig: Record<string, { label: string; color: string }> = {
  cutting: { label: "Cắt phôi", color: "bg-info/10 text-info border-info/20" },
  welding: { label: "Hàn/Cơ khí", color: "bg-accent/10 text-accent border-accent/20" },
  painting: { label: "Sơn tĩnh điện", color: "bg-warning/10 text-warning border-warning/20" },
  assembly: { label: "Lắp ráp", color: "bg-success/10 text-success border-success/20" },
  qc: { label: "Kiểm tra QC", color: "bg-primary/10 text-primary border-primary/20" },
};

const stages = ["cutting", "welding", "painting", "assembly", "qc"];

export default function ProductionPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Quản lý Sản xuất</h1>
        <p className="text-sm text-muted-foreground mt-1">Theo dõi lệnh sản xuất và tiến độ công đoạn</p>
      </div>

      {/* Pipeline stages */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {stages.map((s) => (
          <div key={s} className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold ${stageConfig[s].color}`}>
            {stageConfig[s].label}
          </div>
        ))}
      </div>

      {/* Work orders */}
      <div className="space-y-3">
        {workOrders.map((wo) => (
          <div key={wo.id} className="rounded-xl border bg-card p-5 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-semibold text-muted-foreground">{wo.id}</span>
                  <span className="text-muted-foreground">←</span>
                  <span className="font-mono text-xs text-muted-foreground">{wo.order}</span>
                </div>
                <p className="font-semibold text-card-foreground">{wo.product} <span className="text-muted-foreground font-normal">x{wo.qty}</span></p>
                <p className="text-sm text-muted-foreground mt-0.5">{wo.assignee}</p>
              </div>
              <div className="flex items-center gap-4 sm:shrink-0">
                <div className={`rounded-full border px-3 py-1 text-xs font-semibold ${stageConfig[wo.stage].color}`}>
                  {stageConfig[wo.stage].label}
                </div>
                <div className="w-24">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-semibold">{wo.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${wo.progress}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
