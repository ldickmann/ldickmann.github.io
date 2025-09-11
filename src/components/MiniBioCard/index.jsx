import styled from "styled-components";
import DividerComponent from "../DividerComponent";
import { useTranslation } from "react-i18next";

const BioContainer = styled.div`
  /* background-color: var(--color-black-light); */
  color: var(--color-white);
  width: 100%;
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
  margin-top: 4rem;

  /* @media screen and (max-width: 1120px) {
    margin-inline: 10rem;
  }

  @media screen and (max-width: 675px) {
    margin-inline: 2rem;
  } */
`;

const ContainerDivider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MiniBioCard = () => {
  const { t } = useTranslation();

  return (
    <BioContainer>
      <BioTitle>{t("sections.about_me")}</BioTitle>
      <ContainerDivider>
        <DividerComponent
          orientation="horizontal"
          width="60px"
          height="2px"
          variant="solid"
        />
      </ContainerDivider>
      <BioText>{t("about.description")}</BioText>
    </BioContainer>
  );
};

export default MiniBioCard;
