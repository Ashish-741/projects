const express=require('express');
const router=express.Router()  //mini instance
const User = require('../models/User');
const passport = require('passport');

//to show the form for signup
router.get('/register',(req,res)=>{
    res.render('auth/signup');
})

//to actually register a user in db
router.post('/register',async (req,res)=>{
    let {email,password,username,role}=req.body;
    const user=new User({email,username,role});
    const newUser=await User.register(user,password);
    // res.send(newUser);
    // res.redirect('/login')
    req.login(newUser,function(err){
        if(err){
            return next(err);
        }
        req.flash('success','welcome,you are succeefully registered');
        return res.redirect('/products');
    })
})

//to get login form
router.get('/login',(req,res)=>{
    res.render('auth/login');
})

//to actually login in db
router.post('/login',
    passport.authenticate('local',{
        failureRedirect:'/login',
        failureMessage:true
    }),
(req,res)=>{
    req.flash('success','welcome back');
    res.redirect('/products');
})

//logout
router.get('/logout',(req,res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success','goodbye my friend see you again')
    res.redirect('/login');
})


module.exports=router;