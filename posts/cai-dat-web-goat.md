---
title: "Hướng dẫn cài đặt và cấu hình WebGOAT để thực hành pentest"
subtitle: "Trong bài viết này, mình sẽ hướng dẫn các bạn cách cài đặt và cấu hình WebGOAT để vừa học, vừa thực hành pentest một cách trực quan"
date: "17-3-2024"
---

### Bài viết được copy từ: https://viblo.asia/p/huong-dan-cai-dat-va-cau-hinh-webgoat-de-thuc-hanh-pentest-1VgZvAL1KAw

##Do lười viết nên copy để test các chức năng của web 😂 😂

Trong bài viết này, mình sẽ hướng dẫn các bạn cách cài đặt và cấu hình WebGOAT để vừa học, vừa thực hành pentest một cách trực quan.

Vậy tại sao lại là WebGOAT?

Sau khi nghiên cứu qua nhiều ứng dụng web để thực hành pentest, mình đã tìm thấy WebGOAT. Nói nôm na WebGOAT là một ứng dụng web được lập trình không an toàn và được phát triển bởi Dự án Bảo mật Ứng dụng Web Mở (OWASP) để hướng dẫn người dùng cách kiểm thử thâm nhập ứng dụng web qua các bài giảng và thực hành.

Để cài đặt, chúng ta cần chuẩn bị những mục sau đây:

- Một máy ảo với hệ điều hành Linux (Bạn có thể tải máy ảo Kali từ trang web [https://www.kali.org/downloads/](https://www.kali.org/downloads/))
- Apache Tomcat 8 (bạn có thể thay đổi phiên bản Tomcat khác tùy theo nhu cầu của bạn)
- Java

_Cần lưu ý rằng một số máy ảo Linux hiện nay đã được cấu hình sẵn với Java. Để kiểm tra phiên bản Java sẵn có trên máy ảo, bạn có thể chạy lệnh sau trên Terminal: `java -version`_

Bây giờ, mình sẽ hướng dẫn chi tiết step-by-step các bước để các bạn có thể cài đặt và cấu hình WebGOAT trên máy ảo của mình.

### Chi tiết các bước cài đặt và cấu hình

- Bước 1: Mở cửa sổ terminal trên máy ảo Kali của bạn
- Bước 2: Cài đặt **Apache Tomcat** bằng cách sử dụng câu lệnh sau:

```
sudo apt-get install tomcat8

```

- Bước 3: Khởi chạy dịch vụ Tomcat bằng câu lệnh sau:

```
service tomcat8 start

```

- Bước 4: Mở trình duyệt web trên máy ảo Linux và truy cập vào địa chỉ `127.0.0.1:8080` để đảm bảo rằng Tomcat được cài đặt đúng cách và nó đang chạy. (port mặc định lúc cài đặt Tomcat là `8080`).
- Bước 5: Cài đặt WebGOAT bằng cách sử dụng câu lệnh sau:

```
wget https://s3.amazonaws.com/webgoat-war/webgoat-container-7.0-SNAPSHOT-war-exec.jar

```

- Bước 6: Để chạy WebGOAT, nhập câu lệnh sau:

```
java -jar webgoat-container-7.0-SNAPSHOT-war-Operating.jar -httpPort 9090

```

Theo mặc định, WebGOAT sẽ chạy trên cổng `8080`, tuy nhiên, chúng ta vẫn có thể tùy chỉnh cổng của nó. Ở câu lệnh bên trên, mình đã chọn chạy nó trên cổng `9090` bằng cách thêm `-httpPort 9090`. Nếu bạn muốn để nó chạy trên cổng `8080`, chỉ cần bỏ qua phần `-httpPort 9090` của câu lệnh trong bước 6.

Sau khi hoàn tất các bước trên, truy cập vào địa chỉ `127.0.0.1:9090/WebGoat` để xem WebGOAT đã được cài đặt thành công hay chưa.

Như vậy là mình đã hướng dẫn xong các bạn các bước để cài đặt WebGOAT trên máy ảo Kali Linux để phục vụ cho việc học tập và thực hành khai thác các lỗ hổng có sẵn trên môi trường WebGOAT.

Để hiểu rõ hơn về cách thức hoạt động cũng như chi tiết về các thành phần có trên môi trường này, các bạn có thể tham khảo thêm trên trang web của OWASP ([https://owasp.org/www-project-webgoat/](https://owasp.org/www-project-webgoat/)) hoặc trực tiếp trên repository của WebGOAT trên Github ([https://github.com/WebGoat/WebGoat](https://github.com/WebGoat/WebGoat)).

Cảm ơn các bạn đã đọc bài viết của mình.
