const express=require('express')
const router = express.Router()
const studentSchema = require('../model/studentSchema')

router.post("/registerStudent",async(req,res)=>{
    const data =req.body

    try{
        const studentData = new studentSchema(data)
        await studentData.save()
        return studentData.send(data).status(200)

    }catch(error){
        res.send(error).status(400)
    } 
})

router.post('/journal',async(req,res)=>
const journey = journal({
    tilte:req.body.title,
    notes:req.body.notes
})
try{
    const savedjournals= await journal
}
module.exports=router;