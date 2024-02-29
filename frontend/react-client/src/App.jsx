import { useState } from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./component/LandingPage";
import SignUp from "./component/Signup";
import Users from "./component/Users";
import CreateUser from "./component/CreateUser";
// import UpdateUser from "./component/UpdateUser";

function App(){
  const [count, setCount]=useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/create" element={<CreateUser/>}/>
        {/* <Route path="/update/:id" element={<UpdateUser/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;