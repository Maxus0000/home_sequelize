const {Router}= require("express");
const CategoryController = require ("../controllers/category.controller");
const router =Router();
router.post("/categories",CategoryController.createCategory);
//findall
router.get("/categories",CategoryController.findAllCategories);

router.get("/categories",CategoryController.findCategoryByPk);

router.patch("/:id",CategoryController.updateCategory);

router.get("/categories",CategoryController.deleteCategory);



module.exports = router;