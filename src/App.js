import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ConferenceTrack from "./components/ConferenceTrack";
import Register from "./components/Register";
import Glimps from "./components/Glimps";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Committee from './components/Committee'
import AdvisoryCommittee from "./components/AdvisoryCommittee";
import Technical from "./components/Technical";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />}/>
        <Route path="/conference_track" element={<ConferenceTrack />} />
        <Route path="/glimps" element={<Glimps />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/register" element={<Register />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/advisory_committee" element={<AdvisoryCommittee />} />
        <Route path="/technical_advisory_committee" element={<Technical />} />
      </Routes>
      <Partners />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
