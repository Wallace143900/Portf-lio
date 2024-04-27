import TrashImg from "../../assets/Wallace_logo_preta.svg";
import styles from "./styles.module.scss";
import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const Header = () => {

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
    return (
        <nav>
            <div className={styles.header}>
            <img className={styles.img} src={TrashImg} alt="" />
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Portfólio</li>
                    <li>Contato</li>
                    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={34}
    />
                </ul>
            </div>
        </nav>
    )
}