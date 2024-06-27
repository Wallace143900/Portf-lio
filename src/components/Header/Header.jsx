import React, { useState } from "react";
import styles from "./styles.module.scss";
import TrashImg from "../../assets/logo_wallace_verde.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Header = ({ scrollToSkills, scrollToPortfolio, scrollToFooter }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <div className={styles.header}>
          <img
            className={styles.img}
            src={TrashImg}
            alt="Logo"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
          <ul>
            <li onClick={scrollToTop}>Início</li>
            <li onClick={scrollToSkills}>Sobre</li>
            <li onClick={scrollToPortfolio}>Portfólio</li>
            <li onClick={scrollToFooter}>Contato</li>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={34}
              className={styles.icone}
            />
          </ul>
        </div>
        <div className={styles.Linha_verde}></div>
      </nav>
    </header>
  );
};

export default Header;
