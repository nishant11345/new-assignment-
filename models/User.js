const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
type: String,
required: true,
unique: true,
    },
    email:{

type: String,
required: true,

    },
    phoneNo :{
        type: Number,
        required :true,

    }
})


module.exports= mongoose.model('User', userSchema)