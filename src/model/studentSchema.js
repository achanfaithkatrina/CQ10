const mongoose =require("mongoose")
const schema =mongoose.Schema

const studentRegSchema =new schema({

username:{
    type:"string",
    required:true
},
// add properties that can be added to the type
email:{
    type:"string",
    required:true
},
passwaord:{
    type:"string",
    required:"true"
}
})
const studentRegistration = mongoose.mode('StudentDetails',studentRegSchema)
module.exports=studentRegistration