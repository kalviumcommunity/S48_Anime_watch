// import { useState } from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./component/LandingPage";
import Login from './component/Login';
import SignUp from "./component/Signup";
import Users from "./component/Users";
import CreateUser from "./component/CreateUser";
import UpdateUser from "./component/UpdateUser";
import Home from './component/Home';
import List from './component/List';
import Showlist from './component/Showlist';
function App(){
  // const [count, setCount]=useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/update/:id" element={<UpdateUser/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/Showlist" element={<Showlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;