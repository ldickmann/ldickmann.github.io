import { useState, useEffect } from "react";
import styled from "styled-components";
import CardMini from "../components/CardMini";

const ProjectsStyles = styled.section`
  background-color: var(--color-black);
`;

// Custom hook for responsive breakpoints
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
      src: "./images/djangoSGE.png",
      alt: "Django SGE | Full Stack App - Django, Django REST & Bootstrap",
      title: "Django SGE | Sistema de Gerenciamento de Estoque",
      githubLink: "https://github.com/ldickmann/djangoSGE",
    },
    {
      src: "./images/luk-flix-app.png",
      alt: "LukFlix App",
      title: "Projeto LukFlix | Front-end App - Django",
      githubLink: "https://github.com/ldickmann/LukFlix-App",
    },
    {
      src: "./images/login-page.png",
      alt: "Forms Login",
      title: "Forms Login | React",
      githubLink: "https://github.com/ldickmann/login-page",
      deployLink: "https://login-page-luks-dev.vercel.app/",
    },
    {
      src: "./images/meteora-app.png",
      alt: "Meteora App | Front End App",
      title: "Aplicação Meteora | Front-end App - React",
      githubLink:
        "https://github.com/ldickmann/ReactG7-ONE/tree/main/react-context-api",
      deployLink: "https://react-context-api-meteora.vercel.app/",
    },
    {
      src: "./images/ola-mundo.png",
      alt: "Ola mundo - React App",
      title: "Aplicação Olá Mundo | Front-end App - React",
      githubLink:
        "https://github.com/ldickmann/ReactG7-ONE/tree/main/ola-mundo",
      deployLink: "https://react-ola-mundo-one.vercel.app/",
    },
    {
      src: "./images/flix-API.png",
      alt: "Flix API",
      title: "FlixAPI | Back-end API - Django REST Framework",
      githubLink: "https://github.com/ldickmann/FlixApi",
    },
    {
      src: "./images/space-app.png",
      alt: "Space APP",
      title: "Projeto Space | Front-end App - React",
      githubLink:
        "https://github.com/ldickmann/ReactG7-ONE/tree/main/space-app",
      deployLink: "https://react-space-app-one.vercel.app/",
    },
    {
      src: "./images/django-cars-app.png",
      alt: "Django Cars App",
      title: "Aplicação Front-end Django Cars | Django e Python",
      githubLink: "https://github.com/ldickmann/djangoCars",
    },
    {
      src: "./images/pong.png",
      alt: "Pong Game",
      title: "Projeto Pong Game | Javascript",
      githubLink:
        "https://github.com/ldickmann/FrontEndG7-ONE/tree/main/ChatGPTeJS",
      deployLink: "https://ldickmann.github.io/FrontEndG7-ONE/ChatGPTeJS/",
    },
    {
      src: "./images/alura-flix-app.png",
      alt: "AluraFlix | Front-end App - React",
      title: "Aplicação AluraFlix | Front-end App - React",
      githubLink: "https://github.com/ldickmann/AluraFlix-ONE",
      deployLink: "https://alura-flix-one-blond.vercel.app/",
    },
  ];

  const cardGroups = divideIntoGroups(cards, cardsPerGroup);

  return (
    <ProjectsStyles>
      {cardGroups.map((group, index) => (
        <CardMini key={index} cards={group} />
      ))}
    </ProjectsStyles>
  );
};

export default Projects;
