let fs = require('fs')

fs.writeFile('./hello.txt', '大家好，给大家介绍一下，我是node.js', (error, data) => {
  if(error) {
    console.log(error)
    return
  }
  console.log('写入成功')
  // error: 成功null, 失败是对象
  fs.readFile('./hello.txt', (error, data) => {
    // 默认文件读取的是二进制数据，可以通过toString()转化为我们能识别的字符
    if(error) {
      console.log(error)
      return
    }
    console.log('读取成功')
    console.log(data.toString())
  })
})