import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from "./pages/Doctor.jsx";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";
import Profile from "./pages/Profile";
import Reception from "./pages/Reception";
import Nav from "./components/Nav";
import "./App.css";
import Login from "./pages/Login";
import ProfileAdd from "./pages/ProfileAdd";
function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/reception" element={<Reception />} />

          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/user">
            <Route path="login" element={<Login />} />
            <Route path="profileuser" element={<Profile />} />
            <Route path="profileadd" element={<ProfileAdd />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
