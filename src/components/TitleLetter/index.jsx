import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const typing = (length) => keyframes`
  from { width: 0; }
  to { width: ${length}ch; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: var(--color-green); }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleStyles = styled.h1`
  color: var(--color-green);
  font-family: var(--font-banner);
  margin: 1rem 0rem;
  text-transform: uppercase;
  overflow: hidden;
  white-space: pre-wrap;
  border-right: 0.15em solid var(--color-green);
  font-size: 6rem;
  ${({ $length }) => css`
    animation: ${typing($length)} 1.5s steps($length, end),
      ${blink} 0.9s step-end infinite;
  `}
`;

/**
 * Title component that animates the display of text one character at a time.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed and animated.
 *
 * @returns {JSX.Element} The animated title component.
 */
const TitleLetter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <TitleContainer>
      <TitleStyles $length={text.length}>{displayedText}</TitleStyles>
    </TitleContainer>
  );  
};

TitleLetter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleLetter;
