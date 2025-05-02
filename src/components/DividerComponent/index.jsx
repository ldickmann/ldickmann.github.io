import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDivider = styled.div`
  background-color: var(--color-green);

  /* Estilização padrão vertical */
  width: ${(props) =>
    props.orientation === "vertical"
      ? props.width || "2px"
      : props.width || "400px"};

  height: ${(props) =>
    props.orientation === "vertical"
      ? props.height || "400px"
      : props.height || "2px"};
`;

const DividerComponent = ({ orientation, width, height }) => {
  return (
    <StyledDivider
      orientation={orientation}
      width={width}
      height={height}
    />
  );
};

DividerComponent.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  width: PropTypes.string,
  height: PropTypes.string,
};

DividerComponent.defaultProps = {
  orientation: "horizontal",
  width: "400px",
  height: "2px",
};

export default DividerComponent;
