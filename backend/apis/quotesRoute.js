const express=require('express');
const Quotes = require('../model/Quote');
const ImageQuotes = require('../model/PictureQuote');
const router=express.Router();

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });


router.get('/allquote',async (req,res)=>{
    try{
    let allquote= await Quotes.find({})
    res.status(200).json(allquote);
    }
    catch(e){
        res.status(400).json({msg: "something went wrong"});
    }
})
router.post('/addquote',async(req,res)=>{
    try{
    let{author,quote,email,tag,topic,dob,instagram, facebook, twitter }=req.body;
    let newQuote=await Quotes.create({author,quote,email,tag,topic,dob,instagram, facebook, twitter })
    res.status(201).json({msg:"added succesfully! "});
    }
    catch(e){
        res.status(400).json({msg:"something went wrong"})
    }

})

router.get('/allimagequote',async (req,res)=>{
    try{
    let allpicturequote= await ImageQuotes.find({})
    res.status(200).json(allquote);
    }
    catch(e){
        res.status(400).json({msg: "something went wrong"});
    }
})
router.post('/addimagequote',upload.single('quoteImage'),async(req,res)=>{
    try{
    let{author,quoteImage,email,tag,topic,dob,instagram, facebook, twitter }=req.body;
    let newQuote=await ImageQuotes.create({author,quoteImage,email,tag,topic,dob,instagram, facebook, twitter })
    res.status(201).json({msg:"added succesfully! "});
    }
    catch(e){
        res.status(400).json({msg:"something went wrong"})
    }

})



// router.get('/quotes/:id',async (req,res)=>{
//     try{
//     let quote = await Quotes.findById(req.params.id)
//     res.status(200).json(quote);
//     }
//     catch(e){
//     res.status(400).json({msg:"something went wrong"});
//     }
// })



module.exports=router;