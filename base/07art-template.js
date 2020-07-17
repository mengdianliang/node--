var template = require("art-template");
var fs = require("fs");
fs.readFile("./tpl.html", function(error, data) {
  if (error) {
    console.log("读取文件失败");
    return;
  }
  data = data.toString();
  var ret = template.render(data, {
    name: "Jack",
    age: 22,
    city: "北京市"
  });
  console.log(ret);
});
