import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Contactlist from "./components/contact/Contactlist";
import Addcontact from "./components/addcontact/Addcontact";
import Updatecontact from "./components/updatecontact/Updatecontact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Contact" element={<Contactlist />} />
        <Route path="/Add" element={<Addcontact />} />
        <Route path="/Update/:id" element={<Updatecontact />} />
      </Routes>
    </div>
  );
}

export default App;
