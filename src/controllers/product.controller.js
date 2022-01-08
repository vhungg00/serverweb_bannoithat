const productModel = require('../models/product.model');

const addProduct = async (req, res) => {
  const { name, price, image, shipping, stars, category, stock, colors, images, reviews, description } = req.body;
  try {
    const data = await productModel.createProduct({
      name,
      price,
      image,
      shipping,
      stars,
      category,
      stock,
      colors,
      images,
      reviews,
      description,
    });
    res.status(200).send({ success: true, message: 'Add Product Success', data });
  } catch (error) {
    res.status(400).send({ success: false, message: 'Update Failed' });
  }
};

const getProduct = async (req, res) => {
  try {
    const data = await productModel.getProduct();
    res.status(200).send({ success: true, data });
  } catch (error) {
    res.status(400).send({ success: false, message: 'Get Product Failed' });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const data = await productModel.getProduct_detail(req.params._id);
    res.status(200).send({ success: true, data });
  } catch (error) {
    res.status(400).send({ success: false, message: 'Get Product Failed' });
  }
};
const updateProdutByID = async (req, res) => {
  try {
    const data = await productModel.findProductByIdAndUpdateProduct(req.params._id, req.body);
    res.status(200).send({ success: true, message: 'Update Product Done !', data });
  } catch (error) {
    res.status(400).send({ success: false, message: 'Update Product Failed !' });
  }
};

const removeProductById = async (req, res) => {
  try {
    const data = await productModel.removeProductById(req.params._id);
    res.status(200).send({ success: true, message: 'Delete Done !', data });
  } catch (error) {
    res.status(400).send({ success: false, message: 'Delete failed !' });
  }
};
module.exports = {
  addProduct,
  getProduct,
  getProductDetail,
  updateProdutByID,
  removeProductById,
};
