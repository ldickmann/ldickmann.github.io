import styled from "styled-components";
import { useTranslation } from "react-i18next";
import NewCard from "../components/NewCard";
import DividerComponent from "../components/DividerComponent";
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  width: 100%;
  box-sizing: border-box;
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
  width: 100%;
  max-width: 1200px;
`;

const Projects = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navbar />
      <SectionCards>
        <TitleSection>{t("projects.title")}</TitleSection>
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
            title={t("projects.items.smash_burger.title")}
            description={t("projects.items.smash_burger.description")}
            repoUrl="https://github.com/ldickmann/smash-burguer"
          />
          <NewCard
            image="/images/component-login.jpg"
            alt="Componente de Login"
            title={t("projects.items.login_component.title")}
            description={t("projects.items.login_component.description")}
            repoUrl="https://github.com/ldickmann/login-page"
            demoUrl="https://login-page-luks-dev.vercel.app/"
          />
          <NewCard
            image="/images/djangoSGE.png"
            alt="Django SGE | Full Stack App - Django, Django REST & Bootstrap"
            title={t("projects.items.django_sge.title")}
            description={t("projects.items.django_sge.description")}
            repoUrl="https://github.com/ldickmann/djangoSGE"
          />
          <NewCard
            image="/images/maos-de-tesoura.png"
            alt="Aplicação Mãos de Tesoura - Vue.js"
            title={t("projects.items.maos_de_tesoura.title")}
            description={t("projects.items.maos_de_tesoura.description")}
            repoUrl="https://github.com/ldickmann/maos-de-tesoura"
            demoUrl="https://ldickmann.github.io/maos-de-tesoura/"
          />
          <NewCard
            image="/images/django-cars-app.png"
            alt="Django Cars App - Django"
            title={t("projects.items.django_cars.title")}
            description={t("projects.items.django_cars.description")}
            repoUrl="https://github.com/ldickmann/djangoCars"
          />
        </ContainerCards>
      </SectionCards>
    </PageContainer>
  );
};

export default Projects;
