const express =  require('express');
const router = express.Router();
require('../db/connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const ApiData =require("../model/userSchema")

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json())


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