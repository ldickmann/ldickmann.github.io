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
} from "./Banner.styles";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <BannerContainer>
      <ContainerText>
        <HeaderContainer>
          <Header>{t("hi_there")}</Header>
          <Title text={"Lucas Dickmann"} />
        </HeaderContainer>
        <FooterContainer>
          <TitleFooter>{t("web_developer")}</TitleFooter>
        </FooterContainer>
        <ContainerSocialMedia>
          <a
            href="https://www.linkedin.com/in/lucas-dickmann"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin
              size={30}
              color={"#000000"}
            />
          </a>
          <a
            href="https://www.github.com/ldickmann"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub
              size={30}
              color={"#000000"}
            />
          </a>
        </ContainerSocialMedia>
      </ContainerText>
      <ContainerImage>
        <div className="profile-wrapper">
          <ImageComponent
            src={"./images/perfil.png"}
            alt={"Lucas E. Dickmann"}
            width={"100%"}
            height={"450px"}
          />
        </div>
      </ContainerImage>
    </BannerContainer>
  );
};

export default Banner;
