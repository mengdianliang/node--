const mysql = require('mysql')

module.exports = {
  config: {
    host: 'localhost',
    port: '3306',
    user: 'meng',
    password: '111111',
    database: 'express_app'
  },
  // 连接数据库mysql
  sqlConnect: (sql, sqlArr, callback) => {
    let pool = mysql.createPool(this.config)
    pool.getConnection((error, conn) => {
      if(error) {
        console.log('连接失败')
        return
      }
      // 事件驱动回调
      conn.query(sql, sqlArr, callback)
      // 释放连接
      conn.release()
    })
  },
  // promise回调
  sySqlConnect(sql, sqlArr) {
    return new Promise((resolve, reject) => {
      let pool = mysql.createPool(this.config)
      pool.getConnection((error, conn) => {
        if(error) {
          reject(error)
        } else {
          // 事件驱动回调
          conn.query(sql, sqlArr, (err, data) => {
            if(err) {
              reject(err)
            } else {
              // 释放连接
              conn.release()
            }
          })
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }

}