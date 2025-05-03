import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/Particles/particlesComponent";
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

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 3rem;
`;

const Home = ({ toggleSidebar }) => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 0); // Não esquecer de ajustar o tempo para 4500ms
    return () => clearTimeout(timer);
  }, []);

  return showHome ? (
    <>
      <Container>
        <Navbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={false}
        />
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
        <ContainerCards>
          <NewCard
            image="./images/smash-burger/home-smash-burger.png"
            title="Smash Burger"
            description="Aplicação Vue.js de delivery de hamburguers."
          />
          <NewCard
            image="./images/component-login.jpg"
            title="Componente de Login"
            description="Componente de login em React.js."
          />
        </ContainerCards>
      </SectionCards>
    </>
  ) : (
    <ParticlesComponent />
  );
};

Home.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Home;
