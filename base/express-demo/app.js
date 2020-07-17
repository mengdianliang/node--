// 1. 安装
// 2. 引包
var express = require("express");
// 3. 创建服务器应用程序
var app = express();
// 公开指定目录
app.use("/public", express.static("./public/"));
// 配置使用art-template模板引擎
app.engine("html", require("express-art-template"));
var comments = [
  {
    name: "张三1",
    message: "今天天气不错！",
    dateTime: "2018-09-11"
  },
  {
    name: "张三2",
    message: "今天天气不错！",
    dateTime: "2018-09-11"
  },
  {
    name: "张三3",
    message: "今天天气不错！",
    dateTime: "2018-09-11"
  },
  {
    name: "张三4",
    message: "今天天气不错！",
    dateTime: "2018-09-11"
  }
];
// 当服务器收到get请求的时候，执行回调
app.get("/", function(req, res) {
  res.render("index.html", {
    comments: comments
  });
});
app.get("/post", function(req, res) {
  res.render("post.html");
});
app.post("/pinglun", function(req, res) {
  let comment = { ...req.query, dateTime: new Date().toString() };
  comments.push(comment);
  res.redirect("/");
});
app.get("/admin", function(req, res) {
  res.render("admin/index.html", {
    title: "page"
  });
});
// 监听端口
app.listen(3000, function() {
  console.log("app is running...");
});
