import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/Particles/particlesComponent";
import MiniBioCard from "../components/MiniBioCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  /* position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex: 0 0 auto;
  z-index: 999;
  width: 90%; */

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
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
    </>
  ) : (
    <ParticlesComponent />
  );
};

Home.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Home;
