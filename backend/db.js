const mongoose = require('mongoose');
const url = 'mongodb+srv://krishpatel1623:Krish16@teammanagement.myxik1k.mongodb.net/TeamManagement?retryWrites=true&w=majority&appName=TeamManagement';

const mongoDB = async () => {
    try {
      await mongoose.connect(url);
      console.log("Connected successfully");
      const company = mongoose.connection.db.collection("company");
        const cData = await company.find({}).toArray();
        const employee = mongoose.connection.db.collection("employee");
        const eData = await employee.find({}).toArray();
        global.company = cData; // creating global variable for company in javascript.
        global.employee = eData; // creating global variable for employee in javascript.
    } catch (error) {
      console.error("Database connection error:", error);
    }
  };

  
  
  module.exports = mongoDB;