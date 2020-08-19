// app.js 是服务器入口文件
// package.json 是项目配置和依赖文件
// src 静态资源文件
// config (配置文件)
// routers (路由文件)
// controller 控制器文件夹
// dao 数据持久层

let http = require('http')
let fs = require('fs')
let server = http.createServer()

server.on('request',(req, res) => {
  let url = req.url
  let splitUrl = url.split('.')

  if(splitUrl[1] === 'html') {
    fs.readFile(`src/page${url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if(splitUrl[1] === 'css') {
    fs.readFile(`src${url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'text/css;charset=utf-8')
      res.end(data)
    })
  } else if(splitUrl[1] === 'js') {
    fs.readFile(`src${url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
      res.end(data)
    })
  } else if(splitUrl[1] === 'jpg' || splitUrl[1] === 'png' || splitUrl[1] === 'gif') {
    fs.readFile(`src${url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'img/jpeg;charset=utf-8')
      res.end(data)
    })
  }else {
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('running at port 3000')
})