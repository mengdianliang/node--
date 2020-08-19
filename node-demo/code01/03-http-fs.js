let http = require('http')
let fs = require('fs')
let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  if(url  === '/') {
    fs.readFile('./resource/index.html', (error, data) => {
      if(error) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('文件读取失败，请稍后重试')
        return
      }
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if(url === '/baby') {
    fs.readFile('./resource/22.jpg', (error, data) => {
      if(error) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('文件读取失败，请稍后重试')
        return
      }
      res.setHeader('Content-Type', 'image/jpeg')
      res.end(data)
    })
  } else {
    res.end('404 Not found')
  }
})

server.listen(3000, () => {
  console.log('服务器启动成功，监听端口3000')
})
