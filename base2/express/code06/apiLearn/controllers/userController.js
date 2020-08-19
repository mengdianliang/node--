const users = [
  {
    id: 1,
    username: '',
    userpic: '',
    password: '',
    phone: '',
    email: '',
    status: '',
    create_time: ''
  }
]
let dbconfig = require('../util/dbconfig')
// 调用阿里大鱼
const Core = require('@alicloud/pop-core')
const config = require('../util/aliconfig')
const { createPoolCluster } = require('mysql')
// 配置
let client = new Core(config.alicloud)
let requestOption = {
  method: 'POST'
}

// 获取随机数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
const validatePhoneCode = []
function sendCodeP(phone) {
  for(let item of validatePhoneCode) {
    if(phone === item.phone) {
      return true
    }
  }
  return false
}
function findCodeAndPhone(phone, code) {
  for(let item of validatePhoneCode) {
    if(phone === item.phone && code === item.code) {
      return 'login'
    }
  }
  return 'error'
}
// 获取用户信息
function getUser(username) {
  let sql = `select * from user where id=? or phone=? or username=?`
  let sqlArr = [username, username, username]
  return dbconfig.sySqlConnect(sql, sqlArr)
}
// 创建用户
function createUserInfo(user_id) {
  let sql = 'insert into userinfo(user_id, age, sex, job) values(?,?,?,?)'
  let sqlArr = [user_id, 18, 2, '未设置']
  return dbconfig.sySqlConnect(sql, sqlArr)
}

// 用户注册
async function regUser(phone) {
  // 用户头像
  let avatar = 'https://himg.bdimg.com/sys/portraitn/item/64a26d656e67786970616e323132f656'
  let sql = 'insert into usr(username,phone,userpic,create_time) value(?,?,?,?)'
  let sqlArr = [username,phone,userpic,(new Date()).valueOf()]
  let res = await dbconfig.sySqlConnect(sql, sqlArr)
  if(res.affectRows === 1) {
    // 执行成功获取用户信息
    // 获取用户信息方法
    let user = await getUser(phone)
    // 创建用户副表
    let userinfo = '/do';
    if(userinfo.affectRows === 1) {
      return user
    } else {
      return false
    }
  } else {
    return false
  }
}

const userService = {
  // 检测验证码登录是否是第一次登录(注册)
  async phoneLoginBind(phone) {
    let sql = 'select * from user where username=? or phone=?'
    let sqlArr = [phone, phone]
    let res = await dbconfig.sySqlConnect(sql, sqlArr)
    if(res.length) {
      return res
    } else {
      // 用户第一次注册，需要绑定表
      // 用户注册
      // 获取用户详情
    }
  },
  sendCoreCode(req, res) {
    let phone = req.body.user_phone
    let code = getRandom(100, 9999)
    let params = {
      RegionId: 'cn-hangzhou',
      PhoneNumbers: phone,
      SignName: 'app',
      TemplateCode: 'SMS_185232768',
      "TemplateParam": JSON.stringify({'code': code})
    }
    client.request("SendSms", params, requestOption).then(result => {
      if(result.Code === 'OK') {
        res.send({
          "code": 200,
          "msg": '发送成功'
        })
        validatePhoneCode.push({
          phone: phone,
          code: code
        })
      } else {
        res.send({
          "code": 400,
          "msg": '发送失败'
        })
      }
    })
  },
  // 模拟验证码发送接口
  sendCode(req, res) {
    let phone = req.body.user_phone
    if(sendCodeP(phone)) {
      res.send({
        code: 400,
        msg: '已经发送过验证码，稍后再发'
      })
    }
    let code = getRandom(1000, 9999)
    validatePhoneCode.push({
      phone: phone,
      code: code
    })
    console.log(code)
    res.send({
      code: 200,
      msg: '发送成功'
    })
  },
  // 验证码登录
  codePhoneLogin(req, res) {
    let {phone, code} = req.query
    // 该手机号是否发送过验证码
    if(sendCodeP(phone)) {
      // 验证码和手机号是否匹配
      let status = findCodeAndPhone(phone, code)
      if(status === 'login') {
        res.send({
          code: 200,
          msg: '登陆成功'
        })
      } else if(status === 'error') {
        res.send({
          code: 400,
          msg: '登陆失败'
        })
      }
    } else {
      res.send({
        code: 400,
        msg: '未发送验证码'
      })
    }
  }
}
module.exports = userService