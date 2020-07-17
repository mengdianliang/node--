var http = require("http");
var fs = require("fs");
var template = require("art-template");
var url = require("url");

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
http
  .createServer(function(req, res) {
    var parseObj = url.parse(req.url, true);
    var pathname = parseObj.pathname;
    if (pathname === "/") {
      fs.readFile("./views/index.html", function(err, data) {
        if (err) {
          res.end("404 Not Found.");
          return;
        }
        var htmlStr = template.render(data.toLocaleString(), {
          comments: comments
        });
        res.end(htmlStr);
      });
    } else if (pathname.indexOf("/public/") === 0) {
      fs.readFile("." + pathname, function(err, data) {
        if (err) {
          res.end("404 Not Found");
          return;
        }
        res.end(data);
      });
    } else if (pathname === "/pinglun") {
      let comment = { ...parseObj.query, dateTime: new Date().toString() };
      comments.push(comment);
      res.statusCode = 302;
      res.setHeader("Location", "http://127.0.0.1:3000/");
      res.end("");
    } else if (pathname === "/post") {
      fs.readFile("./views/post.html", function(err, data) {
        if (err) {
          res.end("404 Not Found.");
          return;
        }
        res.end(data);
      });
    } else {
      fs.readFile("./views/404.html", function(err, data) {
        if (err) {
          res.end("404 Not Found");
        }
        res.end(data);
      });
    }
  })
  .listen(3000, function() {
    console.log("running...");
  });
