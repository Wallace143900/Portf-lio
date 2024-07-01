import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import TrashImg from "../../../public/logo_wallace_verde.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../../context/DarkModeContext";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = ({ scrollToSkills, scrollToPortfolio, scrollToFooter }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Fechar o modal ao clicar em "Início"
  };

  const handleScrollToSkills = () => {
    scrollToSkills();
    setIsMenuOpen(false); // Fechar o modal ao clicar em "Sobre"
  };

  const handleScrollToPortfolio = () => {
    scrollToPortfolio();
    setIsMenuOpen(false); // Fechar o modal ao clicar em "Portfólio"
  };

  const handleScrollToFooter = () => {
    scrollToFooter();
    setIsMenuOpen(false); // Fechar o modal ao clicar em "Contato"
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <div className={styles.iconContainer}>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={34}
              className={styles.icone}
            />
            <button className={styles.menuButton} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.buttonModalLi}>
            <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={34}
                  className={styles.icone}
                />
            <button className={styles.menuButton} onClick={toggleMenu}>
                  {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
          </div>
          <h3 className="title3">Bem Vindo ao meu Portfólio :)</h3>
          <li className="paragraphy" onClick={scrollToTop}>Início</li>
          <li className="paragraphy" onClick={handleScrollToSkills}>Sobre</li>
          <li className="paragraphy" onClick={handleScrollToPortfolio}>Portfólio</li>
          <li className="paragraphy" onClick={handleScrollToFooter}>Contato</li>
        </ul>
        <div className={styles.Linha_verde}></div>
      </nav>
    </header>
  );
};

export default Header;
