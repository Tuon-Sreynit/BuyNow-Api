const Cart = require("../models/cartModel")
const asyncHandler = require("express-async-handler")


const createCart = asyncHandler(async(req, res) => {
    try {
        const newCart = await Cart.create(req.body)
        res.json(newCart)
    } catch (error) {
        throw new Error(error)
    }
})


    //get Cart 
const getaCart = asyncHandler(async(req, res) => {
    const { id } = req.params
    try {
        const findaCart = await Cart.findById(id).populate('product');
        res.json( findaCart )
    } catch (error) {
        throw new Error(error)
    }
})


//get all cart
const getAllCart = asyncHandler(async(req, res) => {
    try {
        const getallcart = await Cart.find().populate('product');
        res.json(getallcart)
    } catch (error) {
        throw new Error(error)
    }
})


//update Cart
const updateCart = asyncHandler(async(req, res) => {
    const { id } = req.params
    const { product,user, price, quantity} = req.body
    try {
        const doc = await Cart.findById(id)

        if (product) doc.product = product
        if (user) doc.user = user
        if (price) doc.price = price
        if (quantity) doc.quantity = quantity
        await doc.save()
        res.json({ success: true, data: doc })
    } catch (error) {
        res.json({ sucess: false, error: error })
    }
})



    //delete Cart
const delete_Cart = async(req, res) => {
    const { id } = req.params;
    try {
        const deleting = await Cart.deleteOne({ _id: id });
        res.json({ success: true, data: deleting });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};

const incCart = async(req, res) => {
    const id = req.params.id;
    if (!Cart[id]) {
      Cart[id] = 1;
    } else {
      Cart[id]++;
    }
    res.json({ message: 'Product quantity increased in the cart!', Cart });
};
const decCart = async(req, res) => {
    const id = req.params.id;
    if (Cart[id] && Cart[id] > 0) {
      Cart[id]--;
    }
    res.json({ message: 'Product quantity decreased in the Cart!', Cart });
};


module.exports = {
    createCart,
    getaCart,
    getAllCart,
    updateCart,
    delete_Cart,
    incCart,
    decCart
}