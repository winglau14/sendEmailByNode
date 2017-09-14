const app = require('express')();
const bodyParser = require('body-parser');//获取post请求的参数
const cors = require('cors');//支持跨域
const email = require('./email.js');//发送邮件的模块
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/sendEmail', cors(), function (req, res) {
    const data = req.body;
    console.log(data.text, data.qq);
    email.send(data.text, data.qq);
    res.send(JSON.stringify(req.body));
});
app.listen(3001);

