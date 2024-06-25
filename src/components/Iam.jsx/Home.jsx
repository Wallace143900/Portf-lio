import fotoCurriculo from "../../assets/Foto portfolio.jpg";
import styles from "./styles.module.scss";

export const Home = () => {
    return (
        <section>
            <div className={styles.divSection}> 
                <div className={styles.DivMe}>
                    <p className="paragraphy" id={styles.paragraphy}>Olá, Eu sou</p>
                    <h1 className="title1" id={styles.title1}>Wallace Menezes</h1>
                    <h4 className="title4">Desenvolvedor Front End</h4>
                    <div className={styles.divButtons}>
                        <button className="buttonCV" id={styles.buttonCV}>Download CV</button>
                        <button className="buttonContato" id={styles.buttonContato}>Me Chame</button>
                    </div>
                </div>
                <img className={styles.img} src={fotoCurriculo} alt="" />
            </div>
        </section>
    )
}