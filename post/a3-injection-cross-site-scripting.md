---
title: "(A3) Injection - Cross Site Scripting - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A3) Injection - Cross Site Scripting"
date: "22-3-2024"
id: "13"
---

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711097747/WebGoat/WebGoat_ad2axz.png)

## 1. What is XSS?

- Mở đường link hiện tại trong một tab thứ 2. Nhập `alert(document.cookie);` vào Tab Console trên trình duyệt và nhấn Enter:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201759/WebGoat/H55_zahlcb.png)

- Quay trở lại trang trước tick vào **"The cookies are the same on each tab"** và nhấn Submit:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201758/WebGoat/H56_fsql79.png)

##2. Try It! Reflected XSS

- Nhập đoạn code sau vào ô **Enter your credit card number** và nhấn Purchase:

```javascript
<script>alert("XSS Test")</script>
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201758/WebGoat/H57_egugfr.png)

##3. Identify potential for DOM-Based XSS

- Tìm đến file `GoatRouter.js` trong Tab Sources. Nhập `start.mvc#test/` và Submit:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201759/WebGoat/H58_ivqmqv.png)

##4. Try It! DOM-Based XSS

- Đi đến trang: [http://127.0.0.1:8080/WebGoat/start.mvc#test/WhateverYouType](http://127.0.0.1:8080/WebGoat/start.mvc#test/WhateverYouType "http://127.0.0.1:8080/WebGoat/start.mvc#test/WhateverYouType").

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201758/WebGoat/H59_dkqlq1.png)

- Đinh đến trang: [http://127.0.0.1:8080/WebGoat/start.mvc#test/%3Cscript%3Ewebgoat.customjs.phoneHome%28%29%3C%2Fscript%3E](http://127.0.0.1:8080/WebGoat/start.mvc#test/%3Cscript%3Ewebgoat.customjs.phoneHome%28%29%3C%2Fscript%3E "http://127.0.0.1:8080/WebGoat/start.mvc#test/%3Cscript%3Ewebgoat.customjs.phoneHome%28%29%3C%2Fscript%3E")

- Ta sẽ thấy được một con số là: -1588312798

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201760/WebGoat/H60_ejgsin.png)

- Dán số đó vào và Submit:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711201759/WebGoat/H61_tjqf0g.png)
