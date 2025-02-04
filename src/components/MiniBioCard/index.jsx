import styled from "styled-components";

const BioContainer = styled.div`
  background-color: var(--color-black-light);
  color: var(--color-white);
  padding: 1.25rem;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 20px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 840px) {
    max-width: 730px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 550px) {
    max-width: 350px;
  }
`;

const BioTitle = styled.h3`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--color-green);
`;

const BioText = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: var(--color-white-medium);
`;

const MiniBioCard = () => {
  return (
    <BioContainer>
      <BioTitle>Sobre Mim</BioTitle>
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
