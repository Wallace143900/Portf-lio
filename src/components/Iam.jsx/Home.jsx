import fotoCurriculo from "../../assets/Foto portfolio.jpg";
import styles from "./styles.module.scss";

export const Home = () => {
    return (
        <section>
            <div className={styles.divSection}> 
                <div className={styles.DivMe}>
                    <p id={styles.paragraphy}>Olá, Eu sou</p>
                    <h1>Wallace Menezes</h1>
                    <h2>Desenvolvedor Front End</h2>
                    <div className={styles.divButtons}>
                        <button className={styles.button}>Download CV</button>
                        <button className={styles.Contato}>Me Chame</button>
                    </div>
                </div>
                <img className={styles.img} src={fotoCurriculo} alt="" />
            </div>
        </section>
    )
}