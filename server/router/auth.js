const express =  require('express');
const router = express.Router();
require('../db/connection');
const ApiData =require("../model/userSchema")

router.get('/', (req,res)=>{
    res.send(`health check`)
});

router.get('/Apidata', async (req,res)=>{

    try{
        const userdata= await ApiData.find({});
        res.send( userdata);
    }catch(e){
        res.status(500)(e);
    }
})

module.exports = router;