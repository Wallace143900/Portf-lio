import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";



export const Footer = () => {
    return (
        <footer>
            <h2 className="title2">Contatos</h2>
            <div className={styles.containerContato}>
                <div className={styles.contato}>
                    <a href="mailto:wallaexecutivo1000@gmail.com" target="_blank">
                        <div className={styles.divIconContato}>
                            <MdOutlineMail className={styles.iconContato}/>
                        </div>
                        <h4 className="title4">E-mail</h4>
                        <p className="paragraphy">wallaexecutivo1000@gmail.com</p>
                    </a>
                </div>
                <div className={styles.contato}>
                    <a href="https://wa.me/5521965629403" target="_blank">
                    <div className={styles.divIconContato}>
                        <BsFillTelephoneFill className={styles.iconContato}/>
                    </div>
                        <h4 className="title4">Telefone</h4>
                        <p className="paragraphy">(21)96562-9403</p>
                    </a>
                </div>
                <div className={styles.contato}>
                    <a href="https://www.linkedin.com/in/wallace-menezes-505019125/" target="_blank">
                    <div className={styles.divIconContato}>
                        <FaLinkedinIn className={styles.iconContato}/>
                    </div>
                        <h4 className="title4">Linkedin</h4>
                        <p className="paragraphy">@wallacemenezes</p>
                    </a>
                </div>
                <div className={styles.contato}>
                    <a href="https://github.com/Wallace143900" target="_blank">
                    <div className={styles.divIconContato}>
                        <FaGithub className={styles.iconContato}/>
                    </div>
                        <h4 className="title4">Github</h4>
                        <p className="paragraphy">wallace143900</p>
                    </a>
                </div>
            </div>
            <div className={styles.disoriaBackFront}></div>
        </footer>
    )
}