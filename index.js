require("dotenv").config()

const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001


const db = require("./src/config/database")

const homeRouter = require('./src/routes/home')
const userRouter = require('./src/routes/user')
const orderRouter = require('./src/routes/order')
const productRouter = require('./src/routes/product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', homeRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)
app.use('/product', productRouter)
// app.get("/", (req, res) => res.send("Hello, World!"));

if(!db){
  console.log("Can't connect properly to Database");
} else {
  console.log("You are connected to Database");
}

app.listen(PORT, ()=> console.log(`Example app listening on port ${PORT}!`)
)