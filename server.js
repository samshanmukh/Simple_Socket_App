const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app) // raw http for io
const io = socketio(server) // socket.io's setup

// Middleware
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

io.on('connection', socket => {
    console.log("new connection created")

    // socket.broadcast.emit("showMessage", { name: 'Anonymous', message: 'A NEW USER HAS JOINED' })
  
    socket.on('sendMessage', message => io.emit('showMessage', message))
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`server running on port: ${port}`))
