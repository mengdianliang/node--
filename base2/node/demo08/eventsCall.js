const events = require('events');

const eventsEmitter = new events.EventEmitter()

// 监听to_mime的广播
eventsEmitter.on('to_mime',function(data){

  console.log(data);

})

// 监听to_parent的广播
eventsEmitter.on('to_parent', () => {
  console.log('接收到了这个广播事件')
  eventsEmitter.emit('to_mime','给mime发送的数据')

})

setTimeout(() => {
  console.log('开始广播...');
  // 广播
  eventsEmitter.emit('to_parent', '发送的数据')
}, 2000)