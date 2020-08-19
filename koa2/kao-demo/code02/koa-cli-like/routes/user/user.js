const router = require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('admin/user/index', {
    title: 'user'
  })
})

router.get('/userinfo', async (ctx) => {
  await ctx.render('admin/user/userinfo', {
    title: 'userinfo'
  })
})
module.exports = router.routes()