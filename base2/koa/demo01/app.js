const Koa = require('koa')
const Router = require('koa-router')
let app = new Koa()
let router = new Router()
// 配置路由
router.get('/', async ctx => {
  await ctx.body = '首页'
})

router.get('/news', async ctx => {
  ctx.body = '新闻列表页面'
})
//动态路由  http://localhost:3002/newscontent/xxxx
router.get('/newscontent/:aid', async ctx => {
  //获取动态路由的传值

  console.log(ctx.params) //{ aid: '456' }

  ctx.body = '新闻详情'
})
//动态路由里面可以传入多个值

//http://localhost:3002/package/123/456

router.get('/package/:aid/:cid', async ctx => {
  //获取动态路由的传值

  console.log(ctx.params) //{ aid: '123', cid: '456' }

  ctx.body = '新闻详情'
})
//获取get传值
//http://localhost:3002/newsInfo?aid=123

router.get('/newsInfo', async ctx => {
  /*在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
   query：返回的是格式化好的参数对象。
   querystring：返回的是请求字符串。*/

  //从ctx中读取get传值

  console.log(ctx.query) //{ aid: '123' }       获取的是对象   用的最多的方式      ******推荐

  console.log(ctx.querystring) //aid=123&name=zhangsan      获取的是一个字符串

  console.log(ctx.url) //获取url地址

  //ctx里面的request里面获取get传值

  console.log(ctx.request.url)
  console.log(ctx.request.query) //{ aid: '123', name: 'zhangsan' }  对象
  console.log(ctx.request.querystring) //aid=123&name=zhangsan

  ctx.body = '新闻详情'
})

// 配置中间件
// app.use(async ctx => {
//   ctx.body = '你好 koa2.x'
// })
// 启动路由
app.use(router.routes()) /*启动路由*/
app.use(router.allowedMethods())
// 监听端口
app.listen(3000)
