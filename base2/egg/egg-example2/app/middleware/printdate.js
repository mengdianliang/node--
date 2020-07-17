/*
options: 中间件配置项，框架会将app.config[${middlewareName}]传递进来
app: 当前应用Application的实例
*/
'use strict'
module.exports = (options, app) => {
  // 返回一个异步的方法
  return async function printDate(ctx, next) {
    console.log(new Date())
    await next()
  }
}
