import { FaLinkedin, FaGithub } from "react-icons/fa";
import ImageComponent from "../ImageComponent";
import Title from "../Title";
import {
  BannerContainer,
  ContainerText,
  HeaderContainer,
  Header,
  FooterContainer,
  TitleFooter,
  ContainerSocialMedia,
  ContainerImage,
  Divider,
} from "./Banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <ContainerText>
        <HeaderContainer>
          <Header>Hi there! I&apos;m</Header>
          <Title text={"Lucas Dickmann"} />
        </HeaderContainer>
        <FooterContainer>
          <TitleFooter>Web Developer</TitleFooter>
        </FooterContainer>
        <ContainerSocialMedia>
          <a
            href="https://www.linkedin.com/in/lucas-dickmann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color={"#000000"} />
          </a>
          <a
            href="https://www.github.com/ldickmann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color={"#000000"} />
          </a>
        </ContainerSocialMedia>
      </ContainerText>
      <ContainerImage>
        <ImageComponent src={"./images/perfil.png"} alt={"Lucas Dickmann"} />
        <Divider />
      </ContainerImage>
    </BannerContainer>
  );
};

export default Banner;
