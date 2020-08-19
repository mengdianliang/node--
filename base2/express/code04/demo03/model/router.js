let fs = require('fs')
let path = require('path')
let url = require('url')

function getMime(extName, callback) {
  fs.readFile('./mime.json', (error, data) => {
    if(error) {
      console.log('读取mime.json文件失败')
      return 
    }
   let Mimes = JSON.parse(data.toString())
   let result = Mimes[extName] || 'text/html'
   callback(result)
  })
}

exports.statics = (req, res, staticpath) => {
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