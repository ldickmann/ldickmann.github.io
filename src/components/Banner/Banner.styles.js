import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  height: 70vh;
  padding: 0rem 10rem 6rem 10rem;

  @media (max-width: 769px) {
    padding-inline: 2rem;
  }

  @media (max-width: 430px) {
    padding: 0rem 1rem;
    height: 100vh;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const TitleFooter = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-green);
  border-radius: 20px;
  gap: 1rem;
  padding: 2rem 0rem 2rem 0rem;
  margin-top: 3rem;
  width: 4rem;

  @media (max-width: 430px) {
    margin-top: 1rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 4rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 506px;
  background-color: var(--color-green);
`;
