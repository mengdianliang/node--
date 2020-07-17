var fs = require("fs");
// 参数一，文件路径
// 参数二，回调函数
//      error：成功null,失败错误对象
//      data: 成功数据对象，失败null
fs.readFile("./hello.txt", function(error, data) {
  // 默认文件中存储的是二进制
  if (error) {
    console.log("读取文件失败");
    return;
  }
  // 通过toString()转换
  console.log(data.toString());
});
// 参数一，文件路径
// 参数二， 文件内容
// 参数三，回调函数
//      error：成功null,失败错误对象
fs.writeFile("./hello.txt", "大家好", function(error) {
  if (error) {
    console.log("写入文件失败");
    return;
  }
  console.log("文件写入成功");
});
