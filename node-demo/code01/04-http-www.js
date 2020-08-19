let http = require("http");
let fs = require("fs");
// 1.创建server
let server = http.createServer();
// 2.监听server的request请求事件，设置请求处理函数
server.on("request", function(req, res) {
  let url = req.url;
  let wwwDir = "D:/demo/node/node-demo/code01/www";
  let filePath = "/index.html";
  if (url !== "/") {
    filePath = url;
  }
  fs.readFile(wwwDir + filePath, (error, data) => {
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
