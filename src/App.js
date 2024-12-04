import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <CoursesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
