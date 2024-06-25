import styles from "./styles.module.scss";
import MyTasks from "../../../assets/fotos para projetos/MyTasks.jpg";
import SiteGenerico from "../../../assets/fotos para projetos/SiteGenerico.jpg";
import Portfolio from "../../../assets/fotos para projetos/Portfólio.jpg";
import ControlFinance from "../../../assets/fotos para projetos/ControlFinance.jpg";
import Hamburgueria from "../../../assets/fotos para projetos/Hamburgueria.jpg";
import KenzieHub from "../../../assets/fotos para projetos/KenzieHub.jpg";
import Entrega1 from "../../../assets/fotos para projetos/entrega_1_kenzie.jpg";
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


export const MyProjects = () => {
    return (
        <article>
            <div className={styles.Container_FrontEnd}>
                <h3 className="title3">Front-End</h3>
                    <div className={styles.divImgProject}>
                        <div className={styles.skillsImgProject}>
                            <img src={MyTasks} alt="Imagem My Tasks" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Lista de Tarefas</h4>
                                <div className={styles.iconsProjects}>
                                    <FaHtml5 className={styles.i}/>
                                    <FaCss3Alt className={styles.i}/>
                                    <IoLogoJavascript className={styles.i}/>
                                </div>
                                    <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={SiteGenerico} alt="Imagem Site Genérico" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Site Genérico</h4>
                                <div className={styles.iconsProjects}>
                                    <FaHtml5 className={styles.i}/>
                                    <FaCss3Alt className={styles.i}/>
                                    <IoLogoJavascript className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={Portfolio} alt="Imagem Portfólio" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Portfólio</h4>
                                <div className={styles.iconsProjects}>
                                    <FaHtml5 className={styles.i}/>
                                    <FaCss3Alt className={styles.i}/>
                                    <IoLogoJavascript className={styles.i}/>
                                    <FaReact className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={ControlFinance} alt="Imagem Control Finance" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Control Finance</h4>
                                <div className={styles.iconsProjects}>
                                    <FaHtml5 className={styles.i}/>
                                    <FaCss3Alt className={styles.i}/>
                                    <IoLogoJavascript className={styles.i}/>
                                    <FaReact className={styles.i}/>
                                    <FaSass className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={Hamburgueria} alt="Imagem Hamburgueria" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Hamburgueria</h4>
                                <div className={styles.iconsProjects}>
                                    <FaHtml5 className={styles.i}/>
                                    <FaCss3Alt className={styles.i}/>
                                    <IoLogoJavascript className={styles.i}/>
                                    <FaReact className={styles.i}/>
                                    <FaSass className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={KenzieHub} alt="Imagem Kenzie Hub" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Kenzie Hub</h4>
                                <div className={styles.iconsProjects}>
                                    <FaHtml5 className={styles.i}/>
                                    <FaCss3Alt className={styles.i}/>
                                    <IoLogoJavascript className={styles.i}/>
                                    <FaReact className={styles.i}/>
                                    <FaSass className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.disoriaBackFront}></div>
                <div className={styles.Container_BackEnd}>
                    <h3 className="title3">Back-End</h3>
                    <div className={styles.divImgProject}>
                        <div className={styles.skillsImgProject}>
                            <img src={Entrega1} alt="Imagem Kenzie Hub" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">API Rest - Express</h4>
                                <div className={styles.iconsProjects}>
                                    <SiTypescript className={styles.i}/>
                                    <FaNodeJs className={styles.i}/> 
                                    <SiExpress className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={Entrega1} alt="Imagem Kenzie Hub" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">API Rest - Express Add Middleware</h4>
                                <div className={styles.iconsProjects}>
                                    <SiTypescript className={styles.i}/>
                                    <FaNodeJs className={styles.i}/> 
                                    <SiExpress className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={Entrega1} alt="Imagem Kenzie Hub" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">Prisma e Express / Vagas e Candidaturas</h4>
                                <div className={styles.iconsProjects}>
                                    <SiTypescript className={styles.i}/>
                                    <FaNodeJs className={styles.i}/> 
                                    <SiExpress className={styles.i}/>
                                    <SiPostgresql className={styles.i}/>
                                    <SiPrisma className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                        <div className={styles.skillsImgProject}>
                            <img src={Entrega1} alt="Imagem Kenzie Hub" />
                            <div className={styles.descriptionProjects}>
                                <h4 className="title4">API de controle de tarefas Prisma e express</h4>
                                <div className={styles.iconsProjects}>
                                    <SiTypescript className={styles.i}/>
                                    <FaNodeJs className={styles.i}/> 
                                    <SiExpress className={styles.i}/>
                                    <SiPostgresql className={styles.i}/>
                                    <SiPrisma className={styles.i}/>
                                </div>
                                <button className={styles.hidden_button}>Ver mais</button>
                            </div>
                        </div>
                    </div>
                </div>
        </article>
    )
}