import React, { useState, forwardRef, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import ModalProjects from "../../../ModalProjects/ModalProjects";
import Portfolio from "../../../../public/portfolio.svg";
import Calculadora from "../../../../public/calculadora.svg";
import PrevisaoTempo from "../../../../public/previsaoTempo.svg";
import ControlFinance from "../../../../public/controlFinance.svg";
import Hamburgueria from "../../../../public/burguer.svg";
import KenzieHub from "../../../../public/kenzieHub.svg";
import thebook from "../../../../public/the book.jpg";
import Entrega1 from "../../../../public/backEnd.svg";
import videoMyTasks from "../../../../public/myTasks.mp4";
import videoSiteGenerico from "../../../../public/siteGenerico.mp4";
import videoPortfolio from "../../../../public/portfolio.mp4";
import calculadora from "../../../../public/calculadora.mp4";
import previsaoTempo from "../../../../public/previsaoTempo.mp4";
import videoControlFinance from "../../../../public/controlFinance.mp4";
import videoTheBook from "../../../../public/the book.mp4";
import videoHamburgueria from "../../../../public/burguer.mp4";
import videoKenzieHub from "../../../../public/kenzieHub.mp4";
import videoApi1 from "../../../../public/api1.mp4";
import videoSQL from "../../../../public/sql.mp4";
import apiLivros from "../../../../public/apiLivros.mp4";
import videoApi2Prisma from "../../../../public/api2Prisma.mp4";
import videoApi3Prisma from "../../../../public/api3Prisma.mp4";
import videoEstacionamento from "../../../../public/estacionamento.mp4";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiPostgresql, SiPrisma, SiDotnet, SiCsharp } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";




