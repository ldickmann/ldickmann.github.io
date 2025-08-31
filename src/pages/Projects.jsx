import styled from "styled-components";
import NewCard from "../components/NewCard";
import DividerComponent from "../components/DividerComponent";
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const TitleSection = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-green);
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

const Projects = () => {
  return (
    <PageContainer>
      <Navbar />
      <SectionCards>
        <TitleSection>Projetos</TitleSection>
        <DividerComponent
          orientation="horizontal"
          width="60px"
          height="2px"
          variant="solid"
        />
        <ContainerCards>
          <NewCard
            image="/images/smash-burger/home-smash-burger.png"
            alt="Smash Burger | Front End App - Vue.js"
            title="Smash Burger"
            description="Aplicação Vue.js de delivery de hamburguers."
            repoUrl="https://github.com/ldickmann/smash-burguer"
          />
          <NewCard
            image="/images/component-login.jpg"
            alt="Componente de Login"
            title="Componente de Login"
            description="Componente de login em React.js."
            repoUrl="https://github.com/ldickmann/login-page"
            demoUrl="https://login-page-luks-dev.vercel.app/"
          />
          <NewCard
            image="/images/djangoSGE.png"
            alt="Django SGE | Full Stack App - Django, Django REST & Bootstrap"
            title="Django SGE - Django"
            description="Aplicação Full-stack de Gerenciamento de Estoque"
            repoUrl="https://github.com/ldickmann/djangoSGE"
          />
          <NewCard
            image="/images/meteora-app.png"
            alt="Meteora Front End App - React.js"
            title="Meteora - React.js"
            description="Aplicação Front End de gerenciamento de tarefas."
            repoUrl="https://github.com/ldickmann/ReactG7-ONE/tree/main/react-context-api"
            demoUrl="https://react-context-api-meteora.vercel.app/"
          />
          <NewCard
            image="/images/django-cars-app.png"
            alt="Django Cars App - Django"
            title="Django Cars - Django"
            description="Aplicação Full Stack de gerenciamento de carros."
            repoUrl="https://github.com/ldickmann/djangoCars"
          />
        </ContainerCards>
      </SectionCards>
    </PageContainer>
  );
};

export default Projects;
