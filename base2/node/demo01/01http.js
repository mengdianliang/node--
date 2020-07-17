var http = require('http')
var url = require('url')
http
  .createServer((req, res) => {
    console.log(req.url) // 获取url
    res.writeHead(200, { 'Content-type': "text/html;charset='utf-8'" }) // 设置响应头
    res.write('<head><meta charset="UTF-8"></head>')
    if (req.url !== '/favicon.ico') {
      var userinfo = url.parse(req.url, true).query
      console.log(`姓名：${userinfo.name}--年龄：${userinfo.age}`)
    }
    res.write('this is nodejs')
    res.write('<h2>你好 node</h2>')
    res.end() // 结束响应头
  })
  .listen(3000, () => {
    console.log('runniong at port 3000')
  })
