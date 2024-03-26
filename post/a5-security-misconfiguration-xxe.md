---
title: "(A5) Security Misconfiguration - XXE - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A5) Security Misconfiguration - XXE"
date: "26-3-2024"
id: "17"
---

- XXE (XML external entity) hay tấn công thực thể bên ngoài XML là lỗ hổng lợi dụng tính năng phân tích cú pháp của XML dùng để phân tích cú pháp đầu vào XML từ người dùng. Từ đó kẻ tấn công có thể truy cập đến các tệp cục bộ, chạy các lệnh, quét các dịch vụ và các cổng nội bộ, truy cập mạng nội bộ, từ đó có thể thực hiện 1 cuộc tấn công DOS đến máy chủ dễ bị khai thác

## 1. Let's try

- Khởi động Brup Suite và mở WebGoat trong tình duyệt của Brup Suite:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419324/WebGoat/H67_awhxrt.png)

- Bật Intercept trên Brup Suite.
- Nhấn Submit trên WebGoat và mở Brup Suite xem ta sẽ thấy được Request:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419324/WebGoat/H68_ibvlkr.png)

- Thay đổi XML trong Request theo code bên dưới và nhấn Forward.

```xml
<?xml version="1.0"?><!DOCTYPE comment [<!ENTITY xxe SYSTEM "file:///C:/">]><comment>  <text>&xxe;</text></comment>
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419324/WebGoat/H69_ww9c7b.png)

- Sau đó quay trở lại WebGoat đã tự động cập nhật hoàn thành:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419325/WebGoat/H70_ifp6sa.png)

## 2. Modern REST framework

- Khởi động Brup Suite và mở WebGoat trong tình duyệt của Brup Suite:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419325/WebGoat/H71_osyu6x.png)

- Bật Intercept trên Brup Suite.
- Nhấn Submit trên WebGoat và mở Brup Suite xem ta sẽ thấy được Request:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419325/WebGoat/H72_ctae5o.png)

- Thay đổi `application/json` trở thành `application/xml`, và thêm đoạn code XML bên dưới, sau đó nhấn Forward:

```xml
<?xml version="1.0"?><!DOCTYPE comment [<!ENTITY xxe SYSTEM "file:///C:/">]><comment>  <text> &xxe;</text></comment>
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419325/WebGoat/H73_ygsmoa.png)

- Sau đó quay trở lại WebGoat đã tự động cập nhật hoàn thành:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419326/WebGoat/H74_q6zyeh.png)

## 3. Blind XXE assignment

- Vào trang: http://127.0.0.1:9090/WebWolf/files

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419326/WebGoat/H75_ck9obo.png)

- Tạo một file tên là ** attack.dtd** (nội dung file là đoạn code bên dưới) và Upload nó lên WebWolf:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!ENTITY attackxxe SYSTEM 'file:///C:\Users\asus\.webgoat-2023.8\XXE\theviblog\secret.txt'>
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419326/WebGoat/H76_fxvszi.png)

- Bật Intercept trên Brup Suite.
- Nhấn Submit trên WebGoat, trên Brup Suite ta sẽ thấy được Request:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711419339/WebGoat/H77_hbu1oo.png)
Còn tiếp...
