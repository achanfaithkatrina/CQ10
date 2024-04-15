const mongoose =require("mongoose")
const schema =mongoose.Schema

const NatarajRegschema =new schema({
    productname:{
        type:"string",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    quality:{
        type:"string", 
        required:true
    },
})
const NatarajRegistration = mongoose.mode('NatarajDetails',NatarajRegschema)
module.eports=NatarajRegistration