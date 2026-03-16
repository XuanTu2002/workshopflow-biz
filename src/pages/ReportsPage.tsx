import { motion } from "framer-motion";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ProductionStatusChart from "@/components/dashboard/ProductionStatusChart";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const qcData = [
  { name: "Đạt QC", value: 92 },
  { name: "Lỗi QC", value: 8 },
];

const qcColors = ["hsl(142, 71%, 45%)", "hsl(0, 72%, 51%)"];

const forecastData = [
  { material: "Sắt hộp 40x40", forecast: "500 mét", urgency: "Cao" },
  { material: "Sơn tĩnh điện", forecast: "80 kg", urgency: "Cao" },
  { material: "Vít M8", forecast: "2000 cái", urgency: "Trung bình" },
  { material: "Inox 304", forecast: "100 mét", urgency: "Thấp" },
];

export default function ReportsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Báo cáo</h1>
        <p className="text-sm text-muted-foreground mt-1">Tổng hợp doanh thu, chất lượng và dự báo vật tư</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RevenueChart />
        <ProductionStatusChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* QC */}
        <div className="rounded-xl border bg-card p-5 shadow-card">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Tỷ lệ QC tháng này</h3>
          <div className="h-[200px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={qcData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" strokeWidth={2}>
                  {qcData.map((_, i) => (
                    <Cell key={i} fill={qcColors[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 text-sm mt-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-success" />
              <span>Đạt: 92%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <span>Lỗi: 8%</span>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="rounded-xl border bg-card p-5 shadow-card">
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Dự báo vật tư cần nhập</h3>
          <div className="space-y-3">
            {forecastData.map((f) => (
              <div key={f.material} className="flex items-center justify-between rounded-lg border px-4 py-3">
                <div>
                  <p className="font-medium text-sm">{f.material}</p>
                  <p className="text-xs text-muted-foreground">Dự kiến: {f.forecast}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  f.urgency === "Cao" ? "bg-destructive/10 text-destructive" :
                  f.urgency === "Trung bình" ? "bg-warning/10 text-warning" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {f.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
