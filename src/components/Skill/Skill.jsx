import HTML5 from "../../assets/icons8-html5.svg";
import CSS3 from "../../assets/icons8-css3.svg";
import JavaScript from "../../assets/icons8-javascript.svg";
import SASS from "../../assets/icons8-sass.svg";
import React from "../../assets/icons8-react.svg";
import TypeScript from "../../assets/icons8-typescript.svg";
import Node from "../../assets/icons8-node.js.svg";
import Express from "../../assets/icons8-express.js.svg";
import Figma from "../../assets/icons8-figma.svg";
import styles from "./styles.module.scss";

export const Skill = () => {
    return (
        <section>
            <div>
                <h2>Skills</h2>
                <div class={styles.img}>
                    <ul>
                        <img src={HTML5} alt="Imagem ícone HTML5" />
                        <img src={CSS3} alt="Imagem ícone CSS3" />
                        <img src={JavaScript} alt="Imagem ícone JavaScript" />
                        <img src={SASS} alt="Imagem ícone SASS" />
                        <img src={React} alt="Imagem ícone React" />
                        <img src={TypeScript} alt="Imagem ícone TypeScript" />
                        <img src={Node} alt="Imagem ícone Node.js" />
                        <img src={Express} alt="Imagem ícone Express.js" />
                        <img src={Figma} alt="Imagem ícone Fígma" />
                    </ul>
                </div>
            </div>
        </section>
    )
}