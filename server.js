const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

// const app = express()
// const server = http.createServer(app) // raw http for io
// const io = socketio(server) // socket.io's setup

// Static Folder
app.use(express.static(path.join(__dirname, './public')))

io.on('connection', socket => {
    console.log("new connection created")

    // socket.broadcast.emit("showMessage", { name: 'Anonymous', message: 'A NEW USER HAS JOINED' })
  
    socket.on('sendMessage', message => io.emit('showMessage', message))
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`server running on port: ${port}`))
