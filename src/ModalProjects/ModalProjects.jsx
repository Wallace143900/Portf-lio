import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDarkMode } from "../context/DarkModeContext";

export const ModalProjects = ({ projectDetails, onClose }) => {

  const { isDarkMode } = useDarkMode();
  

  if (!projectDetails) return null;

  const isBackend = projectDetails.technologies.includes("Node.js");

  return (
    <div open className={styles.modal}>
      <div style={{ background: isDarkMode ? 'var(--DarkCyans)' : 'var(--DarkCyans-light)' }} className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalCenter}>
          <div className={styles.left}>
            <video src={projectDetails.video} controls alt={projectDetails.title} />
            <div className={styles.divButtons}>
              {!isBackend && (
                <a href={projectDetails.linkProjeto} target="_blank" className="buttonCV">Acessar Projeto</a>
              )}
              <a href={projectDetails.linkGithub} target="_blank" className="buttonCV">Acessar Repositório</a>
              <a href={projectDetails.linkLinkedin} target="_blank" className="buttonCV">ver post no Linkedin</a>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className="title2">{projectDetails.title}</h2>
            <p className="paragraphy">{projectDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProjects;
