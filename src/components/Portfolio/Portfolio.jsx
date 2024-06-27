import { forwardRef } from "react";
import {MyProjects} from "../Portfolio/myProjects/myProjects";
import styles from "./styles.module.scss";

export const Portfolio = forwardRef((props, ref)  => {
    return (
        <section className={styles.portfolio} ref={ref}>
            <h2 className="title2">Portfólio</h2>
            <MyProjects />
        </section>
    )
});