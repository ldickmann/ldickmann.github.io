import PropTypes from "prop-types";
import styled from "styled-components";
import { memo } from "react";

const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
`;

const ImageCard = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    transform: scale(1.03);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--color-white);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--color-black-light);
`;

const NewCard = memo(({ image, title, description }) => {
  return (
    <ContainerCards>
      <ImageCard image={image} />
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </ContainerCards>
  );
});

NewCard.displayName = "NewCard";

NewCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewCard;
