const express =require('express')
const mongoose =require('mongoose')
const bodyParser = require('body-parser')
const router =require('./src/routes')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//CONNECT TO THE DATABABSE
mongoose,connect(process.env.DBLINK, ()=>console.log('Connected to the database'))

//ROUTES


const port = process.env.PORT|| 8080
const url ='mongodb+srv://AchanFaithKatrina:faithkatrina@cluster0.bp0cz5v.mongodb.net/students'


app.use(express.json())

const routes=require('./routes')
app.use('/',routes)
mongoose.connect(url).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
}).catch(error=>{
    console.log("error occured at:",error)
})