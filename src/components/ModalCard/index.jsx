import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageComponent from "../ImageComponent";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-beige);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-black);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  max-height: 550px;
  margin: auto;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-black);
`;

const ImageWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  color: var(--color-white);
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.5;
`;

const LinksWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const ModalCard = ({ card, onClose }) => {
  const images =
    card.gallery && Array.isArray(card.gallery) && card.gallery.length > 0
      ? card.gallery
      : [card.src];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <OverlayBackground>
      <ModalWrapper>
        <Header>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </Header>
        <Content>
          <NavigationButton onClick={handlePrev}>
            <FaArrowLeft />
          </NavigationButton>
          <ImageWrapper>
            <ImageComponent
              src={images[currentIndex]}
              alt={card.alt}
              width="100%"
            />
          </ImageWrapper>
          <NavigationButton onClick={handleNext}>
            <FaArrowRight />
          </NavigationButton>
          <DetailsWrapper>
            <Title>{card.title}</Title>
            <Description>
              {card.description ||
                "Descrição do projeto. Mais detalhes sobre o projeto podem ser adicionados aqui."}
            </Description>
            <LinksWrapper>
              {card.repoUrl && (
                <a
                  href={card.repoUrl}
                  target="_blank"
                  rel="noreferrer">
                  <FaGithub
                    size={24}
                    color="var(--color-black)"
                  />
                </a>
              )}
              {card.deployUrl && (
                <a
                  href={card.deployUrl}
                  target="_blank"
                  rel="noreferrer">
                  <FaExternalLinkAlt
                    size={24}
                    color="var(--color-black)"
                  />
                </a>
              )}
            </LinksWrapper>
          </DetailsWrapper>
        </Content>
      </ModalWrapper>
    </OverlayBackground>
  );
};

ModalCard.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    gallery: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    description: PropTypes.string,
    repoUrl: PropTypes.string,
    deployUrl: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalCard;
