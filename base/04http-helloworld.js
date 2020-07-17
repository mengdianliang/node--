var http = require("http");
var fs = require("fs");
// 1.创建server
var server = http.createServer();
// 2.监听server的request请求事件，设置请求处理函数
server.on("request", function(req, res) {
  var url = req.url;
  var wwwDir = "D:/demo/node/base/www/";
  var filePath = "/index.html";
  if (url !== "/") {
    filePath = url;
  }
  fs.readFile(wwwDir + filePath, function(error, data) {
    if (error) {
      res.end("404 Not Found");
      return;
    }
    res.end(data);
  });
});
// 3.绑定端口号，启动服务
server.listen(3000, function() {
  console.log("running...");
});
