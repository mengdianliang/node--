const koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const render = require('koa-art-template')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')

const app = new koa()

app.use(static(__dirname + '/static'))

app.use(bodyParser())

const router = new Router()

// 配置ejs模板引擎中间件
// app.use(views(path.join(__dirname,'./views'), {
//   extension: 'ejs'  // 应用ejs模板引擎
// }))

// 应用ejs模板引擎.后缀名为.html
// app.use(views('views', {
//   map: {html: 'ejs'}
// }))

// 模板引擎art-template
render(app, {
  root: path.join(__dirname, 'views'), // 视图配置
  extname: '.art', // 后缀名
  debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
})

// 中间件
app.use(async (ctx, next) => {
  // 配置公共的信息
  ctx.state.userinfo = '张三'
  console.log(new Date())
  await next()
})
router.get('/', async (ctx) => {
  ctx.cookies.set('user', 'zahngsan', {})
  await ctx.render('index', {
    title: '123',
    num: 18,
    list: ['111', '2222', '3333333']
  })
  // ctx.body = '首页' // 相当于res.writeHead()和 res.end()
})
router.post('/doAdd', async (ctx) => {
  console.log(ctx.request.body)
  ctx.body = '表单提交'
})
router.get('/news', async (ctx) => {
  ctx.body = '新闻页' // 相当于res.writeHead()和 res.end()
})
// 获取get传值
router.get('/newscontent', async (ctx) => {
  // ctx.query ctx.querystring ctx.url  // 推荐
  // ctx.req.query ctx.req.querystring ctx.req.url
  console.log(ctx.query)
  console.log(ctx.querystring)
  console.log(ctx.req.url)
  ctx.body = '新闻详情' // 相当于res.writeHead()和 res.end()
})
router.get('/newsDetail/:id', async (ctx) => {
  // ctx.params  // 推荐
  // ctx.req.params
  console.log(ctx.params)
  ctx.body = '新闻详情' // 相当于res.writeHead()和 res.end()
})
app.use(async (ctx, next) => {
  console.log('中间件01')
  await next()
  if(ctx.status === 404) {
    ctx.status = 404
    ctx.body = '这是一个404页面'
  } else {
    console.log(ctx.url)
  }
})
app.use(router.routes()) // 启动路由
app.use(router.allowedMethods()) // 官方推荐

app.listen(3000, () => {
  console.log('running at port 3000')
})