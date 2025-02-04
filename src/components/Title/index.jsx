import styled from "styled-components";
import PropTypes from "prop-types";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleStyles = styled.h1`
  color: var(--color-green);
  font-family: var(--font-banner);
  font-size: 2.25rem;
  margin: 1rem 0rem;
  text-transform: uppercase;
  overflow: hidden;
  white-space: pre-wrap;
`;

/**
 * Title component that displays text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed.
 *
 * @returns {JSX.Element} The title component.
 */
const Title = ({ text }) => {
  return (
    <TitleContainer>
      <TitleStyles>{text}</TitleStyles>
    </TitleContainer>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
