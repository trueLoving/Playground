const fs = require('fs')
const http = require('http')
const WebSocket = require('ws')

const server = http.createServer({})
const wss = new WebSocket.Server({ server })

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`received: ${message}`)
    ws.send("Received from Client")
  })
})

server.on('request', (req, res) => {
  if (req.url === '/test') {
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
      a: 1,
      b: 2
    }))
  } else {
    res.end("hello world")
  }
})

server.listen(8080, () => {
  console.log(`http://localhost:8080`)
})
