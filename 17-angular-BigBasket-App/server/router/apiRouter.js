const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

/*
    Usage : GET all products
    URL : http://127.0.0.1:5000/api/products
    Fields : no-fields
    Method : GET
 */
router.get('/products', async (request , response) => {
    try {
            let products = await Product.find();
            response.status(200).json(products);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message});
    }
});

/*
    Usage : GET a single product
    URL : http://127.0.0.1:5000/api/products/:id
    Fields : no-fields
    Method : GET
 */
router.get('/products/:id', async (request , response) => {
    let productId = request.params.id;
    try {
        let product = await Product.findById(productId);
        response.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message});
    }
});

/*
    Usage : CREATE a new product
    URL : http://127.0.0.1:5000/api/products/
    Fields : name , image , price , qty , info
    Method : POST
 */
router.post('/products/', async (request , response) => {
    let newProduct = {
        name : request.body.name,
        image : request.body.image,
        price : request.body.price,
        qty : request.body.qty,
        info : request.body.info
    };
    try {
        // check for an existing product with same name
        let product = await Product.findOne({name : newProduct.name});
        if(!product){
            let product = new Product(newProduct);
            product = await product.save(); // save the product to database
            response.status(200).json(product);
        }
        else{
            response.status(400).json({
                msg : 'Product is Already Exists'
            });
        }
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message});
    }
});

/*
    Usage : UPDATE an existing product
    URL : http://127.0.0.1:5000/api/products/:id
    Fields : name , image , price , qty , info
    Method : PUT
 */
router.put('/products/:id', async (request , response) => {
    let productId = request.params.id;
    let updatedProduct = {
        name : request.body.name,
        image : request.body.image,
        price : request.body.price,
        qty : request.body.qty,
        info : request.body.info
    };
    try {
        let product = await Product.findById(productId);
        if(product){
            product = await Product.findByIdAndUpdate(productId , {
                $set : updatedProduct
            }, {new : true});
            response.status(200).json(product);
        }
        else{
            response.status(500).json({
                msg : 'product is Not Updated'
            });
        }
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message});
    }
});

/*
    Usage : DELETE an existing product
    URL : http://127.0.0.1:5000/api/products/:id
    Fields : no-fields
    Method : DELETE
 */
router.delete('/products/:id', async (request , response) => {
    let productId = request.params.id;
    try {
        let product = await Product.findByIdAndDelete(productId);
        response.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message});
    }
});

module.exports = router;
