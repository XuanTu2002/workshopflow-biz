# MechERP — Hệ thống quản lý xưởng cơ khí

MechERP là ứng dụng web quản lý toàn diện dành cho xưởng sản xuất cơ khí. Hệ thống giúp chủ xưởng theo dõi đơn hàng, sản xuất, kho vật tư, nhân sự và doanh thu trên một nền tảng duy nhất.

---

## Tính năng chính

| Module | Mô tả |
|--------|-------|
| **Tổng quan (Dashboard)** | Thống kê nhanh đơn hàng mới, số lệnh đang sản xuất, cảnh báo tồn kho thấp, doanh thu tháng; biểu đồ trạng thái sản xuất và doanh thu; danh sách đơn hàng gần đây |
| **Đại lý & Đơn hàng** | Quản lý danh sách đơn hàng theo đại lý, theo dõi trạng thái (Chờ duyệt → Cắt phôi → Đang SX → QC → Hoàn thành), công nợ & đặt cọc |
| **Sản phẩm & BOM** | Quản lý danh mục sản phẩm (cửa sắt, lan can inox, cổng, nội thất…), định mức vật tư (Bill of Materials) cho từng sản phẩm |
| **Sản xuất** | Theo dõi lệnh sản xuất (LSX) theo từng công đoạn: Cắt phôi → Hàn/Cơ khí → Sơn tĩnh điện → Lắp ráp → QC; hiển thị tiến độ % và tổ đội phụ trách |
| **Kho vật tư** | Quản lý tồn kho nguyên liệu và thành phẩm, cảnh báo khi tồn kho dưới mức tối thiểu, hỗ trợ nhập kho |
| **Nhân sự & Lương** | Danh sách thợ theo tổ đội, tính lương khoán theo sản phẩm, bảng lương hàng tháng |
| **Báo cáo** | Tổng hợp báo cáo kinh doanh và sản xuất |
| **Cài đặt** | Cấu hình hệ thống |

---

## Công nghệ sử dụng

- **React 18** + **TypeScript** — nền tảng UI
- **Vite** — build tool và dev server
- **React Router v6** — điều hướng client-side
- **TanStack Query (React Query v5)** — quản lý state & fetching dữ liệu
- **Tailwind CSS** — styling utility-first
- **shadcn/ui** + **Radix UI** — bộ component giao diện
- **Framer Motion** — animation chuyển trang
- **Recharts** — biểu đồ thống kê
- **React Hook Form** + **Zod** — form và validation
- **Vitest** + **Playwright** — unit test và E2E test

---

## Cài đặt & Chạy dự án

**Yêu cầu:** Node.js ≥ 18 và npm (hoặc bun).

```sh
# 1. Clone repository
git clone https://github.com/XuanTu2002/workshopflow-biz.git
cd workshopflow-biz

# 2. Cài đặt dependencies
npm install

# 3. Chạy môi trường phát triển
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`.

---

## Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Khởi động dev server với hot-reload |
| `npm run build` | Build production |
| `npm run build:dev` | Build ở chế độ development |
| `npm run preview` | Xem trước bản build |
| `npm run lint` | Kiểm tra lỗi ESLint |
| `npm run test` | Chạy unit test (Vitest) |
| `npm run test:watch` | Chạy unit test ở chế độ watch |

---

## Cấu trúc thư mục

```
src/
├── components/
│   ├── dashboard/      # Các widget của trang Tổng quan
│   ├── layout/         # AppLayout, AppSidebar
│   └── ui/             # Component dùng chung (shadcn/ui)
├── hooks/              # Custom React hooks
├── lib/                # Tiện ích (utils, helpers)
├── pages/              # Các trang chính của ứng dụng
│   ├── Dashboard.tsx
│   ├── OrdersPage.tsx
│   ├── ProductsPage.tsx
│   ├── ProductionPage.tsx
│   ├── InventoryPage.tsx
│   ├── HRPage.tsx
│   ├── ReportsPage.tsx
│   └── SettingsPage.tsx
└── App.tsx             # Cấu hình routing
```
