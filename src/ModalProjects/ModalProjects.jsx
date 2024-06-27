import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const ModalProjects = ({ projectDetails, onClose }) => {
  

  if (!projectDetails) return null;

  const isBackend = projectDetails.technologies.includes("Node.js");

  return (
    <dialog open className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalCenter}>
          <div className={styles.left}>
            <img src={projectDetails.img} alt={projectDetails.title} />
            <div className={styles.divButtons}>
              {!isBackend && (
                <a href="" target="_blank" className="buttonCV">Acessar Projeto</a>
              )}
              <a href="" target="_blank" className="buttonCV">Acessar Repositório</a>
              <a href="" target="_blank" className="buttonCV">ver post no Linkedin</a>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className="title2">{projectDetails.title}</h2>
            <p className="paragraphy">{projectDetails.description}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalProjects;
