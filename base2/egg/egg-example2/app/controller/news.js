'use strict'

const Controller = require('egg').Controller

class NewsController extends Controller {
  async index() {
    const { ctx, service } = this
    // ctx.body = '新闻页面'
    const msg = 'numjucks'
    const list = await service.news.getNewsList()
    console.log(list)
    const userInfo = await service.user.getUserInfo()
    await ctx.render('news', {
      msg,
      list,
      userInfo
    })
  }
  async newsContent() {
    // 获取get传值

    const aid = this.ctx.query.aid

    console.log(aid)

    const list = await this.service.news.getNewsContent(aid)

    await this.ctx.render('newscontent', {
      list: list[0]
    })
  }
}

module.exports = NewsController
