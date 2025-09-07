import styled from "styled-components";
import DividerComponent from "../DividerComponent";

const BioContainer = styled.div`
  /* background-color: var(--color-black-light); */
  color: var(--color-white);
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BioTitle = styled.h3`
  font-size: 3rem;
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

  @media screen and (max-width: 1120px) {
    margin-inline: 10rem;
  }

  @media screen and (max-width: 675px) {
    margin-inline: 2rem;
  }
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
        Minha relação com a tecnologia começou ainda na infância, quando lembro de observar meu pai trabalhando em um computador já amarelado pelo tempo, desenhando no AutoCAD. Aquela cena ficou gravada na minha memória e despertou minha curiosidade em entender como máquinas e programas funcionavam.

Anos depois, essa curiosidade se transformou em escolha de carreira. Hoje, sou Desenvolvedor Full-Stack em formação, com experiência em Vue.js, React.js, Quasar Framework, Python, Django e SQL. Já atuei em projetos que vão desde o desenvolvimento de sistemas de gestão até a criação de interfaces responsivas e acessíveis, sempre aplicando boas práticas e explorando o potencial da tecnologia para transformar ideias em soluções reais.

Atualmente, curso Análise e Desenvolvimento de Sistemas na UNIVALI, sigo me especializando em tecnologias modernas e busco oportunidades para aprender, evoluir e contribuir com projetos inovadores.
      </BioText>
    </BioContainer>
  );
};

export default MiniBioCard;
