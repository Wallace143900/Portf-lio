import React, { useState, forwardRef, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import ModalProjects from "../../../ModalProjects/ModalProjects";
import MyTasks from "../../../assets/fotos para projetos/MyTasks.jpg";
import SiteGenerico from "../../../assets/fotos para projetos/SiteGenerico.jpg";
import Portfolio from "../../../assets/fotos para projetos/Portfólio.jpg";
import ControlFinance from "../../../assets/fotos para projetos/ControlFinance.jpg";
import Hamburgueria from "../../../assets/fotos para projetos/Hamburgueria.jpg";
import KenzieHub from "../../../assets/fotos para projetos/KenzieHub.jpg";
import Entrega1 from "../../../assets/fotos para projetos/entrega_1_kenzie.jpg";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";

export const MyProjects = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);
  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);
  const [currentBackIndex, setCurrentBackIndex] = useState(0);

  const projectFront = [
    {
      title: "Lista de Tarefas",
      img: MyTasks,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "O código HTML define uma página web simples para gerenciar uma lista de tarefas. Ele inclui um cabeçalho com um título e um campo de pesquisa. O conteúdo principal é dividido em um formulário para adicionar novas tarefas e uma seção para listar as tarefas existentes. O estilo CSS proporciona uma aparência limpa e organizada para a página. Utiliza cores suaves de fundo e bordas arredondadas para criar uma interface amigável. Os elementos como cabeçalho, formulário e lista de tarefas são estilizados para melhor legibilidade e usabilidade, com botões e campos de entrada formatados para se destacar e serem intuitivos. A função JavaScript manipula dinamicamente a lista de tarefas. Permite adicionar novas tarefas através do formulário e remover tarefas existentes usando botões específicos para cada item da lista. Cada tarefa é categorizada visualmente por marcadores ao lado do título da tarefa.",
    },
    {
      title: "Site Genérico",
      img: SiteGenerico,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "Este projeto representa uma página institucional desenvolvida para uma instituição educacional fictícia, focada em promover cursos e programas de aprendizado. Utilizando HTML5, CSS3 (com pré-processamento Sass), e JavaScript, a página apresenta um design responsivo e moderno. Os principais elementos incluem um header fixo com botão de chamada para ação, seções estruturadas como Banner, Sobre Nós, FAQ e Comentários de Alunos, além de um footer simples. Destaca-se também a utilização de um modal para captura de informações de interessados, controlado por JavaScript para abrir e fechar dinamicamente em resposta a eventos de clique."
    },
    {
        title: "Portfólio",
        img: Portfolio,
        technologies: ["HTML5", "CSS3", "JavaScript", "React"],
        description: "O projeto do Portfólio Pessoal de Wallace Menezes é um exemplo de aplicação front-end desenvolvida com React e Sass, focada em apresentar habilidades técnicas e projetos realizados. Utilizando uma estrutura modular, o portfólio inclui seções como apresentação pessoal, tecnologias dominadas, e uma galeria de projetos destacados. Cada seção é estilizada com CSS modularizado através de Sass, garantindo uma apresentação visual coesa e responsiva em diferentes dispositivos."
    },
    {
        title: "Control Finance",
        img: ControlFinance,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        description: "O projeto de Controle Financeiro desenvolvido por Wallace Menezes é uma aplicação front-end construída com React e Sass, focada na gestão de entradas e saídas financeiras. A aplicação permite ao usuário registrar valores, categorizando-os como entradas ou saídas, visualizar um resumo financeiro com a soma dos valores por tipo (todos, entradas, saídas) e deletar entradas individualmente."
    },
    {
        title: "Hamburgueria",
        img: Hamburgueria,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        description: "O projeto consiste na implementação de funcionalidades e estilização a um projeto existente, utilizando React para simular um carrinho de compras. Os produtos são obtidos de uma API, com suporte para busca. A estilização é feita com SASS, com foco em responsividade. O gerenciamento do carrinho inclui adicionar/remover itens e calcular totais, com dados persistidos no localStorage. O modal permite abertura/fechamento podendo excluir um item ou todos."
    },
    {
        title: "Kenzie Hub",
        img: KenzieHub,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
      description: "O projeto 'Kenzie Hub' foi desenvolvido utilizando React.js com Sass para criar uma plataforma robusta de cadastro e login. Utilizei o Vite para gerenciar dependências e integrei APIs usando Axios. Organizei o projeto em pastas dedicadas para login, cadastro, área logada e modais para adicionar tecnologias. Implementei duas Context APIs: uma para gerenciar autenticação de usuários e outra para manipular tecnologias. Utilizei estados para gerenciar dados dinâmicos e o React Hook Form para formulários eficientes. A autenticação de rotas foi implementada com React Router DOM, garantindo rotas públicas e privadas. Armazenei dados localmente com localStorage para preservar sessões de login e tecnologias adicionadas entre visitas. O projeto também inclui validação de formulários com schemas para uma experiência de usuário intuitiva."
    },
  ];

  const projectBack = [
      {
          title: "API Rest - Express",
          img: Entrega1,
          technologies: ["TypeScript", "Node.js", "Express"],
        },
        {
            title: "API Rest - Express Add Middleware",
            img: Entrega1,
            technologies: ["TypeScript", "Node.js", "Express"],
        },
        {
            title: "Prisma e Express / Vagas e Candidaturas",
            img: Entrega1,
            technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
        },
        {
            title: "API de controle de tarefas Prisma e express",
            img: Entrega1,
            technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
        },
  ];

  const handleNext = (type) => {
    if (type === "front") {
      setCurrentFrontIndex((prevIndex) => (prevIndex + 1) % projectFront.length);
    } else {
      setCurrentBackIndex((prevIndex) => (prevIndex + 1) % projectBack.length);
    }
  };

  const handlePrev = (type) => {
    if (type === "front") {
      setCurrentFrontIndex((prevIndex) => (prevIndex - 1 + projectFront.length) % projectFront.length);
    } else {
      setCurrentBackIndex((prevIndex) => (prevIndex - 1 + projectBack.length) % projectBack.length);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <article className={styles.article}>
      <div className={styles.ContainerArticle} ref={ref}>
        <div className={styles.Container_FrontEnd}>
          <h3 className="title3">Front-End</h3>
          <div className={styles.divImgProject}>
            {projectFront.slice(currentFrontIndex, currentFrontIndex + 3).map((project, index) => (
              <div className={styles.skillsImgProject} key={index}>
                <img src={project.img} alt={project.title} />
                <div className={styles.descriptionProjects}>
                  <h4 className="title4">{project.title}</h4>
                  <div className={styles.iconsProjects}>
                    {project.technologies.includes("HTML5") && <FaHtml5 className={styles.i} />}
                    {project.technologies.includes("CSS3") && <FaCss3Alt className={styles.i} />}
                    {project.technologies.includes("JavaScript") && <IoLogoJavascript className={styles.i} />}
                    {project.technologies.includes("React") && <FaReact className={styles.i} />}
                    {project.technologies.includes("Sass") && <FaSass className={styles.i} />}
                  </div>
                  <button className={styles.hidden_button} onClick={() => openModal(project)}>Ver mais</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.navigation}>
            <button onClick={() => handlePrev('front')}>&#8249;</button>
            <button onClick={() => handleNext('front')}>&#8250;</button>
          </div>
        </div>
        <div className={styles.disoriaBackFront}></div>
        <div className={styles.Container_BackEnd}>
          <h3 className="title3">Back-End</h3>
          <div className={styles.divImgProject}>
            {projectBack.slice(currentBackIndex, currentBackIndex + 3).map((project, index) => (
              <div className={styles.skillsImgProject} key={index}>
                <img src={project.img} alt={project.title} />
                <div className={styles.descriptionProjects}>
                  <h4 className="title4">{project.title}</h4>
                  <div className={styles.iconsProjects}>
                    {project.technologies.includes("TypeScript") && <SiTypescript className={styles.i} />}
                    {project.technologies.includes("Node.js") && <FaNodeJs className={styles.i} />}
                    {project.technologies.includes("Express") && <SiExpress className={styles.i} />}
                    {project.technologies.includes("PostgreSQL") && <SiPostgresql className={styles.i} />}
                    {project.technologies.includes("Prisma") && <SiPrisma className={styles.i} />}
                  </div>
                  <button className={styles.hidden_button} onClick={() => openModal(project)}>Ver mais</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.navigation}>
            <button onClick={() => handlePrev('back')}>&#8249;</button>
            <button onClick={() => handleNext('back')}>&#8250;</button>
          </div>
        </div>
      </div>
      {modalOpen && <ModalProjects projectDetails={selectedProject} onClose={closeModal} />}
    </article>
  );
});

export default MyProjects;
