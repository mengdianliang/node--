const http = require('http')
const url = require('url')
const G = {}

//定义方法开始结束
let app = (req, res) => {
  let pathname = url.parse(req.url).pathname

  if (!pathname.endsWith('/')) {
    pathname = pathname + '/'
  }

  if (G[pathname]) {
    G[pathname](req, res) /*执行注册的方法*/
  } else {
    res.end('no router')
  }
}

//定义一个get方法
app.get = (string, callback) => {
  if (!string.endsWith('/')) {
    string = string + '/'
  }
  if (!string.startsWith('/')) {
    string = '/' + string
  }

  //    /login/
  G[string] = callback

  //注册方法
  //G['login']=function(req,res){
  //
  //}
}

//只要有请求 就会触发app这个方法
http.createServer(app).listen(3000)

//注册login这个路由（方法）
app.get('login', (req, res) => {
  console.log('login')
  res.end('login')
})

app.get('register', (req, res) => {
  console.log('register')
  res.end('register')
})
