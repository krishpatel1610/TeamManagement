const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
    
    company_name:{
        type: String,
        required: true,
    },
    director_name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    technologies:{
        type: [String],
        required: true,
    },
    number_of_projects:{
        type: String,
        required: true,
    },
    number_of_employees:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
});

const Person = mongoose.model('company', CompanySchema, 'company')

module.exports = Person;