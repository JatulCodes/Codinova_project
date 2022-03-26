const mongoose = require ('mongoose');

const userSchema =new mongoose.Schema({

    Title:{
        type:String,
        required:true
    },
    Coords:{
        type:Number,
        required:true
    },
    Shape:{
        type:String,
        required:true
    }
    
})

const ApiData = mongoose.model('ApiData',userSchema)
module.exports = ApiData;