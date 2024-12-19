import express from "express"
import morgan from 'morgan'

import websocketsRouter from "./routes/websockets.router";

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
  res.json({message: 'Hello World Hello'})
})

app.use('/websocket', websocketsRouter)

app.listen(8080, () => {
  console.log('SERVER STARTED : PORT 8080')
})