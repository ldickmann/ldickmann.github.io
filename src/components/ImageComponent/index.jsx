import styled from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => (props.height ? "cover" : "initial")};
`;

/**
 * Image component that displays an image.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The image alt text.
 * @param {string} [props.width] - Optional width override.
 * @param {string} [props.height] - Optional height override,
 *
 * @returns {JSX.Element} The image component.
 */
const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <ImageContainer>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </ImageContainer>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageComponent;
