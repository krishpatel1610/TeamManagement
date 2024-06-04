const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');
const Company = require('../model/Company');
// const { body,validationResult } = require('express-validator');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const jwtSecure = "Mynameiskpandyoutube!!!##"; // secure key 

router.post("/createcompany",async(req,res)=>{
    
    // const salt = await bcrypt.genSalt(10); // random key generated by bcrypt
    // const secPassword = await bcrypt.hash(req.body.password,salt); // encrypting password with bcrypt
    try{
        // const error = validationResult(req);
        // if(!error.isEmpty()){
        //     return res.status(400).json({ error: error.array() });
        // }
        await Company.create({
            company_name: req.body.company_name ,
            director_name: req.body.director_name ,
            email: req.body.email,
            password:req.body.password ,
            description: req.body.description,
            technologies:req.body.technologies ,
            number_of_projects: req.body.number_of_projects, 
            number_of_employees: req.body.number_of_employees,
            city: req.body.city,
            location:req.body.location
        })
        res.json({success:true});
    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})

router.post("/createemployee",async(req,res)=>{
    
    // const salt = await bcrypt.genSalt(10); // random key generated by bcrypt
    // const secPassword = await bcrypt.hash(req.body.password,salt); // encrypting password with bcrypt
    try{
        // const error = validationResult(req);
        // if(!error.isEmpty()){
        //     return res.status(400).json({ error: error.array() });
        // }
        const newEmployee = {
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
            technologies: req.body.technologies,
            skills: req.body.skills,
            link: req.body.link,
            Education: req.body.Education ? req.body.Education : [], // Handle potential missing data
            Experience: req.body.Experience ? req.body.Experience : [], // Handle potential missing data
          };
          
          await Employee.create(newEmployee);
        
        res.json({success:true});
    }catch(error){
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router;