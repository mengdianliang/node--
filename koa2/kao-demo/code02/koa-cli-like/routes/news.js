const router = require('koa-router')()

router.get('/', (ctx) => {
  ctx.body = '新闻页面'
})

module.exports = router