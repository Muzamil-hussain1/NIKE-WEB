import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className=" grow">
       <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin/>} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;