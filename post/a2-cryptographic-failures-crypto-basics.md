---
title: "(A2) Cryptographic Failures - Crypto Basics - Webgoat"
tag: "webgoat"
subtitle: "Bài viết này mình sẽ hướng dẫn các bạn làm phần Crypto Basics - (A2) Cryptographic Failures"
date: "19-3-2024"
id: "9"
---

## 1. Base64 Encoding

- Chúng ta Copy code đề bài cho: `bXl1c2VyOm15cGFzc3dvcmQ=`, và dán vào trang https://base64.guru/converter/decode để giải mã nó ta sẽ thấy được username và password:
  ![alt](/images/webgoat/H17.png)
- Chúng ta nhập username: `theviblog` và password: `passw0rd` vừa mới tìm được là xong:
  ![alt](/images/webgoat/H18.png)

## 2. Other Encoding

- Copy code đề bài cho là: `{xor}Oz4rPj0+LDovPiwsKDAtOw==`. Dán vào trang https://strelitzia.net/wasXORdecoder/wasXORdecoder.html để giải mã nó, ta sẽ thấy được password.
  ![alt](/images/webgoat/H19.png)
- Copy passoword vừa mời tìm được nhấn `post the answer` là xong:
  ![alt](/images/webgoat/H20.png)

## 3. Plain Hashing

- Lần lượt copy 2 mã để cho dán vào trang: https://crackstation.net/ để xem nó là loại mã gì:
  ![alt](/images/webgoat/H21.png)
  ![alt](/images/webgoat/H22.png)
  Ta có thể thấy được mã thứ nhất là `MD5` và result là `admin`, mã thứ hai là `SHA256` result là `123456`.
- Copy 2 kết quả vừa tìm được vào và nhấn post the answer là xong:
  ![alt](/images/webgoat/H23.png)

Còn tiếp ....
