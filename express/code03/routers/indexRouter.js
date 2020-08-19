// 使用express提供的路由模块
const express = require('express')
const router = express.Router()

const userCtrl = require('../controller/userCtrl')

router.post('/login.do', userCtrl.userLogin)
router.post('/register.do', userCtrl.userRegister)

module.exports = router