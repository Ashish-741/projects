const express=require('express');
const Product=require('../models/Product');
const Review = require('../models/Review');
const router=express.Router()  //mini instance
const {validateproduct,isloggedin,isseller,isproductauthor}=require('../middleware');
const {deleteproduct,editproduct,editproductform,showproduct,createproduct,productform,showallproducts}=require('../controllers/product');
//to show all the products
router.get('/products',showallproducts);

// to show form for new product
router.get('/products/new',isloggedin,productform)

// /to actually add the product
router.post('/products', validateproduct,isloggedin,isseller,createproduct)

//to show one particular product
router.get('/products/:id',isloggedin,showproduct)


//form to edit the product
router.get('/products/:id/edit',isloggedin,editproductform)

//to actually edit the data in db
router.patch('/products/:id',validateproduct,isloggedin,editproduct)

//to delete an product
router.delete('/products/:id', isloggedin, isproductauthor, deleteproduct);

module.exports=router;