const Product=require('../models/Product');

const showallproducts=async (req, res) => {
    try{
        let products = await Product.find({});
        res.render('products/index', { products });
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
}

const productform=(req,res)=>{
    try{
        res.render('products/new'); 
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
}

const createproduct=async (req,res)=>{
    try{
        let {name,img,price,desc}=req.body;
        await Product.create({name,img,price,desc,author:req.user._id});
        req.flash('success','Product added succefully');

        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
}

const showproduct=async (req,res)=>{
    try{
        let {id}=req.params;
        let foundproduct=await Product.findById(id).populate('reviews');
        res.render('products/show',{foundproduct,msg:req.flash('msg')});
    } catch(e){
        res.status(500).render('error',{err:e.message});
    }
}


const editproductform=async (req,res)=>{
    try{
        let{id}=req.params;
        let foundproduct=await Product.findById(id);
        res.render('products/edit',{foundproduct});
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
}

const editproduct=async (req,res)=>{
    try{
        let {id}=req.params;
        let {name,img,price,desc}=req.body;
        await Product.findByIdAndUpdate(id,{name,img,price,desc})
        req.flash('success','Product edited succefully');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
}

const deleteproduct=async (req,res)=>{
    try{
        let {id}=req.params;
        const product= await Product.findById(id);
        // for(let id of product.reviews){
        //     await Review.findByIdAndDelete(id);
        // }
        await Product.findByIdAndDelete(id);
        req.flash('success','Product deleted succefully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
}

module.exports={deleteproduct,editproduct,editproductform,showproduct,createproduct,productform,showallproducts};
