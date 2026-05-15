# Web_Linh_Kien_Dien_Tu

Nền tảng website thương mại điện tử chuyên bán linh kiện điện tử (Arduino, Raspberry Pi, cảm biến, module, IC...).

## Kiến trúc triển khai hiện tại

```text
frontend/  (React + Vite + Tailwind + Redux)
server/    (Node.js + Express REST API)
```

## Frontend (đã khởi tạo)

- React + Vite + TailwindCSS.
- Router cho các màn hình chính:
  - Trang chủ
  - Danh sách sản phẩm + lọc/sắp xếp
  - Chi tiết sản phẩm
  - Giỏ hàng
  - Thanh toán
  - Đăng nhập
  - Hồ sơ cá nhân
  - Đơn hàng
  - Admin dashboard
- Redux Toolkit quản lý giỏ hàng.
- SwiperJS cho slider trang chủ.
- Framer Motion cho hiệu ứng hover card.

### Chạy frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend (đã khởi tạo)

- Express REST API theo hướng MVC.
- Middleware bảo mật nền tảng:
  - `helmet`
  - `cors`
  - `express-rate-limit`
- JWT authentication cơ bản.
- API đã có:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `GET /api/products`
  - `GET /api/products/:id`
  - `POST /api/products` (admin)
  - `PUT /api/products/:id` (admin)
  - `DELETE /api/products/:id` (admin)
  - `POST /api/orders` (auth)
  - `GET /api/orders` (auth)

### Chạy backend

```bash
cd server
npm install
npm run dev
```

## Database

- Schema MySQL đặt tại `server/schema.sql`.
- Bao gồm các bảng lõi: `users`, `categories`, `products`, `orders`, `order_items`, `reviews`.

## Ghi chú phạm vi

Repository đã được nâng cấp thành nền tảng đầy đủ để tiếp tục phát triển các hạng mục mở rộng (SEO sâu, thanh toán thực tế VNPay/MoMo, social login, chatbot AI, dashboard analytics nâng cao, tích hợp vận chuyển...).
