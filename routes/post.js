const express=require('express');
//const { model } = require('mongoose');
const route=express.Router();
const Post=require('../models/Post');


route.get('/',async(req,res)=>{
    try{
        const post=await Post.find();
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});
route.post ('/',async(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description

    })
    try{
        const savedPost=await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({message:error})
    }
});

module.exports=route;
