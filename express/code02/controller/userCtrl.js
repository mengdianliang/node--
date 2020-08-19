// 写四个方法 1.返回html方法 2.返回js方法。。
let fs = require('fs')
let userCtrl = {
  userLogin(req, res) {
    // get请求
    let users = [{user: '张三', password: '123'}, {user: 'admin', password: '123'}]
    // get请求
    // let isLogin = false
    // let query = req.query
    // for(let i = 0; i < users.length; i++) {
    //   if(users[i].user === query.user && users[i].password === query.password) {
    //     isLogin = true
    //   }
    // }
    // if(isLogin) {
    //   res.send('登陆成功')
    // } else {
    //   res.send('登陆失败')
    // }
    // post请求
    let body = req.body
    let isLogin = false
    for(let i = 0; i < users.length; i++) {
      if(users[i].user === body.user && users[i].password === body.password) {
        isLogin = true
      }
    }
    if(isLogin) {
      res.send('登陆成功')
    } else {
      res.send('登陆失败')
    }
  },
  userRegister(req, res) {
    let users = [{user: '张三', password: '123'}, {user: 'admin', password: '123'}]
    // post请求
    let body = req.body
    let isRegister = true
    for(let i = 0; i < users.length; i++) {
      if(users[i].user === body.user || users[i].password === body.password) {
        isRegister = false
      }
    }
    if(isRegister){
      res.send('注册成功')
    } else {
      res.send('注册失败')
    }
  }
}
module.exports = userCtrl