const mongoose = require('mongoose')
const cateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
   
    image:{
        type: String,
        required: true,
    },
   
}, {
    timestamps: true
})

const Cate= mongoose.model('Cate',  cateSchema)
module.exports = Cate