import {MyProjects} from "../Portfolio/myProjects/myProjects";
import styles from "./styles.module.scss";

export const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <h2 className="title2">Portfólio</h2>
            <MyProjects />
        </section>
    )
}