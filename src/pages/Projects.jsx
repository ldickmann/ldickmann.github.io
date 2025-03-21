import { useState, useEffect } from "react";
import styled from "styled-components";
import CardMini from "../components/CardMini";

const ProjectsStyles = styled.section`
  background-color: var(--color-black);
`;

const useResponsiveCards = () => {
  const [cardsPerGroup, setCardsPerGroup] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 551) {
        setCardsPerGroup(2);
      } else if (width <= 900) {
        setCardsPerGroup(2);
      } else {
        setCardsPerGroup(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return cardsPerGroup;
};

const divideIntoGroups = (array, groupSize) => {
  const groups = [];
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize));
  }
  return groups;
};

const Projects = () => {
  const cardsPerGroup = useResponsiveCards();

  const cards = [
    {
      src: "./images/smash-burger/smash-burger.png",
      alt: "Smash Burgers | Front End App - Vue.js",
      title: "Smash Burgers | Front-end App - Vue.js",
      width: "560px",
      height: "280px",
      gallery: [
        "./images/smash-burger/smash-burger.png",
        "./images/smash-burger/home-smash-burger.png",
        "./images/smash-burger/cardapio-smash-burger.png",
        "./images/smash-burger/modal-add-smash-burger.png",
      ],
      description:
        "Um aplicativo web em Vue.js para delivery de hambúrgueres artesanais, permitindo aos clientes navegar pelo cardápio, fazer pedidos e realizar pagamentos online.",
      repoUrl: "https://github.com/ldickmann/smash-burguer",
    },
    {
      src: "./images/login-page.png",
      alt: "Forms Login",
      title: "Forms Login | React",
      width: "500px",
      description: "Aplicação de formulário de login em React.",
      repoUrl: "https://github.com/ldickmann/login-page",
      deployUrl: "https://login-page-luks-dev.vercel.app/",
    },
    {
      src: "./images/djangoSGE.png",
      alt: "Django SGE | Full Stack App - Django, Django REST & Bootstrap",
      title: "Django SGE | Sistema de Gerenciamento de Estoque",
      width: "500px",
      description:
        "Um sistema completo para controle de estoque, gestão de produtos e movimentações, desenvolvido com Django, Django REST Framework e Bootstrap.",
      repoUrl: "https://github.com/ldickmann/djangoSGE",
    },
    {
      src: "./images/pong.png",
      alt: "Pong Game",
      title: "Projeto Pong Game | Javascript",
      width: "450px",
      height: "240px",
      description:
        "Jogo Pong desenvolvido com HTML, CSS e JavaScript, com suporte a multiplayer local.",
      repoUrl:
        "https://github.com/ldickmann/FrontEndG7-ONE/tree/main/ChatGPTeJS",
      deployUrl: "https://ldickmann.github.io/FrontEndG7-ONE/ChatGPTeJS/",
    },
    {
      src: "./images/ola-mundo.png",
      alt: "Ola mundo - React App",
      title: "Aplicação Olá Mundo | Front-end App - React",
      width: "380px",
      height: "250px",
      description:
        "Aplicação React - Projeto de Blog desenvolvido ao decorrer do Bootcamp Oracle ONE.",
      repoUrl: "https://github.com/ldickmann/ReactG7-ONE/tree/main/ola-mundo",
      deployUrl: "https://react-ola-mundo-one.vercel.app/",
    },
    {
      src: "./images/meteora-app.png",
      alt: "Meteora App | Front End App",
      title: "Aplicação Meteora | Front-end App - React",
      width: "320px",
      height: "200px",
      description:
        "Aplicação React - Projeto de e-commerce desenvolvido ao decorrer do Bootcamp Oracle ONE.",
      repoUrl:
        "https://github.com/ldickmann/ReactG7-ONE/tree/main/react-context-api",
      deployUrl: "https://react-context-api-meteora.vercel.app/",
    },
    {
      src: "./images/alura-flix-app.png",
      alt: "AluraFlix | Front-end App - React",
      title: "Aplicação AluraFlix | Front-end App - React",
      width: "320px",
      height: "260px",
      description:
        "Aplicação React - Projeto de streaming de vídeos desenvolvido ao decorrer do Bootcamp Oracle ONE.",
      repoUrl: "https://github.com/ldickmann/AluraFlix-ONE",
      deployUrl: "https://alura-flix-one-blond.vercel.app/",
    },
    {
      src: "./images/space-app.png",
      alt: "Space APP",
      title: "Projeto Space | Front-end App - React",
      width: "380px",
      height: "200px",
      description:
        "Aplicação React - Projeto de blog de notícias espaciais desenvolvido ao decorrer do Bootcamp Oracle ONE.",
      repoUrl: "https://github.com/ldickmann/ReactG7-ONE/tree/main/space-app",
      deployUrl: "https://react-space-app-one.vercel.app/",
    },
    {
      src: "./images/luk-flix-app.png",
      alt: "LukFlix App",
      title: "Projeto LukFlix | Front-end App - Django",
      width: "350px",
      height: "200px",
    },
    {
      src: "./images/flix-API.png",
      alt: "Flix API",
      title: "FlixAPI | Back-end API - Django REST Framework",
      width: "280px",
      height: "240px",
      description:
        "API RESTful desenvolvida com Django REST Framework para fornecer dados para o projeto LukFlix.",
      repoUrl: "https://github.com/ldickmann/FlixApi",
    },
    {
      src: "./images/django-cars-app.png",
      alt: "Django Cars App",
      title: "Aplicação Front-end Django Cars | Django e Python",
      width: "280px",
      height: "260px",
      description:
        "Aplicação web em Django para cadastro e listagem de veículos.",
      repoUrl: "https://github.com/ldickmann/djangoCars",
    },
  ];

  const cardGroups = divideIntoGroups(cards, cardsPerGroup);

  return (
    <ProjectsStyles>
      {cardGroups.map((group, index) => (
        <CardMini
          key={index}
          cards={group}
        />
      ))}
    </ProjectsStyles>
  );
};

export default Projects;
