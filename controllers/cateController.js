
const cate= require("../models/CategoryModel")
const asyncHandler = require("express-async-handler")



const createCategory = asyncHandler(async(req, res) => {
    try {
        const newCategoryBanner = await cate.create(req.body)
        res.json(newCategoryBanner)
    } catch (error) {
        throw new Error(error)
    }
})


    //get category 
const getaCate = asyncHandler(async(req, res) => {
    const { id } = req.params
    try {
        const findaCateBanner = await cate.findById(id)
        res.json( findaCateBanner )
    } catch (error) {
        throw new Error(error)
    }
})


//get all categories
const getAllCategory = asyncHandler(async(req, res) => {
    try {
        const getallcategories = await cate.find()
        res.json(getallcategories)
    } catch (error) {
        throw new Error(error)
    }
})


//update category
const updateCategory = asyncHandler(async(req, res) => {
    const { id } = req.params
    const { name, image} = req.body
    try {
        const doc = await cate.findById(id)

        if (name) doc.name = name
        if (image) doc.image = image
        await doc.save()
        res.json({ success: true, data: doc })
    } catch (error) {
        res.json({ sucess: false, error: error })
    }
})



    //delete category
const delete_category = async(req, res) => {
    const { id } = req.params;
    try {
        const deleting = await cate.deleteOne({ _id: id });
        res.json({ success: true, data: deleting });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};


module.exports = {
    createCategory,
    getaCate,
    getAllCategory, 
  
    updateCategory, 
 
    delete_category, 
 
}
