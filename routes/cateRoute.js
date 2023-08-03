const express = require("express")
const {
    createCategory,
    getaCate,
    getAllCategory, 
  
    updateCategory, 
 
    delete_category, 
} = require("../controllers/cateController")
// const { requireAuthAdmin } = require("../middleware/authMiddleware");
const router = express.Router()


router.post("/category/add", createCategory)
router.get("/category/:id", getaCate)
router.put("/category/:id", updateCategory)
router.delete("/category/:id", delete_category)
router.get("/category/", getAllCategory)


module.exports = router