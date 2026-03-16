import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "T1", revenue: 120, cost: 85 },
  { month: "T2", revenue: 145, cost: 92 },
  { month: "T3", revenue: 168, cost: 105 },
  { month: "T4", revenue: 135, cost: 88 },
  { month: "T5", revenue: 190, cost: 115 },
  { month: "T6", revenue: 210, cost: 125 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-card">
      <h3 className="text-sm font-semibold text-card-foreground mb-4">Doanh thu & Chi phí (triệu VND)</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Area type="monotone" dataKey="revenue" name="Doanh thu" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.15)" strokeWidth={2} />
            <Area type="monotone" dataKey="cost" name="Chi phí" stroke="hsl(var(--accent))" fill="hsl(var(--accent) / 0.1)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
