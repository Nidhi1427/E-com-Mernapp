const express=require('express')
const cors=reuire('cors')
require('dotenv').config()

const app=express()
app.use(cors())
const PORT=8080||process.env.PORT

app.listen(PORT,()=>{
    console.log("Server is running")
})