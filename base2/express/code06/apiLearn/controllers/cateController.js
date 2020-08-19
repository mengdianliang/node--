let dbconfig = require('../util/dbconfig')

const cateService = {
  // 获取分类
  getCate(req, res) {
    let sql = 'select * from cate'
    let sqlArr = []
    let callback = (error, data) => {
      if(error) {
        console.log('连接出错了')
      } else {
        res.send({
          "list": data
        })
      }
    }
    dbconfig.sqlConnect(sql, sqlArr, callback)
  },
  // 根据分类获取指定分类的文章列表
  getPostCate(req, res) {
    let { id } = req.query
    let sqlArr = [id]
    let callback = (error, data) => {
      if(error) {
        console.log('连接出错了')
      } else {
        res.send({
          "list": data
        })
      }
    }
    dbconfig.sqlConnect(sql, sqlArr, callback)
  }
}
module.exports = cateService
