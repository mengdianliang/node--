const Koa = require('koa')
const Router = require('koa-router')
const render = require('koa-art-template')
const path = require('path')

const app = new Koa()
const router = new Router()

// 模板引擎art-template
render(app, {
  root: path.join(__dirname, 'views'), // 视图配置
  extname: '.html', // 后缀名
  debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
})

let adminRouter = require('./routes/admin')
let newsRouter = require('./routes/news')

router.get('/', async (ctx) => {
  ctx.body = '首页'
})

router.use('/admin', adminRouter.routes())
router.use('/news', newsRouter.routes())

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('listening at port 3000')
})
