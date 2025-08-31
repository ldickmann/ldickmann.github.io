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

        <CategoryTitle>Projetos Full-stack</CategoryTitle>
        <ContainerCards>
          <NewCard
            image="/images/djangoSGE.png"
            alt="Django SGE | Full Stack App - Django, Django REST & Bootstrap"
            title="Django SGE - Django"
            description="Sistema de Gerenciamento de Estoque completo com Django, incluindo controle de produtos, categorias e fornecedores."
            repoUrl="https://github.com/ldickmann/djangoSGE"
          />
          <NewCard
            image="/images/django-cars-app.png"
            alt="Django Cars App - Django"
            title="Django Cars - Django"
            description="Aplicação para gerenciamento de concessionária de carros, permitindo cadastro e consulta de veículos."
            repoUrl="https://github.com/ldickmann/djangoCars"
          />
        </ContainerCards>

        <CategoryTitle>Projetos Front-end</CategoryTitle>
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
            image="/images/meteora-app.png"
            alt="Meteora Front End App - React.js"
            title="Meteora - React.js"
            description="Aplicação de e-commerce para a loja fictícia Meteora, utilizando React Context API para gerenciamento de estado."
            repoUrl="https://github.com/ldickmann/ReactG7-ONE/tree/main/react-context-api"
            demoUrl="https://react-context-api-meteora.vercel.app/"
          />
        </ContainerCards>
      </SectionCards>
    </>
  );
};

export default Home;
