var http = require("http");
var server = http.createServer();
// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理
server.on("request", function(request, response) {
  console.log("收到客户端请求了, 请求路径是" + request.url);
  var url = request.url;
  console.log(
    "请求我的客户端的地址是：",
    request.socket.remoteAddress,
    request.socket.remotePort
  );
  response.setHeader("Content-Type", "text/plain;charset=utf-8");
  if (url === "/") {
    response.end("index page");
  } else if (url === "/login") {
    response.end("login page");
  } else if (url === "/products") {
    var product = [
      {
        name: "苹果",
        price: 8888
      }
    ];
    // 响应内容只能是二进制或者字符串
    response.end(JSON.stringify(product));
  } else {
    response.end("404 not found");
  }
});

server.listen(3000, function() {
  console.log("服务器启动成功了");
});
