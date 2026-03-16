import { AlertTriangle } from "lucide-react";

const alerts = [
  { material: "Sắt hộp 40x40", current: 120, min: 200, unit: "mét" },
  { material: "Sơn tĩnh điện đen", current: 15, min: 50, unit: "kg" },
  { material: "Vít M8", current: 500, min: 1000, unit: "cái" },
];

export default function InventoryAlerts() {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <h3 className="text-sm font-semibold text-card-foreground">Cảnh báo tồn kho</h3>
      </div>
      <div className="space-y-3">
        {alerts.map((item) => {
          const percent = Math.round((item.current / item.min) * 100);
          return (
            <div key={item.material} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.material}</span>
                <span className="text-muted-foreground">
                  {item.current}/{item.min} {item.unit}
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-destructive transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
