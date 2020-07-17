const ejs = require('ejs')

const fs = require('fs')

let app = {
  login: (req, res) => {
    console.log('login')
    ejs.renderFile('views/form.ejs', {}, function(err, data) {
      res.end(data)
    })
  },
  dologin: (req, res) => {
    var postStr = ''
    req.on('data', chunk => {
      postStr += chunk
    })
    req.on('end', (err, chunk) => {
      //res.end(postStr);
      console.log(postStr)

      fs.appendFile('login.txt', postStr + '\n', err => {
        if (err) {
          console.log(err)
          return
        }
        console.log('写入数据成功')
      })

      res.end("<script>alert('登录成功');history.back();</script>")
    })
  },
  register: (req, res) => {
    console.log('register')
    res.end('register')
  },
  home: (req, res) => {
    console.log('home')
    res.end('home')
  }
}
module.exports = app
