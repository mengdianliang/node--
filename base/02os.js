var os = require("os");
var path = require("path");
// 获取cpu信息
console.log(os.cpus());
// 获取cpu内存
console.log(os.totalmem());
// 获取一个路径中的扩展名部分
console.log(path.extname("c:/a/b/c.txt"));
