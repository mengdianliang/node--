'use strict'

const Controller = require('egg').Controller

class NewsController extends Controller {
  async index() {
    const { ctx, service } = this
    // ctx.body = '新闻页面'
    const msg = 'numjucks'
    const list = await service.news.getNewsList()
    const userInfo = await service.user.getUserInfo()
    await ctx.render('news', {
      msg,
      list,
      userInfo
    })
  }
  async newsList() {
    const { ctx } = this
    ctx.body = '新闻列表页面'
    const query = ctx.query
    console.log(query)
  }
  async newsContent() {
    const { ctx } = this
    console.log(ctx.params)
    ctx.body = '新闻内容页面'
  }
}

module.exports = NewsController
