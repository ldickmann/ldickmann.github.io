import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import MiniBioCard from "../components/MiniBioCard";
import NewCard from "../components/NewCard";
import DividerComponent from "../components/DividerComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  padding: 3rem;
`;

const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSection = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-green);
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-white);
  margin-top: 3rem;
  width: 100%;
  text-align: center;
`;

const CategoryDescription = styled.p`
  font-size: 0.8em;
  color: var(--color-white);
  text-align: center;
  max-width: 800px;
  margin: 1rem auto 0;
  line-height: 1.6;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Banner />
        <Overlay>
          <Card />
        </Overlay>
      </Container>
      <MiniBioCard />
      <SectionCards>
        <TitleSection>Portfólio</TitleSection>
        <DividerComponent
          orientation="horizontal"
          width="60px"
          height="2px"
          variant="solid"
        />

        <CategoryTitle>Projetos Front-end</CategoryTitle>
        <CategoryDescription>
          Aplicações modernas focadas na experiência do usuário, desenvolvidas
          com tecnologias como React.js e Vue.js. Cada projeto demonstra
          diferentes aspectos do desenvolvimento front-end, desde interfaces
          responsivas até componentes reutilizáveis.
        </CategoryDescription>
        <ContainerCards>
          <NewCard
            image="/images/smash-burger/home-smash-burger.png"
            alt="Smash Burger | Front End App - Vue.js"
            title="Smash Burger"
            description="Simulador de delivery de hambúrgueres feito com Vue.js, focado em uma experiência de usuário fluida e interativa."
            repoUrl="https://github.com/ldickmann/smash-burguer"
          />
          <NewCard
            image="/images/component-login.jpg"
            alt="Componente de Login"
            title="Componente de Login"
            description="Componente de login reutilizável construído com React.js, demonstrando a aplicação de formulários e validação."
            repoUrl="https://github.com/ldickmann/login-page"
            demoUrl="https://login-page-luks-dev.vercel.app/"
          />
          <NewCard
            image="/images/maos-de-tesoura.png"
            alt="Aplicação Mãos de Tesoura - Vue.js"
            title="Mãos de Tesoura - Vue.js"
            description="Aplicação Front-end de agendamento de serviços e landing page."
            repoUrl="https://github.com/ldickmann/maos-de-tesoura"
            demoUrl="https://ldickmann.github.io/maos-de-tesoura/"
          />
        </ContainerCards>

        <CategoryTitle>Projetos Acadêmicos</CategoryTitle>
        <CategoryDescription>
          Projetos desenvolvidos durante a graduação em Análise e
          Desenvolvimento de Sistemas, representando trabalhos colaborativos e
          aplicação prática dos conhecimentos adquiridos no curso.
        </CategoryDescription>
        <ContainerCards>
          <NewCard
            image="/images/how-arquitetura.png"
            alt="How Arquitetura - HTML & CSS"
            title="Projeto Integrador ADS"
            description="Projeto de um site institucional para uma arquiteta desenvolvido em grupo durante o curso de Análise e Desenvolvimento de Sistemas."
            repoUrl="https://github.com/MALLG-Sistemas/hands-on-work-v"
            demoUrl="https://mallg-sistemas.github.io/hands-on-work-v/"
          />
        </ContainerCards>

        <CategoryTitle>Projetos Full-stack</CategoryTitle>
        <CategoryDescription>
          Aplicações completas que integram front-end e back-end, demonstrando
          competências em desenvolvimento web integral. Projetos que abrangem
          desde a interface do usuário até a gestão de dados e lógica de
          negócio.
        </CategoryDescription>
        <ContainerCards>
          <NewCard
            image="/images/djangoSGE.png"
            alt="Django SGE | Full Stack App - Django, Django REST & Bootstrap"
            title="Django SGE - Django"
            description="Sistema de Gerenciamento de Estoque completo com Django, incluindo controle de produtos, categorias e fornecedores."
            repoUrl="https://github.com/ldickmann/djangoSGE"
          />
        </ContainerCards>
      </SectionCards>
    </>
  );
};

export default Home;
