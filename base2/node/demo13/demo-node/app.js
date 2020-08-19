// 引入http模块
let http = require('http')
let url = require('url')
let server = http.createServer((req, res) => {
  let urlPath = url.parse(req.url, true)
  console.log(urlPath.query)
  // res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
  // res.end('你好')
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
  res.end('<h2>你好 nodejs</h2>')
})

server.listen(3000, () => {
  console.log('running at port 3000')
})