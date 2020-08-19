let md5 = require('md5')
let sillyDatetime = require('silly-datetime')
console.log(md5('123456'))
console.log(sillyDatetime.format(new Date(), 'YYYY-MM-DD HH:mm'))
