const express = require('express')
const bookRouter = require('./routes/bookRoutes')

const app = express()

app.get('/',(req,res)=>{
  res.send("Welcome to Book Data")
})

app.use(express.json())
app.use('/books',bookRouter)

app.listen(3000,()=>{
  console.log("Server started.....")
})