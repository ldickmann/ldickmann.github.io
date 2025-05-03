import styled from "styled-components";
import DividerComponent from "../DividerComponent";

const BioContainer = styled.div`
  background-color: var(--color-black-light);
  color: var(--color-white);
  max-width: 100%;
  height: 50vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  /* @media (max-width: 840px) {
    max-width: 730px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 550px) {
    max-width: 350px;
  } */
`;

const BioTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-green);
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--color-white-medium);
  margin-inline: 20rem;
  margin-top: 4rem;
`;

const ContainerDivider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MiniBioCard = () => {
  return (
    <BioContainer>
      <BioTitle>Sobre Mim</BioTitle>
      <ContainerDivider>
        <DividerComponent
          orientation="horizontal"
          width="60px"
          height="2px"
          variant="solid"
        />
      </ContainerDivider>
      <BioText>
        Acredito que a tecnologia tem o poder de transformar vidas e estou
        comprometido em criar soluções inovadoras que facilitem o cotidiano das
        pessoas. Sempre atento às tendências do mercado, busco oportunidades que
        me permitam aplicar e expandir meu conhecimento, contribuindo para o
        crescimento da área de desenvolvimento de sistemas. Principais
        tecnologias que utilizo nos meus projetos pessoais: Python, JavaScript
        React, Vue.js Bootstrap, Quasar Framework, Styled-Compontes, Node.js,
        Django.
      </BioText>
    </BioContainer>
  );
};

export default MiniBioCard;
