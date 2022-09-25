const {Category}= require("../models")
module.exports.createCategory = async (req,res,next)=>{
  try {
    const {body} =req;
    const category = await Category.create(body);
    res.status(201).send({data:category})
  } catch (error) {
    next(error)
  }
};
//findAllCatigories

module.exports.findAllCategories = async(req,res,next)=>{
  try {
    const categories = await Category.findAll();
    res.status(200).send({data:categories})
  } catch (error) {
    next(error)
  }
};

module.exports.findCategoryByPk = async(req,res,next)=>{
try {
  const categories =await Category.findByPk(id);
  res.status(200).send({data:categories})
} catch (error) {
  next (error)
}
};


module.exports.updateCategory = async(req,res,next)=>{
  try {
    const category = await Category.update(req.body,{where:{id:id}})
    req.status(200).send(category)
  } catch (error) {
    next(error)
  }
};

module.exports.deleteCategory = async(req,res,next)=>{
  try {
    const category = await Category.destroy(req.body,{where:{id:id}})
    req.status(200).send('Category is deleted')
  } catch (error) {
    next(error)
  }
};




