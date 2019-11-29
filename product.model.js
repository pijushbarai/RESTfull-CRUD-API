const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    company: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);
/*
Here, we have defined our ProductSchema with following properties. 
Along with this, we also set timestamps property to true. 
This property will add two fields automatically to schema. 
These fields are : createdAt and updatedAt in your schema.
*/