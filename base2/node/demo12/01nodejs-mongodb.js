/**
1.npm install mongodb --save-dev / cnpm install mongodb --save-dev

2.var MongoClient = require('mongodb').MongoClient;

 var url = 'mongodb://localhost:27017/test';   连接数据库的地址

 3.连接数据库

 MongoClient.connect(url, function(err, db) {

});

 4.实现增加修改删除

 MongoClient.connect(url, function(err, db) {

    db.collection('user').insertOne({'name':'zhangsan'},function(error,data){


    })

});
 */
const http = require('http')

const url = require('url') /*引入url模块*/

const ejs = require('ejs')

const MongoClient = require('mongodb').MongoClient /*引入数据库 MongoClient*/

let DBurl = 'mongodb://localhost:27017' // 连接数据库的地址   student表示数据库的名称

const app = require('./model/express-route.js')

http.createServer(app).listen(3000)

app.get('/', (req, res) => {
  var msg = '这是数据库的数据'
  ejs.renderFile('views/index.ejs', { msg: msg }, (err, data) => {
    res.send(data)
  })
})

app.get('/add', (req, res) => {
  //增加数据
  MongoClient.connect(DBurl, (err, client) => {
    /*连接数据库*/
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      return
    }
    let db = client.db('meng_demo')
    //增加数据
    db.collection('user').insertOne(
      {
        name: '大地',
        age: 10
      },
      (error, result) => {
        if (error) {
          console.log('增加数据失败')
          return
        }
        res.send('增加数据成功')
        client.close() /*关闭数据库*/
      }
    )
  })
})

app.get('/edit', (req, res) => {
  //修改数据
  MongoClient.connect(DBurl, (err, client) => {
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      return
    }
    let db = client.db('meng_demo')
    db.collection('user').updateOne(
      { name: 'lisi' },
      {
        $set: {
          age: 666
        }
      },
      (error, data) => {
        if (error) {
          console.log('修改数据失败')
          return
        }
        console.log(data)
        res.send('修改数据成功')
        client.close() /*关闭数据库*/
      }
    )
  })
})

app.get('/delete', (req, res) => {
  //删除数据
  let query = url.parse(req.url, true).query
  let name = query.name
  MongoClient.connect(DBurl, (err, client) => {
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      return
    }
    let db = client.db('meng_demo')
    db.collection('user').deleteOne({ name: name }, (error, data) => {
      if (error) {
        console.log('删除失败')
        return
      }
      console.log(data)
      res.send('删除数据成功')
      client.close()
    })
  })
})
