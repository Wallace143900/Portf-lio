import { forwardRef } from "react";
import {MyProjects} from "../Portfolio/myProjects/myProjects";
import styles from "./styles.module.scss";
import { useDarkMode } from "../../context/DarkModeContext";

export const Portfolio = forwardRef((props, ref)  => {
    const { isDarkMode } = useDarkMode();

    return (
        <section style={{ background: isDarkMode ? 'var(--DarkCyans)' : 'var(--DarkCyans-light)' }} className={styles.portfolio} ref={ref}>
            <h2 className="title2">Portfólio</h2>
            <MyProjects/>
        </section>
    )
});