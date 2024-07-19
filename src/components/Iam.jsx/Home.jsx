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
                        <a href="https://drive.google.com/uc?export=download&id=1Dj8Gc_1CCEwDNTEIrDwlPFHpcZw4Abks" className="buttonCV" id={styles.buttonCV}>Download CV</a>
                        <a href="https://wa.me/5521965629403" className="buttonContato" id={styles.buttonContato} target="_blank">Me Chame</a>
                    </div>
                </div>
                <img className={styles.img} src={fotoCurriculo} alt="" />
            </div>
            {/* Linhas animadas */}
            <div className={styles.animatedLines}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className={styles.line}></div>
                ))}
            </div>
        </section>
    );
};
