const md5 = require('md5')
console.log(md5('123456'))

const sd = require('silly-datetime')
console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm'))