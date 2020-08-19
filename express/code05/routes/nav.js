const express = require('express')

let router = express.Router()
const tools = require('../tool')
router.get('/', (req, res) => {
  res.render('admin/nav/add', {})
})

// 单文件上传
// router.post('/doAdd', tools.multer().single('file'), (req, res) => {
//   res.send({
//     body: req.body,
//     file: req.file
//   })
// })

// 多文件上传
router.post('/doAdd', tools.multer().fields([{name: 'file', maxCount: 1}]), (req, res) => {
  res.send({
    body: req.body,
    file: req.file
  })
})

module.exports = router