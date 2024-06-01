---
title: "(A7) Identity & Auth Failure - Authentication Bypasses - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A7) Identity & Auth Failure - Authentication Bypasses"
date: "29-3-2024"
id: "19"
---

## 1. 2FA Password Reset

- Chúng ta vào source code của WebGoat ( [LINK](https://github.com/WebGoat/WebGoat/blob/main/src/main/java/org/owasp/webgoat/lessons/authbypass/AccountVerificationHelper.java "LINK")) và tìm đến File `AccountVerificationHelper.java`. Ta có thể thấy một hàm dùng để kiểm tra là hàm `verifyAccount`:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711683115/WebGoat/H79_fpy5ie.png)

```java
public boolean verifyAccount(Integer userId, HashMap<String, String> submittedQuestions) {
    // short circuit if no questions are submitted
    if (submittedQuestions.entrySet().size() != secQuestionStore.get(verifyUserId).size()) {
      return false;
    }

    if (submittedQuestions.containsKey("secQuestion0")
        && !submittedQuestions
            .get("secQuestion0")
            .equals(secQuestionStore.get(verifyUserId).get("secQuestion0"))) {
      return false;
    }

    if (submittedQuestions.containsKey("secQuestion1")
        && !submittedQuestions
            .get("secQuestion1")
            .equals(secQuestionStore.get(verifyUserId).get("secQuestion1"))) {
      return false;
    }

    // else
    return true;
}
```

Trong hàm này hệ thống sẽ kiểm tra giá trị `secQuestion1` và `secQuestion0`. Ta chỉ cần đổi tên 2 trường này thì sẽ hoàn thành bài này.

- Khởi động Brup Suite và mở WebGoat trên trình duyệt của Brup Suite:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711683115/WebGoat/H80_ymey1d.png)

- Bật Intercept trên Brup Suite, và nhập các thông tin trên WebGoat nhấn Submit. Ta sẽ thấy được một Request trên Brup Suite như sau:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711683115/WebGoat/H81_alo5wv.png)

- Thay đổi `secQuestion0` thành `secQuestion3`, `secQuestion1` thành `secQuestion4`:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711683115/WebGoat/H82_wybzvh.png)

- Nhấn Forward. Webgoat tự động cập nhật đã hoàn thành bài này:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711683115/WebGoat/H83_krdalc.png)

## Tham khảo:

1. Đỗ Tuấn: [LINK](https://www.youtube.com/watch?v=syJl0lz2-5Q&list=PLnj5dvzj6CTrOtVLaXb9qvlBuMfpf1ySn&index=13 "LINK")
