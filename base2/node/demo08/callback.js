// 利用回调处理异步
const fs = require('fs')
function getMime(callback) {
  fs.readFile('./mime.json', (err, data) => {
    callback(data)
  })
}
getMime((result) => {
  console.log(result.toString())
})