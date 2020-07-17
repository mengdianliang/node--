const fs = require('fs')

let readStream = fs.createReadStream('./data/input.txt')
let count = 0
let str = ''
readStream.on('data', data => {
  str += data
  count++
})
readStream.on('end', () => {
  console.log(str)
  console.log(count)
})
readStream.on('error', err => {
  console.log(err)
})

// const fs = require('fs')
// let str = ''
// for(let i = 0; i < 5000; i++) {
//   str += '豆腐干反对豆腐干反对的规定翻跟斗\n'
// }
// let writeStream = fs.createWriteStream('./data/output.txt')
// writeStream.write(str)

// // 标记写入完成
// writeStream.end()
// writeStream.on('finish', () => {
//   console.log('写入完成')
// })

const fs = require('fs')
let readStream = fs.createReadStream('./190.jpg')
let writeStream = fs.createWriteStream('./data/193.jpg')

readStream.pipe(writeStream)
