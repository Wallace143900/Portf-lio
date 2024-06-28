import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import TrashImg from "../../assets/logo_wallace_verde.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../../context/DarkModeContext";

export const Header = ({ scrollToSkills, scrollToPortfolio, scrollToFooter }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav style={{ background: isDarkMode ? 'var(--DarkCyans)' : 'var(--DarkCyans-light)' }}>
        <div className={styles.header}>
          <img
            className={styles.img}
            src={TrashImg}
            alt="Logo"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
          <ul>
            <li className="paragraphy" onClick={scrollToTop}>Início</li>
            <li className="paragraphy" onClick={scrollToSkills}>Sobre</li>
            <li className="paragraphy" onClick={scrollToPortfolio}>Portfólio</li>
            <li className="paragraphy" onClick={scrollToFooter}>Contato</li>
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
