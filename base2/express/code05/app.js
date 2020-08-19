const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const loginRouter = require('./routes/login')
const navRouter = require('./routes/nav')

// 修改模板引擎后缀为html
app.engine('.html', ejs.__express)
// 配置模板引擎，不需要引入
// app.set('view engine', 'ejs')
app.set('view engine', 'html')
// 指定模板位置
app.set('views', __dirname + '/views')
// 配置静态文件
app.use(express.static('public'))
// 配置post中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// 配置cookie
app.use(cookieParser())

// 挂载登录模块
app.use('/login', loginRouter)
app.use('/nav', navRouter)

// 中间件
app.use((req, res, next) => {
 console.log(new Date())
 next()
})
app.get('/', (req, res) => {
  res.cookie('username','zhangsan', {
    maxAge: 10000
  })
  res.render('index', {
    title: 'hehe'
  })
})
app.get('/article', (req, res) => {
  let userInfo = {
    username: '张三',
    age: 20
  }
  res.render('news', {
    userInfo: userInfo,
    article: '<h3>最新消息</h3>',
    flag: true,
    list: ['111', '222', '3333']
  })
})
app.get('/admin/user/add', (req, res) => {
  res.send('admin user add')
})
// 动态路由
app.get('/article/:id', (req, res) => {
  let id= req.params['id']
  res.send('admin user add ' + id)
})
// get传值
app.get('/product', (req, res) => {
  let query = req.query
  console.log(query)
  res.send('get传值')
})
// app.post('/editUser', (req, res) => {
//   res.send('修改操作')
// })
// app.delete('/delUser', (req, res) => {
//   res.send('删除操作')
// })
// 错误处理中间件
app.use((req, res, next) => {
  res.status(404).send('404页面')
})
app.listen(3000, () => {
  console.log('running at port 3000')
})