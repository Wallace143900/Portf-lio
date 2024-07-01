import React, { useState, forwardRef, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import ModalProjects from "../../../ModalProjects/ModalProjects";
// import MyTasks from "../../../../public/MyTasks.jpg";
import SiteGenerico from "../../../../public/SiteGenerico.jpg";
import Portfolio from "../../../../public/Portfolio.jpg";
import Calculadora from "../../../../public/Calculadora.jpg";
import PrevisaoTempo from "../../../../public/PrevisaoTempo.jpg";
import ControlFinance from "../../../../public/ControlFinance.jpg";
import Hamburgueria from "../../../../public/Burguer.jpg";
import KenzieHub from "../../../../public/KenzieHub.jpg";
import Entrega1 from "../../../../public/entrega1_kenzie.jpg";
import videoMyTasks from "../../../../public/myTasks.mp4";
import videoSiteGenerico from "../../../../public/siteGenerico.mp4";
import videoPortfolio from "../../../../public/portfolio.mp4";
import calculadora from "../../../../public/calculadora.mp4";
import previsaoTempo from "../../../../public/previsaoTempo.mp4";
import videoControlFinance from "../../../../public/controlFinance.mp4";
import videoHamburgueria from "../../../../public/burguer.mp4";
import videoKenzieHub from "../../../../public/kenzieHub.mp4";
import videoApi1 from "../../../../public/api1.mp4";
import videoApi2Prisma from "../../../../public/api2Prisma.mp4";
import videoApi3Prisma from "../../../../public/api3Prisma.mp4";
import videoEstacionamento from "../../../../public/estacionamento.mp4";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiPostgresql, SiPrisma, SiDotnet, SiCsharp } from "react-icons/si";

