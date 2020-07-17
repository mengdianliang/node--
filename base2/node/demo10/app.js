//引入http模块
const http = require('http');

const url = require('url');

const ejs = require('ejs');

http.createServer((req,res) => {
  res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
  let pathname = url.parse(req.url).pathname
  if(pathname === '/login') {
    let data = '你好我是后台数据'
    let list = [
			'1111',
			'2222',
			'3333',
    ]
    //把数据库的数据渲染到模板上面
		ejs.renderFile('views/login.ejs', {
			msg: data,
			list: list
		},(err, data) => {
			res.end(data)

		})
  } else {

		let msg = '这是注册页面，也是注册的路由'
		let h = "<h2>这是一个h2</h2>"
		ejs.renderFile('views/register.ejs', {
			msg: msg,
			h: h
		},(err, data) => {

			res.end(data)

		})
	}
}).listen(8001)
