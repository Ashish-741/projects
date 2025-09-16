// if(process.env.NODE_ENV!=='production'){
//     require('dotenv').config();
// }


const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const seeddb=require('./seed');
const ejsmate=require('ejs-mate');
const methodoverride=require('method-override');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/User');

const authroutes=require('./routes/auth');
const productroutes=require('./routes/product');
const reviewroutes=require('./routes/review');
const cartroutes=require('./routes/cart');

mongoose.connect('mongodb://127.0.0.1:27017/ashish-shopping-app')
.then(()=>{
    console.log("db connected succefully")
})
.catch((err)=>{
    console.log("db error");
    console.log(err)
})


//session
let configsession={
    secret:'keyword cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now() + 24*7*60*60*1000,
        maxAge:24*7*60*60*1000
    }
}

app.engine('ejs',ejsmate);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));//views folder
app.use(express.static(path.join(__dirname,'public')));//public folder
app.use(express.urlencoded({extended:true}));
app.use(methodoverride('_method'));
app.use(session(configsession)); // session must come before flash
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Set flash messages to res.locals for all views
app.use((req, res, next) => {
    res.locals.currentUser=req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

//passport
passport.use(new LocalStrategy(User.authenticate()));



//seeding db
// seeddb()


app.use( productroutes); //so har incomimg request ke liye chale
app.use(reviewroutes);  //so har incomimg request ke liye chale
app.use(authroutes);  //so har incomimg request ke liye chale
app.use(cartroutes);




app.listen(8080,()=>{
    console.log("server connected at port 8080")
})