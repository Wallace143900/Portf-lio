import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import { FaUniversity } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";
import { FiMenu } from "react-icons/fi";


export const AboutMe = forwardRef((props, ref)  => {
  
  const { isDarkMode } = useDarkMode();

  return (
    <section style={{ background: isDarkMode ? 'var(--DarkCyans)' : 'var(--DarkCyans-light)' }} ref={ref}>
      <div className={styles.divContainerAbouMe}>
        <div className={styles.aboutMe}>
          <h2 className="title2">Sobre Mim</h2>
          <p className="paragraphy" id={styles.paragraphy}>
            Após uma década no atendimento ao cliente como garçom, decidi explorar novos horizontes na tecnologia. Formado pela Universidade Estácio como Análista e Desenvolvimento de Sistemas, e pela Kenzie Academy como Desenvolvedor Front-End, estou agora focado no desenvolvimento web full-stack, especialmente no back-end. Tenho experiência com HTML, CSS, SASS, JavaScript, React.js, TypeScript, Node.js, Express.js, PostgreSQL, prisma ORM. Minha paixão por resolver problemas e aprender novas tecnologias me impulsiona a crescer constantemente.
          </p>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.divLocals}>
          <div className={styles.locals}>
            <FaUniversity className={styles.iconLocal} />
            <h2>UNESA - Estácio, Rio de Janeiro</h2>
          </div>
          <p className="paragraphy" id={styles.paragraphy}>
            <strong>Formado -</strong> Análise e Desenvolvimento de Sistemas 2021-2023
          </p>
          <div className={styles.locals}>
            <FaUniversity className={styles.iconLocal} />
            <h2>Curso de Programação - Kenzie Academy, Rio de Janeiro</h2>
          </div>
          <p className="paragraphy" id={styles.paragraphy}>
            <strong>Formado -</strong> Desenvolvedor Front End - 09/2023-03/2024
          </p>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
