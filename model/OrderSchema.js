const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true,
    },
    customerDetails: {
        type: Object,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true,
    },
    products: { // Use 'products' for plural product names
        type: [String], // Array of strings for product names
        required: true,
    },
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
