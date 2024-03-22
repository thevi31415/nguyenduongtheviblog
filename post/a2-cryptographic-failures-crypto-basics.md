---
title: "(A2) Cryptographic Failures - Crypto Basics - Webgoat"
tag: "webgoat"
subtitle: "🐐 Bài viết này mình sẽ hướng dẫn các bạn làm phần Crypto Basics - (A2) Cryptographic Failures"
date: "19-3-2024"
id: "9"
---

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711097747/WebGoat/WebGoat_ad2axz.png)

- **Cryptographic Failures** là một thuật ngữ được sử dụng để mô tả các lỗi liên quan đến việc mã hóa thông tin nhạy cảm. Điều này thường xảy ra khi thông tin được mã hóa theo cách mà kẻ tấn công có thể giải mã được hoặc cách thức giải mã không đảm bảo an toàn bản rõ. Khi đó, những thông tin nhạy cảm có thể bị rò rỉ ra ngoài.

- Các lỗi phổ biến có thể bao gồm việc sử dụng những giao thức truyền dữ liệu dạng rõ như HTTP, FTP, sử dụng những mã hóa đã cũ hoặc yếu, sử dụng những hàm băm không dùng nữa như md5, SHA1, khóa bí mật dễ đoán, và chuỗi mã hóa không được xác thực.

- Để ngăn chặn Cryptographic Failures, bạn có thể không sử dụng những giao thức đã cũ như FTP, SMTP,… để vận chuyển dữ liệu nhạy cảm, đảm bảo các thuật toán mã hóa đạt tiêu chuẩn mạnh mẽ, mã hóa dữ liệu trên đường truyền bằng TLS, HTTPS, lưu trữ password bằng các hàm băm mạnh như Argon2, scrypt, bcrypt,… và luôn sử dụng mã hóa được xác thực thay vì chỉ mã hóa

## 1. Base64 Encoding

- **Base64 Encoding **(mã hóa Base64) là một phương pháp mã hóa dữ liệu nhị phân thành văn bản ASCII bằng cách chuyển đổi dữ liệu sang biểu diễn cơ số 64123.

- Base64 thường được sử dụng để mã hóa các tập tin đa phương tiện (hình ảnh, âm thanh, video,…) và trong các thao tác với files và ảnh24. Mỗi chữ số Base64 không phải là đại diện cuối cùng cho chính xác 6 bit dữ liệu. Do đó, ba byte 8 bit (24 bit) có thể được biểu diễn bằng bốn chữ số Base64 6 bit3.
- Base64 đặc biệt phổ biến trên World Wide Web, trong đó các công dụng của nó bao gồm khả năng đính các tệp hình ảnh hoặc các nội dung nhị phân khác vào bên trong các nội dung văn bản như tệp HTML và CSS3. Base64 cũng được sử dụng rộng rãi để gửi các tệp đính kèm email3.

- Chúng ta Copy code đề bài cho: `bXl1c2VyOm15cGFzc3dvcmQ=`, và dán vào trang https://base64.guru/converter/decode để giải mã nó ta sẽ thấy được username và password:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926572/WebGoat/H17_ckadle.png)
- Chúng ta nhập username: `theviblog` và password: `passw0rd` vừa mới tìm được là xong:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926590/WebGoat/H18_syhwdc.png)

## 2. Other Encoding

- Copy code đề bài cho là: `{xor}Oz4rPj0+LDovPiwsKDAtOw==`. Dán vào trang https://strelitzia.net/wasXORdecoder/wasXORdecoder.html để giải mã nó, ta sẽ thấy được password.
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926591/WebGoat/H19_pct0nd.png)
- Copy passoword vừa mời tìm được nhấn `post the answer` là xong:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926593/WebGoat/H20_lnumw7.png)

## 3. Plain Hashing

- Plain Hashing (băm đơn giản) là một kỹ thuật được sử dụng để chuyển đổi dữ liệu đầu vào không cố định thành dữ liệu đầu ra có kích thước cố định.

