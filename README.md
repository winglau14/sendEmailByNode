# sendEmailByNode
基于'express'、'cors'、'nodemailer'、'nodemailer-smtp-transport'、'body-parser'这几个包，实现的发邮件的功能，邮件发送是以QQ邮箱发送的，
 <br/>
 <br/>
直接运行node app.js <br/>
<br/>
支持post请求,如：<br/>
localhost:3001/sendEmail,post参数{qq:'123456@qq.com',text:'hello world!'},qq为你要发送的人，text为你要发送的内容<br/>
<br/>
因为是基于QQ邮箱来发送的，所以会遇到一些坑。
<br/>
<br/>
常见错误<br/>
1.账号未设置该服务<br/>
解决方案:<br/>
QQ邮箱 -> 设置 -> 帐户 -> 开启服务：POP3/SMTP服务<br/>
2.发件账号与认证账号不同<br/>
3.登录认证失败，可能由于smpt独立密码错误导致 我在qq设置的时候就遇到过<br/>
解决方案：<br/>
qq邮箱在测试smtp邮件服务器时,一,在qq邮箱,设置,账户设置中.开启下smtp.二,设置一下独立密码.三,在配置smtp服务器的密码时,注意一定要填你设置的独立密码.不要用邮箱登录密码.否则会提示535 Authentication failed错误.
