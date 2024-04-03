import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from "./pages/Doctor.jsx";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";
import Profile from "./pages/Profile";
import Reception from "./pages/Reception";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>

      <Nav />
      <Router>
        <Routes>
        <Route path="/path" element={<Doctor/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
