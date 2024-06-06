const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://krishpatel1623:Krish16@teammanagement.myxik1k.mongodb.net/TeamManagement?retryWrites=true&w=majority&appName=TeamManagement';

const router = express.Router();

router.post('/getComp',async(req,res)=>{
    try {
        await mongoose.connect(url);
        const company = mongoose.connection.db.collection("company");
        const cData = await company.find({}).toArray();
        const employee = mongoose.connection.db.collection("employee");
        const eData = await employee.find({}).toArray();
        global.company = cData; // creating global variable for company in javascript.
        global.employee = eData; // creating global variable for employee in javascript.
        res.send([global.company,global.employee]);
    } catch (error) {
        console.log(error.message);
        res.send("Server error")
    }
});

module.exports = router;