const url = require('url')
var api = 'http://www/baidu.com?name=zhangsan&age=20'
// console.log(url.parse(api, true))
var temp = url.parse(api, true).query
console.log(temp)
