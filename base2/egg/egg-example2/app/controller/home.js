'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { app, ctx } = this
    // 调用extend里面扩展的application

    console.log(app.foo())

    // 调用extend里面扩展的ctx

    console.log(ctx.getHost())

    // 调用extend里面扩展的helper的方法

    console.log(ctx.helper.getHelperData())

    // 调用extend 扩展request的方法

    console.log(ctx.request.foo())
    await ctx.render('home')
  }
  // 接受post提交的数据 this.ctx.request.body
  async add() {
    console.log(this.ctx.request.body)
    this.ctx.body = '123'
  }
}

module.exports = HomeController
