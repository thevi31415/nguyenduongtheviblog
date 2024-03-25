---
title: "(A3) Injection - Cross Site Scripting (Stored) - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A3) Injection - Cross Site Scripting (Stored)"
date: "25-3-2024"
id: "14"
---

- **Stored XSS **là dạng tấn công mà hacker chèn trực tiếp các mã độc vào cơ sở dữ liệu của website. Dạng tấn công này xảy ra khi các dữ liệu được gửi lên server không được kiểm tra kỹ lưỡng mà lưu trực tiếp vào cơ sở dữ liệu. Khi người dùng truy cập vào trang web này thì những đoạn script độc hại sẽ được thực thi chung với quá trình load trang web.

## 1. Stored XSS

- Mở một Tab thứ 2 có URL giống với URL hiện tại:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711377579/WebGoat/H64_zzh2uc.png)

- Ta bình luận với nội dung là đoạn code bên dưới. Ta sẽ thấy được số phoneHome :

```javascript
<script>webgoat.customjs.phoneHome()</script>
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711377578/WebGoat/H62_eec6de.png)

- Trở lại Tab đầu tiên nhập số mới vừa tìm được và nhấn Submit

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711377578/WebGoat/H63_mningr.png)
