import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr"; // Importado corretamente
import styles from "./styles.module.scss";
import { useDarkMode } from "../../context/DarkModeContext";

export const Skill = () => {
  const skillRef = useRef(null);
  const ulImgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const ulImgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ulImgRef.current.classList.add(styles.show);
          } else {
            ulImgRef.current.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0 }
    );

    if (ulImgRef.current) {
      ulImgObserver.observe(ulImgRef.current);
    }

    return () => {
      if (ulImgRef.current) {
        ulImgObserver.unobserve(ulImgRef.current);
      }
    };
  }, []);

  return (
    <section style={{ background: isDarkMode ? 'var(--DarkCyans)' : 'var(--DarkCyans-light)' }} ref={skillRef} className={`${styles.section} ${isVisible ? styles.show : ''}`}>
      <div className={styles.divSectionSkill}>
        <h2 className="title2">Skills</h2>
        <ul ref={ulImgRef} className={`${styles.ulImg}`}>
          <div className={styles.DivImg}>
            <p className="paragraphy">HTML5</p>
            <FaHtml5 className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">CSS3</p>
            <FaCss3Alt className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">JavaScript</p>
            <IoLogoJavascript className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">SASS</p>
            <FaSass className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">React</p>
            <FaReact className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">TypeScript</p>
            <SiTypescript className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">Node</p>
            <FaNodeJs className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">Express</p>
            <SiExpress className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">PostgreSQL</p>
            <SiPostgresql className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">MySQL</p>
            <GrMysql className={styles.icons}/>
          </div>
          <div className={styles.DivImg}>
            <p className="paragraphy">Prisma</p>
            <SiPrisma className={styles.icons}/>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
