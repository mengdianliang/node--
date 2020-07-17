const fs = require('fs')
const events = require('events')

let eventsEmitter = new events.EventEmitter()

function getMime() {
  fs.readFile('./mime.json', (err, data) => {
    if(err) {
      console.log(err)
      return
    }
    eventsEmitter.emit('data', data)
  })
}
getMime()

eventsEmitter.on('data', (mime) => {
  console.log(mime.toString())
})