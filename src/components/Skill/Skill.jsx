import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiCsharp } from "react-icons/si";
import styles from "./styles.module.scss";

export const Skill = () => {
    return (
        <section>
            <div className={styles.divSectionSkill}>
                <h2 className="title2">Skills</h2>
                    <ul className={styles.ulImg}>
                        <div className={styles.DivImg}>
                            <p>HTML5</p>
                            <FaHtml5 className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>CSS3</p>
                            <FaCss3Alt className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>JavaScript</p>
                            <IoLogoJavascript className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>SASS</p>
                            <FaSass className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>React</p>
                            <FaReact className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>TypeScript</p>
                            <SiTypescript className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>Node</p>
                            <FaNodeJs className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>Express</p>
                            <SiExpress className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>PostgreSQL</p>
                            <SiPostgresql className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>MySQL</p>
                            <GrMysql className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>Prisma</p>
                            <SiPrisma className={styles.icons}/>
                        </div>
                        <div className={styles.DivImg}>
                            <p>CSharp</p>
                            <SiCsharp className={styles.icons}/>
                        </div>
                        
                    </ul>
                </div>
        </section>
    )
}