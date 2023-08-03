const express = require("express")
const {
    createProduct, 
    getProById, 
    getAllPro, 
    updatePro,
    deletePro

} = require("../controllers/productController")
// const { requireAuthAdmin } = require("../middleware/authMiddleware");
const router = express.Router()


router.post("/add", createProduct)
router.get("/:id",  getProById)
router.put("/:id",  updatePro)
router.delete("/:id",  deletePro)
router.get("/",  getAllPro)

module.exports = router