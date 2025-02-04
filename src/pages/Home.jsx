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
  flex: 0 0 auto;
  margin-top: -4.5rem;
  z-index: 999;
`;

const Home = ({ toggleSidebar }) => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return showHome ? (
    <>
      <Container>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={false} />
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
