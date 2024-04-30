const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        maxLength:20
    },
    lastName:{
        type:String,
        required: true,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        
    }
})



module.exports = mongoose.model("Contact",contactSchema);