import mongoose, { trusted } from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true  //make sure both fields createdAt and updatedAt fields are filled
});

//create a collection called Product, use productSchema for the object's properties/fields
const Product = mongoose.model('Product', productSchema);
//products
export default Product;