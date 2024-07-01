import fotoCurriculo from "../../../public/fotoPortfolio.svg";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./styles.module.scss";

export const Home = () => {

    const { isDarkMode } = useDarkMode();

    return (
        <section style={{ background: isDarkMode ? 'var(--DarkCyans)' : 'var(--DarkCyans-light)' }}>
            <div className={styles.divSection}> 
                <div className={styles.DivMe}>
                    <p className="paragraphy" id={styles.paragraphy}>Olá, Eu sou</p>
                    <h1 className="title1" id={styles.title1}>Wallace Menezes</h1>
                    <h4 className="title4">Desenvolvedor Front End</h4>
                    <div className={styles.divButtons}>
                        <a href="https://drive.google.com/file/d/11eA9spxr-FfXXg3AJJwzpfWHZhIinUHv/view?usp=drive_link" className="buttonCV" id={styles.buttonCV} target="_blank">Download CV</a>
                        <a href="https://wa.me/5521965629403" className="buttonContato" id={styles.buttonContato} target="_blank">Me Chame</a>
                    </div>
                </div>
                <img className={styles.img} src={fotoCurriculo} alt="" />
            </div>
        </section>
    )
}