export const MyProjects = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);
  const [currentBackIndex, setCurrentBackIndex] = useState(0);

  const projectFront = [
    {
      title: "Lista de Tarefas",
      img: "/MyTasks.jpg",
      video: videoMyTasks,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkProjeto: "https://wallace143900.github.io/Lista-de-tarefas/",
      linkGithub: "https://github.com/Wallace143900/Lista-de-tarefas",
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_projetinho-finalizado-onde-tive-muitas-dificuldades-activity-7139004745708478465-Bm5b?utm_source=share&utm_medium=member_desktop",
      description: "O código HTML define uma página web simples para gerenciar uma lista de tarefas. Ele inclui um cabeçalho com um título e um campo de pesquisa. O conteúdo principal é dividido em um formulário para adicionar novas tarefas e uma seção para listar as tarefas existentes. O estilo CSS proporciona uma aparência limpa e organizada para a página. Utiliza cores suaves de fundo e bordas arredondadas para criar uma interface amigável. Os elementos como cabeçalho, formulário e lista de tarefas são estilizados para melhor legibilidade e usabilidade, com botões e campos de entrada formatados para se destacar e serem intuitivos. A função JavaScript manipula dinamicamente a lista de tarefas. Permite adicionar novas tarefas através do formulário e remover tarefas existentes usando botões específicos para cada item da lista. Cada tarefa é categorizada visualmente por marcadores ao lado do título da tarefa.",
    },
    {
      title: "Site Genérico",
      img: SiteGenerico,
      video: videoSiteGenerico,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_estava-sumido-mas-ontem-terminei-minha-activity-7155001228714745856-NndG?utm_source=share&utm_medium=member_desktop",
      description: "Este projeto representa uma página institucional desenvolvida para uma instituição educacional fictícia, focada em promover cursos e programas de aprendizado. Utilizando HTML5, CSS3 (com pré-processamento Sass), e JavaScript, a página apresenta um design responsivo e moderno. Os principais elementos incluem um header fixo com botão de chamada para ação, seções estruturadas como Banner, Sobre Nós, FAQ e Comentários de Alunos, além de um footer simples. Destaca-se também a utilização de um modal para captura de informações de interessados, controlado por JavaScript para abrir e fechar dinamicamente em resposta a eventos de clique."
    },
    {
        title: "Portfólio",
        img: Portfolio,
        video: videoPortfolio,
        technologies: ["HTML5", "CSS3", "JavaScript", "React"],
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
        description: "O projeto do Portfólio Pessoal de Wallace Menezes é um exemplo de aplicação front-end desenvolvida com React e Sass, focada em apresentar habilidades técnicas e projetos realizados. Utilizando uma estrutura modular, o portfólio inclui seções como apresentação pessoal, tecnologias dominadas, e uma galeria de projetos destacados. Cada seção é estilizada com CSS modularizado através de Sass, garantindo uma apresentação visual coesa e responsiva em diferentes dispositivos."
    },
    {
      title: "Calculadora",
      img: Calculadora,
      video: calculadora,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Previsão do Tempo",
      img: PrevisaoTempo,
      video: previsaoTempo,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
    },
    {
        title: "Control Finance",
        img: ControlFinance,
        video: videoControlFinance,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_desenvolvimentoweb-euquedesenvolvi-opentowork-activity-7189304280581881857-ikpW?utm_source=share&utm_medium=member_desktop",
        description: "O projeto de Controle Financeiro desenvolvido por Wallace Menezes é uma aplicação front-end construída com React e Sass, focada na gestão de entradas e saídas financeiras. A aplicação permite ao usuário registrar valores, categorizando-os como entradas ou saídas, visualizar um resumo financeiro com a soma dos valores por tipo (todos, entradas, saídas) e deletar entradas individualmente."
    },
    {
        title: "Hamburgueria",
        img: Hamburgueria,
        video: videoHamburgueria,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-react-webdevelopment-activity-7173738305782476800-J3wX?utm_source=share&utm_medium=member_desktop",
        description: "O projeto consiste na implementação de funcionalidades e estilização a um projeto existente, utilizando React para simular um carrinho de compras. Os produtos são obtidos de uma API, com suporte para busca. A estilização é feita com SASS, com foco em responsividade. O gerenciamento do carrinho inclui adicionar/remover itens e calcular totais, com dados persistidos no localStorage. O modal permite abertura/fechamento podendo excluir um item ou todos."
    },
    {
        title: "Kenzie Hub",
        img: KenzieHub,
        video: videoKenzieHub,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-kenziehub-react-activity-7179506916346212353-p0L6?utm_source=share&utm_medium=member_desktop",
      description: "O projeto 'Kenzie Hub' foi desenvolvido utilizando React.js com Sass para criar uma plataforma robusta de cadastro e login. Utilizei o Vite para gerenciar dependências e integrei APIs usando Axios. Organizei o projeto em pastas dedicadas para login, cadastro, área logada e modais para adicionar tecnologias. Implementei duas Context APIs: uma para gerenciar autenticação de usuários e outra para manipular tecnologias. Utilizei estados para gerenciar dados dinâmicos e o React Hook Form para formulários eficientes. A autenticação de rotas foi implementada com React Router DOM, garantindo rotas públicas e privadas. Armazenei dados localmente com localStorage para preservar sessões de login e tecnologias adicionadas entre visitas. O projeto também inclui validação de formulários com schemas para uma experiência de usuário intuitiva."
    },
  ];

  const projectBack = [
      {
          title: "API Rest - Express",
          img: Entrega1,
          video: videoApi1,
          technologies: ["TypeScript", "Node.js", "Express"],
          linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "API Rest - Express And Prisma",
            img: Entrega1,
            video: videoApi2Prisma,
            technologies: ["TypeScript", "Node.js", "Express"],
            linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "API Rest 2 - Express And Prisma",
            img: Entrega1,
            video: videoApi3Prisma,
            technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
            linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "Sistema de Estacionamento",
            img: Entrega1,
            video: videoEstacionamento,
            technologies: ["Dotnet", "CSharp"],
            linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
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
            <button className={styles.prevNextButton} onClick={() => handlePrev('front')}>&#8249;</button>
            <div className={styles.skillsImgProject}>
              <img src={projectFront[currentFrontIndex].img} alt={projectFront[currentFrontIndex].title} />
              <div className={styles.descriptionProjects}>
                <h4 className="title4">{projectFront[currentFrontIndex].title}</h4>
                <div className={styles.iconsProjects}>
                  {projectFront[currentFrontIndex].technologies.includes("HTML5") && <FaHtml5 className={styles.i} />}
                  {projectFront[currentFrontIndex].technologies.includes("CSS3") && <FaCss3Alt className={styles.i} />}
                  {projectFront[currentFrontIndex].technologies.includes("JavaScript") && <IoLogoJavascript className={styles.i} />}
                  {projectFront[currentFrontIndex].technologies.includes("React") && <FaReact className={styles.i} />}
                  {projectFront[currentFrontIndex].technologies.includes("Sass") && <FaSass className={styles.i} />}
                </div>
                <button className={styles.hidden_button} onClick={() => openModal(projectFront[currentFrontIndex])}>Ver mais</button>
              </div>
            </div>
            <button className={styles.prevNextButton} onClick={() => handleNext('front')}>&#8250;</button>
          </div>
        </div>
        <div className={styles.disoriaBackFront}></div>
        <div className={styles.Container_BackEnd}>
          <h3 className="title3">Back-End</h3>
          <div className={styles.divImgProject}>
            <button className={styles.prevNextButton} onClick={() => handlePrev('back')}>&#8249;</button>
            <div className={styles.skillsImgProject}>
              <img src={projectBack[currentBackIndex].img} alt={projectBack[currentBackIndex].title} />
              <div className={styles.descriptionProjects}>
                <h4 className="title4">{projectBack[currentBackIndex].title}</h4>
                <div className={styles.iconsProjects}>
                  {projectBack[currentBackIndex].technologies.includes("TypeScript") && <SiTypescript className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("Node.js") && <FaNodeJs className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("Express") && <SiExpress className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("PostgreSQL") && <SiPostgresql className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("Prisma") && <SiPrisma className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("Dotnet") && <SiDotnet className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("CSharp") && <SiCsharp className={styles.i} />}
                </div>
                <button className={styles.hidden_button} onClick={() => openModal(projectBack[currentBackIndex])}>Ver mais</button>
              </div>
            </div>
            <button className={styles.prevNextButton} onClick={() => handleNext('back')}>&#8250;</button>
          </div>
        </div>
      </div>
      {modalOpen && <ModalProjects projectDetails={selectedProject} onClose={closeModal} />}
    </article>
  );
});

export default MyProjects;