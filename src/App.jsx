import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Promocards from "./components/Promocards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShopByCategory from "./components/Shopbycateg";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Promocards />
              <About />
              <ShopByCategory/>
              <Contact />
              <Footer/>
            </>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
