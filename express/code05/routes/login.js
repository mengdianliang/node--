const express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  console.log(req.cookies.username)
  res.render('form', {})
})
router.post('/doLogin', (req, res) => {
  console.log(req.body)
  res.send('登录提交')
})
router.get('/register', (req, res) => {
  res.send('注册页面')
})
module.exports = router