export const MyProjects = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);
  const [currentBackIndex, setCurrentBackIndex] = useState(0);

  const projectFront = [
    {
      title: "Lista de Tarefas",
      img: "/myTasks.svg",
      video: videoMyTasks,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkProjeto: "https://wallace143900.github.io/Lista-de-tarefas/",
      linkGithub: "https://github.com/Wallace143900/Lista-de-tarefas",
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_projetinho-finalizado-onde-tive-muitas-dificuldades-activity-7139004745708478465-Bm5b?utm_source=share&utm_medium=member_desktop",
      description: "O código HTML define uma página web simples para gerenciar uma lista de tarefas. Ele inclui um cabeçalho com um título e um campo de pesquisa. O conteúdo principal é dividido em um formulário para adicionar novas tarefas e uma seção para listar as tarefas existentes. O estilo CSS proporciona uma aparência limpa e organizada para a página. Utiliza cores suaves de fundo e bordas arredondadas para criar uma interface amigável. Os elementos como cabeçalho, formulário e lista de tarefas são estilizados para melhor legibilidade e usabilidade, com botões e campos de entrada formatados para se destacar e serem intuitivos. A função JavaScript manipula dinamicamente a lista de tarefas. Permite adicionar novas tarefas através do formulário e remover tarefas existentes usando botões específicos para cada item da lista. Cada tarefa é categorizada visualmente por marcadores ao lado do título da tarefa.",
    },
    {
      title: "Site Genérico",
      img: "/siteGenerico.svg",
      video: videoSiteGenerico,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkProjeto: "https://wallace143900.github.io/Site-instucional-generico/",
      linkGithub: "https://github.com/Wallace143900/Site-instucional-generico",
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_estava-sumido-mas-ontem-terminei-minha-activity-7155001228714745856-NndG?utm_source=share&utm_medium=member_desktop",
      description: "Este projeto representa uma página institucional desenvolvida para uma instituição educacional fictícia, focada em promover cursos e programas de aprendizado. Utilizando HTML5, CSS3 (com pré-processamento Sass), e JavaScript, a página apresenta um design responsivo e moderno. Os principais elementos incluem um header fixo com botão de chamada para ação, seções estruturadas como Banner, Sobre Nós, FAQ e Comentários de Alunos, além de um footer simples. Destaca-se também a utilização de um modal para captura de informações de interessados, controlado por JavaScript para abrir e fechar dinamicamente em resposta a eventos de clique."
    },
    {
        title: "Portfólio",
        img: Portfolio,
        video: videoPortfolio,
        technologies: ["HTML5", "CSS3", "JavaScript", "React"],
        linkProjeto: "https://m3-s1-entrega-portfolio-template-wallace143900.vercel.app/",
        linkGithub: "https://github.com/Wallace143900/Portfolio-Generico",
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-activity-7173015631720505346-fK3E?utm_source=share&utm_medium=member_desktop",
        description: "O projeto do Portfólio Pessoal de Wallace Menezes é um exemplo de aplicação front-end desenvolvida com React e Sass, focada em apresentar habilidades técnicas e projetos realizados. Utilizando uma estrutura modular, o portfólio inclui seções como apresentação pessoal, tecnologias dominadas, e uma galeria de projetos destacados. Cada seção é estilizada com CSS modularizado através de Sass, garantindo uma apresentação visual coesa e responsiva em diferentes dispositivos."
    },
    {
      title: "The Book",
      img: thebook,
      video: videoTheBook,
      technologies: ["HTML5", "Sass", "JavaScript", "React"],
      linkProjeto: "https://the-books-one.vercel.app/",
      linkGithub: "https://github.com/Wallace143900/The-Books",
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_frontend-reactjs-sass-activity-7228052952253399040-FhyP?utm_source=share&utm_medium=member_desktop",
      description: "Desenvolvi uma aplicação de livraria online utilizando React.js e Sass, com foco em criar uma interface intuitiva e responsiva. O projeto inclui funcionalidades como filtros avançados por categoria e preço, uma pesquisa dinâmica que atualiza a lista de livros em tempo real, e exibição dos preços formatados para a moeda brasileira. A estrutura modular dos componentes garante que o código seja organizado e facilmente escalável."
  },
    {
      title: "Calculadora",
      img: Calculadora,
      video: calculadora,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkProjeto: "https://wallace143900.github.io/Calculadora/",
      linkGithub: "https://github.com/Wallace143900/Calculadora",
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvedorfrontend-desenvolvedorbackend-activity-7191565831653232640-BFVW?utm_source=share&utm_medium=member_desktop",
      description:"O projeto da Calculadora é uma aplicação web desenvolvida utilizando HTML, CSS e JavaScript. O HTML define a estrutura básica, incluindo um título e área de visualização dos números e operações. O CSS é responsável pela estilização, utilizando cores vibrantes, efeitos de sombra e um design responsivo com ajustes para diferentes tamanhos de tela. Utilizando consultas de mídia (@media), o layout da calculadora se adapta para proporcionar uma boa experiência de usuário em dispositivos móveis. O JavaScript implementa a lógica de cálculo, permitindo adicionar, subtrair, multiplicar e dividir números de forma interativa. Botões específicos para limpar, retroceder e calcular são integrados para melhorar a usabilidade. Este projeto não só demonstra habilidades técnicas em desenvolvimento web, mas também em design responsivo e usabilidade."
    },
    {
      title: "Previsão do Tempo",
      img: PrevisaoTempo,
      video: previsaoTempo,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkProjeto: "https://wallace143900.github.io/Previsao-do-tempo/",
      linkGithub: "https://github.com/Wallace143900/Previsao-do-tempo",
      linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvedorfrontend-desenvolvedorbackend-activity-7192708170555736065-URop?utm_source=share&utm_medium=member_desktop",
      description:"O projeto Previsão do Tempo consiste em um aplicativo web simples desenvolvido utilizando HTML, CSS e JavaScript. No HTML, a estrutura básica inclui elementos para entrada de localização, exibição dos dados meteorológicos e uma mensagem de erro caso a localização seja inválida. O CSS foi utilizado para estilizar todos os elementos, garantindo um layout responsivo e agradável visualmente. Utilizando consultas de mídia, como @media, adaptamos o design para diferentes tamanhos de tela, melhorando a experiência do usuário em dispositivos móveis. O JavaScript desempenha um papel crucial ao interagir com a API do OpenWeatherMap, permitindo que o usuário insira uma localização e receba informações atualizadas sobre temperatura, descrição do clima, umidade e velocidade do vento. Quando a localização não é encontrada, uma mensagem de erro é exibida. Este projeto não apenas demonstra habilidades em integração de API e manipulação de dados em tempo real, mas também em design responsivo e usabilidade web."
    },
    {
        title: "Control Finance",
        img: ControlFinance,
        video: videoControlFinance,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        linkProjeto: "https://control-finance-usando-react-js-com-sass.vercel.app/",
        linkGithub: "https://github.com/Wallace143900/Control-Finance-Usando-React.js-com-Sass",
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_desenvolvimentoweb-euquedesenvolvi-opentowork-activity-7189304280581881857-ikpW?utm_source=share&utm_medium=member_desktop",
        description: "O projeto de Controle Financeiro desenvolvido é uma aplicação front-end construída com React e Sass, focada na gestão de entradas e saídas financeiras. A aplicação permite ao usuário registrar valores, categorizando-os como entradas ou saídas, visualizar um resumo financeiro com a soma dos valores por tipo (todos, entradas, saídas) e deletar entradas individualmente."
    },
    {
        title: "Hamburgueria",
        img: Hamburgueria,
        video: videoHamburgueria,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        linkProjeto: "https://react-entrega-s3-template-hamburgueria-wallace143900.vercel.app/",
        linkGithub: "https://github.com/Wallace143900/Hamburgueria-com-React",
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-react-webdevelopment-activity-7173738305782476800-J3wX?utm_source=share&utm_medium=member_desktop",
        description: "O projeto consiste na implementação de funcionalidades e estilização a um projeto existente, utilizando React para simular um carrinho de compras. Os produtos são obtidos de uma API, com suporte para busca. A estilização é feita com SASS, com foco em responsividade. O gerenciamento do carrinho inclui adicionar/remover itens e calcular totais, com dados persistidos no localStorage. O modal permite abertura/fechamento podendo excluir um item ou todos."
    },
    {
        title: "Kenzie Hub",
        img: KenzieHub,
        video: videoKenzieHub,
        technologies: ["HTML5", "JavaScript", "React", "Sass"],
        linkProjeto: "https://react-entrega-kenzie-hub-wallace143900.vercel.app/",
        linkGithub: "https://github.com/Wallace143900/Kenzie-Hub-CRUD-",
        linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-kenziehub-react-activity-7179506916346212353-p0L6?utm_source=share&utm_medium=member_desktop",
      description: "Kenzie Hub é uma plataforma robusta para cadastro e login, utilizando tecnologias modernas como React.js e Sass. A aplicação visa oferecer uma experiência eficiente e intuitiva aos usuários, permitindo o registro e autenticação segura por meio de uma interface amigável. A integração com APIs externas, gerenciada pelo Axios, possibilita a comunicação fluida com serviços externos, enquanto o Vite facilita o gerenciamento de dependências. A estrutura organizada do projeto, com pastas dedicadas para diferentes funcionalidades como login, cadastro e área logada, garante uma manutenção simplificada e escalabilidade. O uso de Context APIs no React permite um gerenciamento eficiente de estados, facilitando a autenticação de usuários e manipulação dinâmica de tecnologias. Além disso, a implementação do React Hook Form e schemas para validação de formulários assegura uma experiência de usuário livre de erros e intuitiva. Com o React Router DOM, são estabelecidas rotas públicas e privadas, garantindo acesso seguro às funcionalidades da plataforma. O armazenamento local com localStorage preserva sessões de login e dados das tecnologias adicionadas, melhorando a continuidade da experiência do usuário entre visitas. Em resumo, o 'Kenzie Hub' busca fornecer uma plataforma completa e eficiente para gerenciamento de usuários e tecnologias, combinando funcionalidades avançadas com uma interface amigável e responsiva."
    },
  ];

  const projectBack = [
      {
          title: "API Rest - Express",
          img: Entrega1,
          video: videoApi1,
          technologies: ["TypeScript", "Node.js", "Express"],
          linkGithub: "https://github.com/Wallace143900/API-Rest-com-Express.ts",
          linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvedorfrontend-desenvolvedorbackend-activity-7188653058703114241-7e4B?utm_source=share&utm_medium=member_desktop",
          description: "Este projeto consiste em uma API simples para gerenciamento de produtos, desenvolvida com Node.js e Express. A aplicação oferece endpoints para criar, listar, atualizar e excluir produtos, utilizando um array em memória para armazenamento dos dados. Cada produto possui um identificador único, nome, preço, data de criação e, opcionalmente, data de atualização. Os endpoints são implementados com funções que manipulam diretamente o array de produtos, garantindo operações básicas de CRUD. O projeto utiliza TypeScript para garantir tipagem estática e interfaces bem definidas para os dados de produto, como nome e preço. Este sistema simples permite a adição, remoção e atualização de produtos, demonstrando conceitos fundamentais de desenvolvimento de APIs RESTful com Node.js e Express."
        },
        {
          title: "Banco de Dados de uma Livraria",
          img: Entrega1,
          video: videoSQL,
          technologies: ["SQL"],
          linkGithub: "https://github.com/Wallace143900/Banco-de-dados-Livraria-",
          linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvimentodesoftware-activity-7199812902063603713-Pq81?utm_source=share&utm_medium=member_desktop",
          description: "Este SQL define a estrutura de um banco de dados com tabelas para autores, informações de contato, categorias e livros. As tabelas são relacionadas por chaves estrangeiras para manter a integridade dos dados. O script inclui operações de `DELETE` para remover registros específicos, `INSERT` para adicionar novos autores, livros e categorias, e `SELECT` para recuperar informações filtradas, como livros de uma categoria específica ou detalhes de um livro e seu autor. Operações de `UPDATE` são usadas para modificar registros existentes, como atualizar o nome de um livro ou mudar o autor de determinados livros."
        },
        {
          title: "API de Livros",
          img: Entrega1,
          video: apiLivros,
          technologies: ["TypeScript", "Node.js", "Express"],
          linkGithub: "https://github.com/Wallace143900/API-de-Livros-",
          linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvedorfrontend-desenvolvedorbackend-activity-7198797911088861186-c5IU?utm_source=share&utm_medium=member_desktop",
          description: "Este código implementa uma API RESTful em Node.js usando o framework Express para gerenciar um banco de dados de livros. A API permite criar, buscar, atualizar e deletar livros. O controlador de livros (`BookController`) define os métodos para lidar com essas operações, utilizando o serviço de livros (`BookService`) que gerencia a lógica de negócio. Os dados dos livros são armazenados em uma estrutura de banco de dados simulada (`booksDatabase`). A validação de dados é feita utilizando `Zod`, com esquemas para criação e atualização de livros. Middleware é usado para validar a existência de livros (`IsBookValid`), evitar duplicatas (`IsBookValidSameName`), e validar o corpo das requisições (`validateBody`). A classe `AppError` define um tipo de erro personalizado para lidar com erros específicos, e `HandleErrors` é um middleware que trata diferentes tipos de erros, retornando respostas apropriadas ao cliente. As rotas são definidas no `bookRouter`, vinculando os controladores e middlewares às rotas HTTP apropriadas. A aplicação é inicializada no `app`, que configura middlewares de segurança (`helmet`) e JSON parsing, e escuta na porta 3000, iniciando a API com uma mensagem de sucesso no console."
        },
        {
            title: "API Rest - Express And Prisma",
            img: Entrega1,
            video: videoApi2Prisma,
            technologies: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
            linkGithub: "https://github.com/Wallace143900/prisma-express",
            linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvedorbackend-api-activity-7210006390076018689-kscR?utm_source=share&utm_medium=member_desktop",
            description: "Este projeto consiste em uma API para gerenciamento de oportunidades e inscrições, construída com Node.js, Express e Prisma ORM. A aplicação oferece endpoints para criar, listar, atualizar e excluir oportunidades, assim como para gerenciar inscrições relacionadas a cada oportunidade. Utilizamos middlewares para validação de entrada de dados e tratamento de erros, garantindo que apenas dados válidos sejam processados e retornando mensagens claras em caso de problemas. A integridade dos dados é mantida através de schemas definidos com Zod, que validam os dados recebidos antes de serem persistidos no banco de dados PostgreSQL. O projeto é estruturado de forma modular, com controllers para gerenciar as requisições HTTP, serviços para encapsular a lógica de negócios e models que definem a estrutura das entidades no banco de dados. Esta arquitetura permite uma fácil extensão e manutenção da aplicação, adequando-se a novos requisitos e escalabilidade futura."
        },
        {
            title: "API Rest 2 - Express And Prisma",
            img: Entrega1,
            video: videoApi3Prisma,
            technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
            linkGithub: "https://github.com/Wallace143900/API_de_controle_de_tarefas_Prisma_Express",
            linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_euquedesenvolvi-desenvolvedorbackend-api-activity-7210006390076018689-kscR?utm_source=share&utm_medium=member_desktop",
            description: "Este projeto é uma aplicação de gerenciamento de tarefas e categorias, desenvolvida com Node.js, Express e Prisma ORM. Utilizamos uma arquitetura de serviço para organizar a lógica do aplicativo, onde cada serviço é responsável por uma entidade específica. O Prisma é usado para gerenciar o banco de dados PostgreSQL, proporcionando uma interface intuitiva e poderosa para realizar operações CRUD. A aplicação inclui a criação, atualização, visualização e exclusão de tarefas e categorias, com validações robustas para garantir a integridade dos dados. Além disso, implementamos middlewares para validação de entrada, manipulação de erros e verificação de IDs válidos, garantindo uma experiência de usuário segura e eficiente. O projeto é estruturado com uma camada de middleware para tratar erros e validações, e utiliza schemas do Zod para garantir que os dados enviados pelo cliente estejam corretos. A aplicação foi desenvolvida com foco na escalabilidade e facilidade de manutenção, e pode ser facilmente estendida para incluir mais funcionalidades no futuro."
        },
        {
            title: "Sistema de Estacionamento",
            img: Entrega1,
            video: videoEstacionamento,
            technologies: ["Dotnet", "CSharp"],
            linkGithub: "https://github.com/Wallace143900/Sistema_de_estacionamento_.Net",
            linkLinkedin: "https://www.linkedin.com/posts/wallace-menezes-505019125_desenvolvimentodesoftware-csharp-dotnet-activity-7209999721619193856-iiqE?utm_source=share&utm_medium=member_desktop",
            description: "Este projeto em C# desenvolve um sistema básico de gerenciamento de estacionamento. A classe `Estacionamento` possui métodos para adicionar, remover e listar veículos estacionados. Ao iniciar o programa, o usuário informa o preço inicial e o preço por hora de estacionamento. O menu oferece opções para cadastrar um veículo (informando a placa), remover um veículo (calculando o preço total com base nas horas estacionadas) e listar todos os veículos atualmente estacionados. O sistema utiliza uma lista em memória para armazenar as placas dos veículos e realiza operações simples de CRUD (Create, Read, Update, Delete)."
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
          <FaAngleLeft className={styles.prevNextButton} onClick={() => handlePrev('front')}/>
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
            <FaAngleRight className={styles.prevNextButton} onClick={() => handleNext('front')}/>
          </div>
        </div>
        <div className={styles.disoriaBackFront}></div>
        <div className={styles.Container_BackEnd}>
          <h3 className="title3">Back-End</h3>
          <div className={styles.divImgProject}>
          <FaAngleLeft className={styles.prevNextButton} onClick={() => handlePrev('back')}/>
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
                  {projectBack[currentBackIndex].technologies.includes("SQL") && <BsFiletypeSql className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("Dotnet") && <SiDotnet className={styles.i} />}
                  {projectBack[currentBackIndex].technologies.includes("CSharp") && <SiCsharp className={styles.i} />}
                </div>
                <button className={styles.hidden_button} onClick={() => openModal(projectBack[currentBackIndex])}>Ver mais</button>
              </div>
            </div>
            <FaAngleRight className={styles.prevNextButton} onClick={() => handleNext('back')}/>
          </div>
        </div>
      </div>
      {modalOpen && <ModalProjects projectDetails={selectedProject} onClose={closeModal} />}
    </article>
  );
});

export default MyProjects;