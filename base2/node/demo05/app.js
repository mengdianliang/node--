// // 1.判断服务器上有没有upload目录。如果没有创建这个目录，如果有的话，不做操作
// const fs = require('fs')
// const path = './upload'
// fs.stat(path, (err, data) => {
//   if (err) {
//     mkdir(path)
//     return
//   }
//   if (data.isDirectory()) {
//     console.log('目录已创建')
//   } else {
//     if (data.isFile()) {
//       fs.unlink(path, err => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         mkdir(path)
//       })
//     }
//   }
// })
// function mkdir(dir) {
//   fs.mkdir(dir, err => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     console.log('目录创建成功')
//   })
// }

// const mkdirp = require('mkdirp')

// mkdirp('./upload')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// // 2. wwwroot文件夹下有images css js 以及index.html,找出wwwroot目录下的所有目录
const fs = require('fs')
let dirArr = []
let path = './wwwroot'
// fs.readdir(path, (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   ;(function getDir(i) {
//     if (i === data.length) {
//       console.log(dirArr)
//       return
//     }
//     fs.stat(path + '/' + data[i], (err, info) => {
//       if (err) {
//         return
//       }
//       if (info.isDirectory()) {
//         dirArr.push(data[i])
//       }
//       getDir(i + 1)
//     })
//   })(0)
// })
async function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      if (data.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

function main() {
  let path = './wwwroot'
  let dirArr = []
  fs.readdir(path, async (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    for (let i = 0; i < data.length; i++) {
      if (await isDir(path + '/' + data[i])) {
        dirArr.push(data[i])
      }
    }
    console.log(dirArr)
  })
}
main()
