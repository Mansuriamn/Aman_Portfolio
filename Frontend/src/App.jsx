import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';  // Import About component
// import Work from './Work';
import Contact from './Contact';
import Inter from './Skill';  // Change 'inter' to 'Inter'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Adding Home route */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/work" element={<Work />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Inter />} />  {/* Change 'inter' to 'Inter' */}
      </Routes>
    </BrowserRouter>
  );
}
