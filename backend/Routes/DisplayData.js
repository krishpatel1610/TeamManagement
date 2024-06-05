const express = require('express');
const router = express.Router();

router.post('/getComp',(req,res)=>{
    try {
        res.send([global.company,global.employee]);
    } catch (error) {
        console.log(error.message);
        res.send("Server error");
    }
});

module.exports = router;