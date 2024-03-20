---
title: "General - HTTP Basics - Webgoat"
tag: "webgoat"
subtitle: " 🐐 Bài viết này mình sẽ hướng dẫn các bạn làm phần HTTP Basics - General"
date: "18-3-2024"
id: "2"
---

## 1. Khái niệm

All HTTP transactions follow the same general format. Each client request and server response has three parts: the** request or response line, a header section and the entity body.**
The client initiates a transaction as follows:

- The client contacts the server and sends a document request. A GET request can have url parameters and those parameters will be available in the web access logs.

```xml
  GET /index.html?param=value HTTP/1.0
```

- Next, the client sends optional header information to inform the server of its configuration and the document formats it will accept.

```xml
  User-Agent: Mozilla/4.06 Accept: image/gif,image/jpeg, /
```

- In a POST request, the user supplied data will follow the optional headers and is not part of the contained within the POST URL.
  ![alt](/images/webgoat/H6.png)

## 2. Try It!

Đơn giản chỉ cần nhập username và bấm `Go !`:
![alt](/images/webgoat/H7.png)

## 3. The Quiz

- Click chuột phải chọn Inspect trên trình duyệt. Nhập POST vào ô đầu tiên và nhấn `Go !`
- Vào tab Network ta sẽ thấy được magic number là `78`:
  ![alt](/images/webgoat/H8.png)
- Nhập magic number và đã submit thành công:
  ![alt](/images/webgoat/H9.png)

## Tham khảo:

1.  BitsPlease: [Link](https://www.youtube.com/watch?v=6ZMSqXF2jao "Link")
