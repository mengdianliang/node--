const url= require('url')
const fs = require('fs')
const path = require('path')
// 私有方法
let getFileMime = function(extname) {
  let data = fs.readFileSync('./mime.json')
  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]
}
// 静态web服务方法
let initStatic = (req, res, staticpath) => {
  let pathname = url.parse(req.url).pathname
  if(pathname === '/') {
    pathname = '/index.html'
  } 
  let extname = path.extname(pathname)
  if(pathname != '/favicon.ico') {
    fs.readFile(staticpath + '/' + pathname, (error, data) => {
      if(error) {
        fs.readFile(staticpath+'/404.html',(error,data404) => {
          if(error){
            console.log(error)
          }
          res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"})
          res.write(data404)
          res.end()
        })
        return
      }
      getMime(extname,(mime) => {
        res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
        res.write(data)
        res.end()
      })
    })
  }
}
//封装方法改变res  绑定res.send()
function changeRes(res) {
  res.send = function(data) {
    res.writeHead(200, { 'Content-Type': "text/html;charset='utf-8'" })

    res.end(data)
  }
}

let server = () => {
  let G = {
    _get: {},
    _post: {},
    staticPath: 'static'
  }

  let app = (req, res) => {
    // 扩展res的方法
    changeRes(res)
    // 配置静态web服务
    initStatic(req, res, G.staticPath)

    let pathname = url.parse(req.url).pathname

    if (!pathname.endsWith('/')) {
      pathname = pathname + '/'
    }
    //获取请求的方式 get  post
    let method = req.method.toLowerCase()

    if (G['_' + method][pathname]) {
      if (method == 'post') {
        /*执行post请求*/

        let postStr = ''
        req.on('data', function(chunk) {
          postStr += chunk
        })
        req.on('end', function(err, chunk) {
          req.body = postStr /*表示拿到post的值*/

          G['_' + method][pathname](req, res) /*执行方法*/
        })
      } else {
        /*执行get请求*/
        G['_' + method][pathname](req, res) /*执行方法*/
      }
    } else {
      res.end('no router')
    }
  }

  app.get = function(string, callback) {
    if (!string.endsWith('/')) {
      string = string + '/'
    }
    if (!string.startsWith('/')) {
      string = '/' + string
    }

    //    /login/
    G._get[string] = callback
  }

  app.post = function(string, callback) {
    if (!string.endsWith('/')) {
      string = string + '/'
    }
    if (!string.startsWith('/')) {
      string = '/' + string
    }
    //    /login/
    G._post[string] = callback
  }
  // 配置静态web服务目录
  app.static = function(staticpath) {
    G.staticPath = staticpath
  }

  return app
}

module.exports = server()