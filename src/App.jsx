import React, { useRef } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Iam.jsx/Home";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Skill } from "./components/Skill/Skill";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Footer } from "./Footer/Footer";
import "./styles/index.scss";

function App() {
  const aboutRef = useRef(null); // Referência para a seção AboutMe
  const portfolioRef = useRef(null); // Referência para a seção Portfolio
  const footerRef = useRef(null); // Referência para o rodapé

  const scrollToSkills = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        scrollToSkills={scrollToSkills}
        scrollToPortfolio={scrollToPortfolio}
        scrollToFooter={scrollToFooter}
      />
      <Home />
      <AboutMe id="skills" ref={aboutRef} /> {/* Passando a referência para AboutMe */}
      <Skill />
      <Portfolio id="portfolio" ref={portfolioRef} />
      <Footer id="footer" ref={footerRef} />
    </>
  );
}

export default App;
