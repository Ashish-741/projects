const mongoose=require('mongoose');

const Product=require('./models/Product');


const products=[
    {
        name:"iphione 17",
        img:"https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D",
        price:170000,
        desc:"veru costly ,aukaat se bahar"
    },
    {
        name:"jdsgk",
        img:"https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D",
        price:264263,
        desc:"fhgsekfkndslgh jbisg"
    },
    {
        name:"nksdg",
        img:"https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D",
        price:621546,
        desc:"iusgu egwiehg"
    },
    {
        name:"assfhaeoi",
        img:"https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D",
        price:27647,
        desc:"bsekfugsek"
    },
    {
        name:"oiahfo",
        img:"https://plus.unsplash.com/premium_photo-1722092222965-2885cddcf2c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTd8ZW58MHx8MHx8fDA%3D",
        price:61548,
        desc:"jehofrg"
    }
]

async function seeddb(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports=seeddb;