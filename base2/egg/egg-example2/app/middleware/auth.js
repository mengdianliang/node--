'use strict'
module.exports = (options, app) => {
  // 返回一个异步的方法
  return async function auth(ctx, next) {
    // 设置模板全局变量
    ctx.state.csrf = ctx.csrf
    await next()
  }
}
