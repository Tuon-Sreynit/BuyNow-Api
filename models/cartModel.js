const mongoose = require('mongoose');
const CartSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
    },
   

});

const Cart= mongoose.model('cart',  CartSchema)
module.exports = Cart
