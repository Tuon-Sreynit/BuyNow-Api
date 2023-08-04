const express = require("express")
const {
    createCart,
    getaCart,
    getAllCart,
    updateCart,
    delete_Cart,
    incCart,
    decCart
} = require("../controllers/cartController")
// const { requireAuthAdmin } = require("../middleware/authMiddleware");
const router = express.Router()

router.post("/add", createCart)
router.post("/increase/:id", incCart)
router.post("/decrease/:id", decCart)
router.get("/:id", getaCart)
router.put("/update/:id", updateCart)
router.delete("/delete/:id", delete_Cart)
router.get("/", getAllCart)

module.exports = router