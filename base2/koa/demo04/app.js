//引入 koa模块

/*
ejs模板引擎的使用：

    1.npm install koa-views  --save

    2.npm install ejs  --save


    3.var views = require('koa-views');

    app.use(views(__dirname, { extension: 'ejs' }))   //模板的后缀名是ejs


    4 await ctx.render('index');



注意：我们需要在每一个路由的render里面都要渲染一个公共的数据

    公共的数据放在这个里面，这样的话在模板的任何地方都可以使用


     ctx.state = {   //放在中间件
         session: this.session,
         title: 'app'
     };

* */
const path = require('path')
const Koa = require('koa')
let router = require('koa-router')()
const views = require('koa-views')

// const common = require('./module/common')

const bodyParser = require('koa-bodyparser')
const static = require('koa-static')

let app = new Koa()

//配置post bodyparser的中间件
app.use(bodyParser())

//配置模板引擎中间件  --第三方中间件
app.use(views(path.join(__dirname, './views'), { extension: 'ejs' }))

//配置静态web服务的中间件
//app.use(static('./static'));

app.use(static(__dirname + '/static'))

app.use(static(__dirname + '/public')) //koa静态资源中间件可以配置多个
//写一个中间件配置公共的信息
app.use(async (ctx, next) => {
  ctx.state.userinfo = '张三'

  await next() /*继续向下匹配路由*/
})

router.get('/', async ctx => {
  let title = '你好ejs'
  await ctx.render('index', {
    title: title
  })
})
//接收post提交的数据
router.post('/doAdd', async ctx => {
  //原生nodejs 在koa中获取表单提交的数据
  // let data = await common.getPostData(ctx)
  // //接收post提交的数据
  // router.post('/doAdd', async ctx => {
  //   //原生nodejs 在koa中获取表单提交的数据
  //   let data = await common.getPostData(ctx)
  //   console.log(data)
  //   ctx.body = data
  // })
  // console.log(data)
  // ctx.body = data

  console.log(ctx.request.body)
  ctx.body = ctx.request.body //获取表单提交的数据
})

app.use(router.routes()) /*启动路由*/
app.use(router.allowedMethods())
app.listen(3000)
