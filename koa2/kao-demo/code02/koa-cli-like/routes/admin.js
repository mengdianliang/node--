const router = require('koa-router')()

let userRouter = require('./user/user')
let focusRouter = require('./user/focus')
router.get('/', async (ctx) => {
  ctx.body = '后台管理系统页面'
})

router.get('/admininfo', async (ctx) => {
  ctx.body = '用户管理'
})
router.use('/user', userRouter)
router.use('/focus', focusRouter)

module.exports = router