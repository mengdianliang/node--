const path = require('path')
let mkdirp = require('mkdirp')
var multer = require('multer')
let sillyDatetime = require('silly-datetime')

var tools = {
  multer() {
    var storage = multer.diskStorage({
      destination: async function(req, file, cb) {
        // 获取当前日期
        let datetime = sillyDatetime.format(new Date(), 'YYYYMMDD')
        // 按照日期生成图片存储目录
        let dir = path.join('public/upload/', datetime)
        // 创建目录
        await mkdirp(dir)

        cb(null, dir)
      },
      filename: function(req, file, cb) {
        // 获取后缀名
        let extname = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + extname)
      }
    })
    var upload = multer({storage: storage})
    return upload
  }
}
module.exports = tools