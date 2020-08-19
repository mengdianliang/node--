/*
  1.默认获取node_modules下文件夹下的index文件
  2.可以依赖package.json文件来设置入口文件问db.js
*/
// const axios = require('axios/index')
const axios = require('axios')
axios.get()

const db = require('db')
db.getSql()

