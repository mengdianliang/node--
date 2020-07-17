const http = require('http')
const url = require('url')
const model = require('./model/model')

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  let pathname=url.parse(req.url).pathname.replace('/','');       

  if(pathname!='favicon.ico') {
    try {
      model[pathname](req, res);
    } catch (err) {
      model['home'](req, res);
    }
  }
}).listen(8081);

