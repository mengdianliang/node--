var express = require('express');
var router = express.Router();
var fs = require('fs')
var multer = require('multer')

var upload = multer({dest: './public/uploads/'}).single('file')
const userService = require('../controllers/userController')

/* GET users listing. */
router.post('/sendCode', userService.sendCode);
router.post('/codePhoneLogin', userService.codePhoneLogin);
router.post('/editUserImg', upload, (req, res) => {
  if(req.file.length === 0) {
    res.render('error', {message: '上传文件不能为空'})
    return 
  } else {
    let file = req.file
    console.log(file)
    fs.renameSync('./public/uploads' + file.filename, './upload/' + file.originalname)
    res.set({
      'Content-Type': 'application/json;charset=utf-8'
    })
    let {user_id} = req. query
  }
})
module.exports = router;
