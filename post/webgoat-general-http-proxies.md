---
title: "General - HTTP Proxies - Webgoat"
tag: "webgoat"
subtitle: "🐐 Bài viết này mình sẽ hướng dẫn các bạn làm phần HTTP Proxies - General"
date: "19-3-2024"
id: "3"
---

## 1. Khái niệm

A proxy is some forwarder application that connects your HTTP client to backend resources. HTTP clients can be browsers or applications like curl, SOAP UI, Postman, etc. Usually, these proxies are used for routing and getting internet access when there is no direct connection to the internet from the client itself. HTTP proxies are therefore also ideal when you are testing your application. You can always use the proxy log records to see what was actually sent from client to server. So you can check the request and response headers and the XML, JSON, or other payloads.

HTTP Proxies receive requests from a client and relay them. They also typically record them. They act as a man-in-the-middle. It even works fine with or without HTTPS as long as your client or browser trusts the certificate of the HTTP Proxy.
![alt](/images/webgoat/H10.png)

## 2. Intercept and modify a request

- Khởi động Brup và mở Webgoat bằng trình duyệt của Brup
- Bật Intercept của Brup và nhấn nút Submit trên WebGoat, ta sẽ thấy:
  ![alt](/images/webgoat/H11.png)
- Thực hiện các thay đổi sau:
  - Thay đổi Method thành `GET`
  - Thêm header là `x-request-intercepted:true`
  - Thay đổi changMe thành `Requests+are+tampered+easily`

![alt](/images/webgoat/H12.png)

- Sau khi thay đổi nhấn `Forward` là xong:
  ![alt](/images/webgoat/H13.png)

## Tham khảo:

1.  Shahzada Khurram: [Link](https://www.youtube.com/watch?v=LjPMTbt9aAE "Link")
