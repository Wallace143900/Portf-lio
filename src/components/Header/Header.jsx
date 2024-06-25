import TrashImg from "../../assets/logo_wallace_verde.png";
import styles from "./styles.module.scss";
import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const Header = () => {

  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
    return (
      <header>
        <nav>
            <div className={styles.header}>
            <img className={styles.img} src={TrashImg} alt="" />
                <ul>
                    <li >Início</li>
                    <li>Sobre</li>
                    <li>Portfólio</li>
                    <li>Contato</li>
                    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={34} className={styles.icone}/>
                </ul>
            </div>
            <div className={styles.Linha_verde}></div>
        </nav>
      </header>
    )
}