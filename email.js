//发送邮件模块
exports.send = function (text, qq) {
    const nodemailer = require('nodemailer');
    const smtpTransport = require('nodemailer-smtp-transport');
    const transporter = nodemailer.createTransport(smtpTransport({
        host: "smtp.qq.com", // 主机
        secure: true, // 使用 SSL
        secureConnection: true, // 使用 SSL
        port: 465, // SMTP 端口
        auth: {
            user: "1234567@qq.com", // 账号
            pass: "oswxhboofsnrbjch" // 密码 SMTP独立设置密码
        }
    }));
    const mailOptions = {
        from: '1234567@qq.com', // 发件地址
        to: qq, // 收件列表支持array
        subject: 'Hello', // 标题
        html: '<b>' + text + '</b>' // html 内容
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
};
