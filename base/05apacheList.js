var http = require("http");
var fs = require("fs");
var template = require("art-template");
// 1.创建server
var server = http.createServer();
// 2.监听server的request请求事件，设置请求处理函数
server.on("request", function(req, res) {
  var url = req.url;
  var wwwDir = "D:/demo/node/base/www/";
  fs.readFile("./template.html", function(error, data) {
    if (error) {
      res.end("404 Not Found");
      return;
    }
    fs.readdir(wwwDir, function(err, files) {
      if (err) {
        return res.end("Can not find dir.");
      }
      var htmlStr = template.render(data.toString(), {
        title: "hehe",
        files: files
      });
      // var content = "";
      // files.forEach(function(item) {
      //   console.log(item);
      //   content += `<tr>
      //   <td><a href='D:/demo/node/base/www/apple/'>${item}</a></td>
      //   <td>0</td>
      //   <td>2020-08-12</td>
      //   </tr>`;
      // });
      // data = data.toString();
      // data = data.replace("^_^", content);
      res.end(htmlStr);
    });
  });
});
// 3.绑定端口号，启动服务
server.listen(3000, function() {
  console.log("running...");
});
