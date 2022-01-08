const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 1000 },
  image: { type: String, required: true },
  shipping: { type: Boolean },
  stars: { type: Number },
  category: { type: String },
  stock: { type: Number },
  reviews: { type: Number },
  colors: [
    {
      type: String,
    },
  ],
  images: [{ url: String, title: String }],
  description: { type: String, required: true },
  createAt: { type: Number, default: Date.now },
  updateAt: { type: Number, default: null },
  deleteAt: { type: Number, default: null },
});

ProductSchema.plugin(toJSON);
ProductSchema.plugin(paginate);

ProductSchema.statics = {
  createProduct(data) {
    return this.create(data);
  },
  getProduct() {
    return this.find({}, { name: 1, price: 1, image: 1 }).sort({ createAt: -1 }).exec();
  },
  getProduct_detail(id) {
    return this.findOne({ _id: id }, { image: 0 }).exec();
  },
  findProductByIdAndUpdateProduct(id, Product) {
    return this.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: Product.name,
          price: Product.price,
          image: Product.image,
          shipping: Product.shipping,
          stars: Product.stars,
          category: Product.category,
          stock: Product.stock,
          reviews: Product.reviews,
          colors: Product.colors,
          images: Product.images,
          updateAt: Date.now(),
        },
      }
    );
  },
  removeProductById(id) {
    this.findByIdAndRemove(id).exec();
  },
};

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
