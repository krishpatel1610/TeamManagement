import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './screens/Signup.js';
import EmployeeSignup from './screens/EmployeeSignup.js';
import EmployeeSignup2 from './screens/EmployeeSignup2.js';
import EmployeeSignup3 from './screens/EmployeeSignup3.js';
import Company from './screens/Company.js';
import Employee from './screens/Employee.js';
import Logine from './screens/Logine.js';
import CompanyDetail from './screens/CompanyDetails.js';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Logine" element={<Logine/>}/>
        <Route path="/Login" element={<Login/>}/>   
        <Route path="/Signup" element={<Signup/>}/>    
        <Route path="/EmployeeSignup" element={<EmployeeSignup/>}/> 
        <Route path="/EmployeeSignup2" element={<EmployeeSignup2/>}/> 
        <Route path="/EmployeeSignup3" element={<EmployeeSignup3/>}/> 
        <Route path="/Company" element={<Company/>}/>
        <Route path="/Employee" element={<Employee/>}/> 
        <Route path="/CompanyDetails/:id" element={<CompanyDetail/>}/> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
