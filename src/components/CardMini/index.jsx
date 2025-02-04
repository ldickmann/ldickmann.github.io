import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageComponent from "../ImageComponent";

const CardSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  border-radius: 8px;
  margin: 2rem 2rem;
  background-color: var(--color-grey);
  color: var(--color-green);
  padding: 0rem 0rem 2rem 0rem;
  box-shadow: rgba(34, 63, 35, 1) 0px 4px 10px 0px,
    rgba(34, 63, 35, 1) 0px 4px 15px 0px;
  overflow: hidden;
  max-width: 450px;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  padding-inline: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const IconLink = styled.a`
  color: white;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: var(--color-green-dark);
    transform: scale(1.1);
  }
`;

const ProjectCard = ({ src, alt, title, githubLink, deployLink }) => (
  <CardContainer>
    <ImageComponent src={src} alt={alt} width="100%" />
    <CardTitle>{title}</CardTitle>
    <IconContainer>
      <IconLink href={githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} />
      </IconLink>
      {deployLink && (
        <IconLink href={deployLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt size={28} />
        </IconLink>
      )}
    </IconContainer>
  </CardContainer>
);

const CardMini = ({ cards }) => {
  return (
    <CardSection>
      {cards.map((card, index) => (
        <ProjectCard key={index} {...card} />
      ))}
    </CardSection>
  );
};

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  deployLink: PropTypes.string,
};

CardMini.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(ProjectCard.propTypes)).isRequired,
};

export default CardMini;
