// 1. 简单http服务
// let http = require('http')
// let server = http.createServer()

// server.on('request', (request, response) => {
//   console.log('收到客户端请求, 请求路径是：' + request.url)
//   // write:用来给客户端发送消息，end用来结束响应
//   response.write('hello')
//   response.end()
// })

// server.listen(3000, () => {
//   console.log('服务器启动成功，监听端口3000')
// })

// 2.路由请求
let http = require('http')
let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  if(url  === '/') {
    res.end('index page')
  } else if(url === '/login') {
    res.end('login page')
  } else if(url === '/products') {
    let products = [
      {
        name: '苹果',
        price: '4565'
      },
      {
        name: '华为',
        price: '4365'
      },
      {
        name: '小米',
        price: '3565'
      }
    ]
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(JSON.stringify(products))
  } else {
    res.end('404 Not found')
  }
})

server.listen(3000, () => {
  console.log('服务器启动成功，监听端口3000')
})
