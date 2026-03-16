import { motion } from "framer-motion";
import { Settings as SettingsIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Cài đặt</h1>
        <p className="text-sm text-muted-foreground mt-1">Quản lý cấu hình hệ thống</p>
      </div>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mb-4">
          <SettingsIcon className="h-8 w-8 text-muted-foreground" />
        </div>
        <p className="text-lg font-semibold">Trang cài đặt</p>
        <p className="text-sm text-muted-foreground mt-1">Phân quyền RBAC, cấu hình xưởng sẽ được thêm sau khi kết nối Lovable Cloud</p>
      </div>
    </motion.div>
  );
}
