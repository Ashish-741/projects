const Product = require('./models/Product');


const { param } = require('./routes/auth');
const { productschema, reviewSchema, productSchema } = require('./schema');

const validateproduct = (req, res, next) => {
    const { name, img, price, desc } = req.body;
    const { error, value } = productSchema.validate({ name, img, price, desc });
    if (error) {
        return res.render('error', { err: error.details[0].message });
    }
    next();
};

const validatereview = (req, res, next) => {
    const { rating, comment } = req.body;
    const { error } = reviewSchema.validate({ rating, comment });
    if (error) {
        return res.render('error', { err: error.details[0].message });
    }
    next();
}

const isloggedin=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','please login first');
        return res.redirect('/login');
    }
    next();
}

const isseller=(req,res,next)=>{
    if(!req.user.role){
            req.flash('error','you do not have the permission');
            return res.redirect('/products');
    }else if(req.user.role!='seller'){
            req.flash('error','you do not have the permission');
            return res.redirect('/products');
    }
    next();
}

const isproductauthor = async (req, res, next) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    if (!product) {
        req.flash('error', 'Product not found');
        return res.redirect('/products');
    }
    if (!product.author.equals(req.user._id)) {
        req.flash('error', 'You do not have the permission');
        return res.redirect('/products');
    }
    next();
}



module.exports = { isloggedin,validatereview, validateproduct,isseller,isproductauthor };