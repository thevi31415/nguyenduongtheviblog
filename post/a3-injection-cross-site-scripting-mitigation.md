---
title: "(A3) Injection - Cross Site Scripting (Mitigation) - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A3) Injection - Cross Site Scripting (Mitigation)"
date: "26-3-2024"
id: "15"
---

## 1. Reflective XSS

- Ngăn chặn XSS sử dụng escaping
- Ta cập nhật lại đoạn code mẫu đề bài cho như sau và nhấn submit là xong:

```java
<%@taglib prefix="e" uri="https://www.owasp.org/index.php/OWASP_Java_Encoder_Project" %> <html>
<html>
<head>
    <title>Using GET and POST Method to Read Form Data</title>
</head>
<body>
    <h1>Using POST Method to Read Form Data</h1>
    <table>
        <tbody>
            <tr>
                <td><b>First Name:</b></td>
                <td>${e:forHtml(param.first_name)}</td>
            </tr>
            <tr>
                <td><b>Last Name:</b></td>
                <td>${e:forHtml(param.last_name)}</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711414460/WebGoat/H65_ztois7.png)

##2. Stored XSS

- Một cách để ngăn chặn XSS Store là sử dụng OWASP AntiSamy. AntiSamy có thể tạo "clean" string dựa trên tệp chính sách có thể điều chỉnh.
- Ta cập nhật lại đoạn code mẫu đề bài cho như sau và nhấn submit là xong:

```java
import org.owasp.validator.html.*;
import MyCommentDAO;

public class AntiSamyController {
    public void saveNewComment(int threadID, int userID, String newComment){
        Policy policy = Policy.getInstance("antisamy-slashdot.xml");
        AntiSamy as = new AntiSamy();
        CleanResults cr = as.scan(newComment, policy);
        MyCommentDAO.addComment(threadID, userID, cr.getCleanHTML());
    }
}
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711414460/WebGoat/H66_byrx86.png)
