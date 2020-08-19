// 写四个方法 1.返回html方法 2.返回js方法。。
let fs = require('fs')
let sendPage = {
  sendHtml(req, res) {
    fs.readFile(`src/page${req.url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  },
  sendCss(req, res) {
    fs.readFile(`src${req.url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'text/css;charset=utf-8')
      res.end(data)
    })
  },
  sendJs(req, res) {
    fs.readFile(`src${req.url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
      res.end(data)
    })
  },
  sendImage(req, res) {
    fs.readFile(`src${req.url}`, (error, data) => {
      if(error) {
        return console.log('读取文件失败')
      }
      // res.setHeader() = res.writeHead()     res.write()
      res.setHeader('Content-Type', 'img/jpeg;charset=utf-8')
      res.end(data)
    })
  }
}
module.exports = sendPage