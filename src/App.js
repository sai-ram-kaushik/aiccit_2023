import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ConferenceCommitte from "./components/ConferenceCommitte";
import ConferenceTrack from "./components/ConferenceTrack";
import Register from "./components/Register";
import Glimps from "./components/Glimps";
import Dates from "./components/Dates";
// import Footer from "./components/Footer";
// import Partners from "./components/Partners";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />}/>
        <Route path="/conference_committee" element={<ConferenceCommitte />} />
        <Route path="/conference_track" element={<ConferenceTrack />} />
        <Route path="/glimps" element={<Glimps />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Partners />
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
