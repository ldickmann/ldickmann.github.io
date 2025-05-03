import styled from "styled-components";
import PropTypes from "prop-types";

const CardSection = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  .row {
    align-items: center;
    height: 100vh;
  }
`;

const transitionTime = "2.3s";

const Card = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin: 0.625rem 0;
  transition: ease all ${transitionTime};
  perspective: 1300px;
  max-width: ${({ width }) => width || "450px"};
  max-height: ${({ height }) => height || "300px"};

  &:hover .cover {
    transform: rotateX(0deg) rotateY(-180deg);
  }

  &:hover .cover:before {
    transform: translateZ(30px);
  }

  &:hover .cover:after {
    background-color: black;
  }

  &:hover .cover h1 {
    transform: translateZ(100px);
  }

  &:hover .card-back {
    transform: translateZ(0px) rotateY(0deg);
  }
`;

const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: ease all ${transitionTime};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    border: 4px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    z-index: 2;
    transition: ease all ${transitionTime};
    transform-style: preserve-3d;
    transform: translateZ(0px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    transition: ease all 1.3s;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const CardTitle = styled.h1`
  font-weight: 600;
  position: absolute;
  top: 40px;
  left: 40px;
  font-family: "Black Ops One", Arial, sans-serif;
  color: white;
  transform-style: preserve-3d;
  transition: ease all ${transitionTime};
  z-index: 3;
  font-size: 1.3rem;
  transform: translateZ(0px);
`;

const CardBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #0b0f08;
  transition: ease all ${transitionTime};
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backface-visibility: hidden;

  a {
    transform-style: preserve-3d;
    transition: ease transform ${transitionTime}, ease background 0.5s;
    transform: rotateY(0deg);
    border: 1px solid var(--color-white);
    font-weight: 200;
    font-size: 1.2rem;
    color: var(--color-white);
    padding: 14px 32px;
    outline: none;
    text-decoration: none;
    backface-visibility: hidden;

    &:hover {
      background-color: var(--color-white);
      color: #0b0f08;
    }
  }
`;

// Ajustar para poder passar o parametro description
const ProjectCard = ({
  src,
  alt,
  title,
  width,
  height,
  deployUrl,
  repoUrl,
}) => {
  return (
    <Card
      width={width}
      height={height}
      className="card">
      <Cover className="cover">
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <CardTitle>{title}</CardTitle>
      </Cover>
      {(repoUrl || deployUrl) && (
        <CardBack className="card-back">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer">
              Repositório
            </a>
          )}
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noreferrer">
              Ver Projeto
            </a>
          )}
        </CardBack>
      )}
    </Card>
  );
};

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  deployUrl: PropTypes.string,
  repoUrl: PropTypes.string,
};

const CardMini = ({ cards }) => {
  return (
    <>
      <CardSection>
        {cards.map((card, index) => (
          <ProjectCard
            key={index}
            {...card}
          />
        ))}
      </CardSection>
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
      deployUrl: PropTypes.string,
      repoUrl: PropTypes.string,
    })
  ).isRequired,
};

export default CardMini;
