import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import SignUp from "./component/Signup";
import UserList from "./component/userdata";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