- Quá trình này được thực hiện bằng cách sử dụng các công thức toán học như các hàm băm (được thực hiện dưới dạng các thuật toán băm). Mặc dù không phải hàm băm nào cũng sử dụng mật mã hóa, nhưng cái gọi là hàm băm mật mã hóa chính là cốt lõi của tiền mã hóa.

- Các hàm băm truyền thống cũng các hàm băm mật mã hóa đều mang tính tất định. Tính tất định nghĩa là, miễn là đầu vào không đổi, thì thuật toán băm luôn đưa ra cùng một đầu ra (còn gọi là đại diện hoặc băm).

- Lần lượt copy 2 mã để cho dán vào trang: https://crackstation.net/ để xem nó là loại mã gì:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926595/WebGoat/H21_aol56n.png)
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926597/WebGoat/H22_s8qpsv.png)
  Ta có thể thấy được mã thứ nhất là `MD5` và result là `admin`, mã thứ hai là `SHA256` result là `123456`.
- Copy 2 kết quả vừa tìm được vào và nhấn post the answer là xong:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926598/WebGoat/H23_x23gvx.png)

## 4. Signatures

- Chữ ký là một giá trị băm (hash) có thể được sử dụng để kiểm tra tính hợp lệ của một số dữ liệu. Chữ ký có thể được cung cấp riêng biệt so với dữ liệu mà nó xác thực, hoặc trong trường hợp của CMS hoặc SOAP có thể được bao gồm trong cùng một tệp. (Nơi một số phần của tệp đó chứa dữ liệu và một số phần chứa chữ ký).

- Việc ký kết được sử dụng khi tính toàn vẹn quan trọng. Nó được dùng như một bảo đảm rằng dữ liệu được gửi từ Bên-A đến Bên-B không bị thay đổi. Vì vậy, Bên-A ký kết dữ liệu bằng cách tính giá trị băm của dữ liệu và mã hóa giá trị băm đó bằng một khóa riêng không đối xứng. Bên-B sau đó có thể xác minh dữ liệu bằng cách tính giá trị băm của dữ liệu và giải mã chữ ký để so sánh xem hai giá trị băm có giống nhau không.
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926600/WebGoat/H24_vmbdof.png)
- Đề bài cho một mã private RSA, yêu cầu dùng OpenSSL để tìm ra modulus và public key
- Tạo một file tên là `privatekey.pem` chứa đoạn mã đề bài cho:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926602/WebGoat/H25_xvxreq.png)
- Vào trang: https://www.cryptool.org/en/cto/openssl để upload file `privatekey.pem` lên:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926604/WebGoat/H26_butmkt.png)
- Gõ lệnh:

  ```json
  openssl rsa -in privatekey.pem -outform PEM -pubout -out publickey.pem
  ```

Để có thể lấy file`publickey.pem`
![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926606/WebGoat/H27_kkuvzx.png)

- Gõ lệnh:

```json
openssl rsa -pubin -in publickey.pem -text -noout -modulus
```

Để trích xuất modulus từ `publickey.pem`
![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926608/WebGoat/H28_tcnibm.png)

- Tiến hành lưu modulus vừa tìm được vào file modulus và upload lên OpenSSL
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926610/WebGoat/H29_q6b9wf.png)
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926612/WebGoat/H30_focgpi.png)
- Gõ lệnh:

  ```json
    openssl dgst -sha256 -sign privatekey.pem -out sign.sha256 modulus
  ```

Để tạo chữ ký với mã băm SHA-266 tuwg modulus và privatekey. Lưu vào file `sign.sha256`
![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926614/WebGoat/H31_ap9uvz.png)

- Gõ lệnh:

  ```json
  openssl enc -base64 -in sign.sha256 -out sign.sha256.base64
  ```

Để mã hóa `sign.sha256` dưới dạng Base64 và lưu vào file `sign.sha256.base64`:
![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926614/WebGoat/H31_ap9uvz.png)

- Để lấy file gõ lệnh:

  ```json
  cat sign.sha256.base64
  ```

  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926618/WebGoat/H33_pbjbex.png)

- Copy modulus và signature mới vừa tìm được và nhấn `post the answer` là xong:
  ![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1710926620/WebGoat/H34_igdoxl.png)

Còn tiếp...
