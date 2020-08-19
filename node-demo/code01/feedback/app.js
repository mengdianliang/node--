let http = require("http")
let fs = require("fs")
let template = require("art-template")
let url = require("url")

let comments = [
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
]
http.createServer((req, res) => {
  // 解析成对象，true代表把query解析成对象
  let parseObj = url.parse(req.url, true);
  // 获取不包含查询条件的url
  let pathname = parseObj.pathname;
  if (pathname === "/") {
    fs.readFile("./views/index.html", function(err, data) {
      if (err) {
        res.end("404 Not Found.");
        return;
      }
      let htmlStr = template.render(data.toLocaleString(), {
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
    // 重定向， 如果客户端发现服务器端返回状态码302,客户端会去响应头找Location,做重新页面跳转
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
}).listen(3000,() => {
  console.log('Server running at http://127.0.0.1:3000/');
});
