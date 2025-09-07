import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  gap: calc(100% / 4);

  @media screen and (max-width: 1200px) {
    gap: 2rem;
    padding: 1.5rem;
  }

  @media screen and (max-width: 850px) {
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 769px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    min-height: auto;
  }

  @media (max-width: 430px) {
    padding: 0.5rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  max-width: 600px;

  @media (max-width: 769px) {
    align-items: center;
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 769px) {
    align-items: center;
  }
`;

export const Header = styled.h1`
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 769px) {
    justify-content: center;
  }
`;

export const TitleFooter = styled.h1`
  color: var(--color-white);
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-green);
  border-radius: 20px;
  gap: 1rem;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  width: fit-content;
  min-width: 4rem;

  @media (max-width: 769px) {
    flex-direction: row;
    width: auto;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 430px) {
    margin-top: 1rem;
  }
`;

/* Acima de 1670px o espaço entre o title e a imagem é muito grande, da sensação de faltar algo */

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 500px;

  .profile-wrapper {
    position: relative;
    display: inline-block;
    max-width: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;
      height: 490px;
      border-radius: 23.5%;
      border: 4px #00f441 solid;
      z-index: 0;

      @media screen and (max-width: 1200px) {
        width: 280px;
        height: 380px;
      }

      @media screen and (max-width: 850px) {
        width: 250px;
        height: 350px;
      }
    }

    img {
      position: relative;
      z-index: 1;
      object-fit: cover;
      width: 100%;
      height: auto;
      max-width: 300px;

      @media screen and (max-width: 1200px) {
        max-width: 240px;
      }

      @media screen and (max-width: 850px) {
        max-width: 220px;
      }
    }
  }

  @media screen and (max-width: 769px) {
    max-width: 300px;
    margin-top: 1rem;
  }
`;
