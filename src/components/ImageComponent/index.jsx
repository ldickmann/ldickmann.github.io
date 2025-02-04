import styled from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: ${(props) => props.width || "90%"};
`;

/**
 * Image component that displays an image.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The image alt text.
 *
 * @returns {JSX.Element} The image component.
 */
const ImageComponent = ({ src, alt, width }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} width={width} />
    </ImageContainer>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default ImageComponent;
