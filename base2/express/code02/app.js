// app.js 是服务器入口文件
// package.json 是项目配置和依赖文件
// src 静态资源文件
// config (配置文件)
// routers (路由文件)
// controller 控制器文件夹
// dao 数据持久层

let express = require('express')
// 日志
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')

const route = require('./routers/indexRouter')
// 日志
app.use(logger('dev'))

// body请求配置得在路由之前
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 配置路由
app.use(route)

// 静态资源
app.use(express.static(__dirname + '/src'))

app.listen(3000, () => {
  console.log('running at port 3000')
})