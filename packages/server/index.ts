import express from "express"
import {createServer} from "node:https";
import {Server} from "socket.io";
import morgan from 'morgan'

const app = express()
const server = createServer(app)
const io = new Server(server, {cors: {origin: '*', methods: ['GET', 'POST']}})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})

