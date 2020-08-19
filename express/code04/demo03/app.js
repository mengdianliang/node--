let http = require('http')
let router = require('./model/router')
http.createServer(function(req,res){
  router.statics(req,res,'static')
  
}).listen(8001);