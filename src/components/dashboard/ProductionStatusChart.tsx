import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { stage: "Cắt phôi", completed: 45, pending: 12 },
  { stage: "Hàn", completed: 38, pending: 20 },
  { stage: "Sơn", completed: 30, pending: 15 },
  { stage: "Lắp ráp", completed: 25, pending: 18 },
  { stage: "QC", completed: 22, pending: 8 },
];

export default function ProductionStatusChart() {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-card">
      <h3 className="text-sm font-semibold text-card-foreground mb-4">Tiến độ sản xuất</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="stage" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Bar dataKey="completed" name="Hoàn thành" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="pending" name="Đang chờ" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
