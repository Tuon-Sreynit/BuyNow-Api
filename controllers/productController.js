const product = require("../models/productModel")
const asyncHandler = require("express-async-handler")

//create sub pro
const createProduct = asyncHandler(async(req, res) => {
    try {
        const newProduct= await product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})
//get pro by id
const getProById = asyncHandler(async(req, res) => {
    const { id } = req.params
    try {
        const findPro = await product.findById(id)
        res.json(findPro)
    } catch (error) {
        throw new Error(error)
    }
})
//get all pro
const getAllPro = asyncHandler(async(req, res) => {
    try {
        const getallPro = await product.find(req.query).populate("Category");
        res.json(getallPro)
    } catch (error) {
        throw new Error(error)
    }
})
//update pro
const updatePro = asyncHandler(async(req, res) => {
    const { id } = req.params
    const { name,description,price, Category, image} = req.body
    try {
        const doc = await product.findById(id)

        if (name) doc.name = name
        if (description) doc.description = description
        if (price) doc.price = price
        if (image) doc.image = image
        if (Category) doc.Category = Category
     
        await doc.save()
        res.json({ success: true, data: doc })
    } catch (error) {
        res.json({ sucess: false, error: error })
    }
})
//delete pro
const deletePro = async(req, res) => {
const { id } = req.params;
try {
    const deleting = await product.deleteOne({ _id: id });
    res.json({ success: true, data: deleting });
} catch (error) {
    res.json({ success: false, error: error });
}
};
module.exports = {
    createProduct, 
    getProById, 
    getAllPro, 
    updatePro,
    deletePro
}