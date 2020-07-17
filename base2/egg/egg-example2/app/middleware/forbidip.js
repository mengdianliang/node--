'use strict'
module.exports = (options, app) => {
  // 返回一个异步的方法
  return async function firbidip(ctx, next) {
    // 要屏蔽的ip: 1.从数据库获取  2.从参数传入

    const forbidip = '127.0.0.1'

    // 获取客户端ip
    console.log(ctx.request.ip)
    // 从参数传入的ip
    const { forbidips } = options
    console.log(forbidips)
    if (ctx.request.ip === forbidip) {
      ctx.status = 403
      ctx.body = '您的ip已经被屏蔽'
    } else {
      await next()
    }
  }
}
