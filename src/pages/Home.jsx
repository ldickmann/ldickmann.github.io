import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import MiniBioCard from "../components/MiniBioCard";
import NewCard from "../components/NewCard";
import DividerComponent from "../components/DividerComponent";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Overlay = styled.div`
  padding: 3rem 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
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
  width: 100%;
  max-width: 1200px;
`;

const Home = () => {
  const { t } = useTranslation();

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
        <TitleSection>{t("sections.portfolio")}</TitleSection>
        <DividerComponent
          orientation="horizontal"
          width="60px"
          height="2px"
          variant="solid"
        />

        <CategoryTitle>{t("projects.categories.frontend.title")}</CategoryTitle>
        <CategoryDescription>
          {t("projects.categories.frontend.description")}
        </CategoryDescription>
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
            image="/images/maos-de-tesoura.png"
            alt="Aplicação Mãos de Tesoura - Vue.js"
            title={t("projects.items.maos_de_tesoura.title")}
            description={t("projects.items.maos_de_tesoura.description")}
            repoUrl="https://github.com/ldickmann/maos-de-tesoura"
            demoUrl="https://ldickmann.github.io/maos-de-tesoura/"
          />
        </ContainerCards>

        <CategoryTitle>{t("projects.categories.academic.title")}</CategoryTitle>
        <CategoryDescription>
          {t("projects.categories.academic.description")}
        </CategoryDescription>
        <ContainerCards>
          <NewCard
            image="/images/how-arquitetura.png"
            alt="How Arquitetura - HTML & CSS"
            title={t("projects.items.ads_integrator.title")}
            description={t("projects.items.ads_integrator.description")}
            repoUrl="https://github.com/MALLG-Sistemas/hands-on-work-v"
            demoUrl="https://mallg-sistemas.github.io/hands-on-work-v/"
          />
        </ContainerCards>

        <CategoryTitle>
          {t("projects.categories.fullstack.title")}
        </CategoryTitle>
        <CategoryDescription>
          {t("projects.categories.fullstack.description")}
        </CategoryDescription>
        <ContainerCards>
          <NewCard
            image="/images/djangoSGE.png"
            alt="Django SGE | Full Stack App - Django, Django REST & Bootstrap"
            title={t("projects.items.django_sge.title")}
            description={t("projects.items.django_sge.description")}
            repoUrl="https://github.com/ldickmann/djangoSGE"
          />
        </ContainerCards>
      </SectionCards>
    </>
  );
};

export default Home;
