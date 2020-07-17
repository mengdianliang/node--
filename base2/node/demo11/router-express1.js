let G = {}
let app = (req, res) => {
  if (G['login']) {
    /*执行注册的方法*/
    G['login'](req, res)
  }
}

//定义一个get方法
app.get = (string, callback) => {
  G[string] = callback
}

//执行get方法
app.get('login', (req, res) => {
  console.log('login' + req)
})

setTimeout(() => {
  app('req', 'res')
}, 1000)
