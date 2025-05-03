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

// export const ContainerImage = styled.div`
//   display: flex;
//   justify-content: end;
//   align-items: center;
//   width: 100%;
//   gap: 4rem;
//   position: relative;

//   img {
//     border-radius: 25%;
//     background: radial-gradient(
//       circle at 0% 50%,
//       rgba(0, 244, 65, 0.5) 0%,
//       rgba(0, 244, 65, 0.3) 100%
//     );
//     padding: 0.4rem;
//     max-width: 360px;
//     height: auto;
//     transition: transform 0.3s ease;
//   }

//   @media (max-width: 650px) {
//     display: none;
//   }

//   @media (max-width: 650px) {
//     display: none;
//   }
// `;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 4rem;
  position: relative;

  .profile-wrapper {
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;
      height: 490px;
      border-radius: 22%;
      border: 4px #00f441 solid;
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      object-fit: cover;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
