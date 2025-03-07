import React from "react";
import PromoCards from "./landingcomp/Promocards";
import Header from "./landingcomp/Header";
import Hero from "./landingcomp/Hero";
import About from "./landingcomp/About";
import Shopbycateg from "./landingcomp/Shopbycateg";
import Contact from "./landingcomp/Contact";
import Footer from "./landingcomp/Footer";

export function landing() {
  return (
    <>
      <Header />
      <Hero />
      <PromoCards />
      <About />
      <Shopbycateg />
      <Contact />
      <Footer />
    </>
  );
}
