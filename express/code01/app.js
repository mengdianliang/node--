// app.js 是服务器入口文件
// package.json 是项目配置和依赖文件
// src 静态资源文件
// config (配置文件)
// routers (路由文件)
// controller 控制器文件夹
// dao 数据持久层

let http = require('http')
let fs = require('fs')

let sendPage = require('./controller/pageCtrl')
let server = http.createServer()

server.on('request',(req, res) => {
  let url = req.url
  let splitUrl = url.split('.')

  if(splitUrl[1] === 'html') {
    sendPage.sendHtml(req, res)
  } else if(splitUrl[1] === 'css') {
    sendPage.sendCss(req, res)
  } else if(splitUrl[1] === 'js') {
    sendPage.sendJs(req, res)
  } else if(splitUrl[1] === 'jpg' || splitUrl[1] === 'png' || splitUrl[1] === 'gif') {
    sendPage.sendImage(req, res)
  } else if(splitUrl[1] === 'ico') {
    res.end()
  } else {
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('running at port 3000')
})