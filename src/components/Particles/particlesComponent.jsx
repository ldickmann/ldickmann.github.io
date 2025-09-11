import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./particles.js";
import styled from "styled-components";
import TitleLetter from "../TitleLetter";

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <>
          <Particles
            id="tsparticles"
            particlesLoaded={() => {}}
            options={particlesConfig}
          />
          <TitleContainer>
            <TitleLetter text="Dev Luks" />
          </TitleContainer>
        </>
      )}
    </>
  );
};

export default ParticlesComponent;
