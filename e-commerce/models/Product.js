
const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    author:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
    }

})

//middileware jo bts mongodb operatons karwane par use hota hai and iske ander pre and
//post middleware hote ahi which are basically used over the schema andd before the model
//is js class

productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length>0){
        await Review.deleteMany({_id:{$in:Product.reviews}})
    }
})

let Product=mongoose.model('Product',productSchema);

module.exports=Product;