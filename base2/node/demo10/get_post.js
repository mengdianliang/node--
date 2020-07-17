
//引入http模块
const http = require('http');

const url = require('url');

const ejs = require('ejs');

const fs = require('fs');

//路由:指的就是针对不同请求的 URL，处理不同的业务逻辑。
http.createServer((req, res) => {

	res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});

	//获取get 还是post请求
	let method = req.method.toLowerCase();
	//console.log(method);

	let pathname = url.parse(req.url, true).pathname;

	if(pathname === '/login') {  /*显示登录页面*/
		ejs.renderFile('views/form.ejs', {
		},(err, data) => {
			res.end(data);
		})
	} else if (pathname === '/dologin' && method === 'get'){  /*执行登录的操作*/

		//get获取数据
		console.log(url.parse(req.url,true).query);
		res.end('dologin');
	} else if (pathname=='/dologin' &&method === 'post') {  /*执行登录的操作*/
		let postStr = '';
		req.on('data', (chunk) => {
			postStr += chunk;
		})
		req.on('end', (err, chunk) => {
			//res.end(postStr);
			console.log(postStr);

			fs.appendFile('login.txt', postStr+'\n', (err) => {
				if(err) {
					console.log(err);
					return;
				}
				console.log('写入数据成功');
			})
			res.end("<script>alert('登录成功');history.back();</script>")
		})
	} else {

		ejs.renderFile('views/index.ejs', {
		}, (err, data) => {
			res.end(data)
		})
	}

}).listen(8001);