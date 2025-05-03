import styled from "styled-components";
import {
  FaPython,
  FaJs,
  FaVuejs,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiQuasar } from "react-icons/si";
import Carousel from "../Carousel";

const CardStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 2rem 2rem;
  background-color: var(--color-beige);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.723);

  @media (max-width: 769px) {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  display: none;
  background-color: var(--color-beige);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.723);
  width: 80%;
  gap: 0rem;
  margin: 0 auto;
  padding: 2rem 0rem 2rem 0rem;

  @media (max-width: 769px) {
    display: block;
  }
`;

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1277px) {
    gap: 1rem;
  }
`;

export const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icons = [
  { component: FaPython, size: 70, color: "white" },
  { component: FaJs, size: 70, color: "white" },
  { component: FaVuejs, size: 70, color: "white" },
  { component: FaReact, size: 70, color: "white" },
  { component: DiDjango, size: 70, color: "white" },
  { component: SiQuasar, size: 70, color: "white" },
  { component: FaSass, size: 70, color: "white" },
  { component: FaBootstrap, size: 70, color: "white" },
];

const Card = () => {
  return (
    <>
      <CardStyles>
        <IconList>
          {icons.map((icon, index) => (
            <IconItem key={index}>
              <icon.component
                size={icon.size}
                color={icon.color}
              />
            </IconItem>
          ))}
        </IconList>
      </CardStyles>
      <CarouselWrapper>
        <Carousel>
          {icons.map((icon, index) => (
            <IconItem key={index}>
              <icon.component
                size={icon.size}
                color={icon.color}
              />
            </IconItem>
          ))}
        </Carousel>
      </CarouselWrapper>
    </>
  );
};

export default Card;
