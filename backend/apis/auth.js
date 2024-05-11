const express=require('express');
const { isAuthenticated } = require('../middleware');

const router=express.Router();





router.get("/api/check-auth", isAuthenticated, (req, res) => {
    res.status(200).json({ isAuthenticated: true });
});




module.exports=router;