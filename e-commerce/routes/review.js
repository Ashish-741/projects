const express=require('express');
const router=express.Router()  //mini instance
const Product=require('../models/Product');
const Review=require('../models/Review');
const {validatereview}=require('../middleware');

router.post('/products/:id/review',validatereview, async (req,res)=>{
    // console.log(req.body);
    try{
        let {id}=req.params;
        let {rating,comment}=req.body;
        const product= await Product.findById(id);
        const review=new Review({rating,comment});
    
        product.reviews.push(review);
        await review.save();
        await product.save();
        req.flash('success','Review added succefully');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


module.exports=router;