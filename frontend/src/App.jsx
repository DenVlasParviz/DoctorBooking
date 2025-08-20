import "./index.css";
import Home from "./pages/Home";
import { Doctors } from "./pages/Doctors.jsx";
import { About } from "./pages/About";
import  Login  from "./pages/User/Login.jsx";
import { Contact } from "./pages/Contact.jsx";
import Appointments from "./pages/User/Appointments.jsx";
import { Navbar } from "./components/Navbar.jsx";
import MyAppointments from "./pages/User/MyAppointments.jsx";
import Profile from "./pages/User/Profile.jsx"
import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import {ToastContainer} from "react-toastify";
function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
        <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointments />} />
          <Route path="/appointments" element={<MyAppointments />} />

          <Route path="/appointment/:docId" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
