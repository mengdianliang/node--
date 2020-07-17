/*
fs.stat: 检测是文件还是目录
fs.mkdir: 创建目录
fs.writeFile: 创建写入文件
fs.readFile: 读取文件
fs.readdir: 读取目录
fs.rename: 重命名
fs.rmdir: 删除目录
fs.unlink: 删除文件
*/
const fs = require('fs')
// fs.stat('./html',(err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log(`是文件：${data.isFile()}`)
//   console.log(`是目录：${data.isDirectory()}`)
// })

// fs.mkdir('./css', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('创建成功')
// })

// fs.writeFile('./html/index.html', '你好nodejs 哈哈', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('创建写入文件成功')
// })

// fs.appendFile('./css/base.css', 'body{color:red;}', (err) => {
//   if(err) {
//         console.log(err)
//         return
//       }
//       console.log('创建追加文件成功')
// })

// fs.readFile('./html/index.html', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log(data.toString()) // Buffer转String
// })
// fs.readdir('./html', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// fd.rename 重命名 功能1.表示重命名 2.移动文件
// fs.rename('./css/aaa.css', './css/index.css', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('重命名成功')
// })

// fs.rename('./css/index.css', './html/index.css', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//   console.log('移动成功')
// })

fs.unlink('./aaa/aaa.css', err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('删除成功')
})

fs.rmdir('./aaa', err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('删除成功')
})
