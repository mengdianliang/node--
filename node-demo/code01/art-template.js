let template = require('art-template')
let fs = require('fs')
fs.readFile('./tpl.html', (error, data) => {
  if(error) {
    return console.log('读取文件失败')
  }
  let ret = template.render(data.toString(), {
    name: 'Jack',
    age: 18,
    province: '北京市',
    hobbies: [
      '写代码',
      '唱歌'
    ]
  })
  console.log(ret)
})
