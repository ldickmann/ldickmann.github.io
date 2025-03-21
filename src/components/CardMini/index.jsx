import { useState, memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageComponent from "../ImageComponent";
import ModalCard from "../ModalCard";

const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  color: var(--color-green);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  max-width: ${({ width }) => width || "450px"};
  max-height: ${({ height }) => height || "300px"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 20px rgba(0, 95, 0, 0.5);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const CardTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  border-radius: 4px;
`;

const ProjectCard = memo(
  ({
    src,
    alt,
    title,
    width,
    height,
    description,
    gallery,
    repoUrl,
    deployUrl,
    onSelect,
  }) => {
    const handleClick = () => {
      // Envia os dados necessários para o ModalCard
      onSelect({
        src,
        alt,
        title,
        width,
        height,
        description,
        gallery,
        repoUrl,
        deployUrl,
      });
    };

    return (
      <CardContainer
        width={width}
        height={height}
        onClick={handleClick}>
        <ImageComponent
          src={src}
          alt={alt}
          width="100%"
          height="100%"
        />
        <Overlay className="overlay">
          <CardTitle>{title}</CardTitle>
        </Overlay>
      </CardContainer>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  description: PropTypes.string,
  gallery: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  repoUrl: PropTypes.string,
  deployUrl: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

const CardMini = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCloseModal = () => setSelectedCard(null);

  return (
    <>
      <CardSection>
        {cards.map((card, index) => (
          <ProjectCard
            key={index}
            {...card}
            onSelect={setSelectedCard}
          />
        ))}
      </CardSection>
      {selectedCard && (
        <ModalCard
          card={selectedCard}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

CardMini.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      width: PropTypes.string,
      height: PropTypes.string,
      description: PropTypes.string,
      gallery: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      repoUrl: PropTypes.string,
      deployUrl: PropTypes.string,
    })
  ).isRequired,
};

export default memo(CardMini);
