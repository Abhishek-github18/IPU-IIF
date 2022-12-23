import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import EDP from "./components/pages/EDP";
import Events from "./components/pages/Events";
import AICTELAB from "./components/pages/AICTELAB";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/footer";
import Notices from "./components/pages/Notices";
import Patents from "./components/pages/Patents";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edp" element={<EDP />} />
        <Route path="/events" element={<Events />} />
        <Route path="/lab" element={<AICTELAB />} />
        <Route path="/patent" element={<Patents />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
