const router = require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('admin/focus/index', {
    title: 'focus'
  })
})

router.get('/focusinfo', async (ctx) => {
  await ctx.render('admin/focus/focusinfo', {
    title: 'focusinfo'
  })
})
module.exports = router.routes()