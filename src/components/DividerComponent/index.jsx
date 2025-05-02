import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDivider = styled.div`
  /* Estilização da linha - props para poder passar linha pontilhada ou sólida & horizontal ou vertical */
  ${(props) =>
    props.variant === "dotted"
      ? props.orientation === "vertical"
        ? `
  background-color: transparent;
  border-left: ${props.width} dotted var(--color-green);
  height: ${props.height};
  `
        : `
  background-color: transparent;
  border-top: ${props.height} dotted var(--color-green);
  width: ${props.width};
  `
      : `
  background-color: var(--color-green);
  width: ${props.width};
  height: ${props.height};
  `}
`;

const DividerComponent = ({
  orientation = "horizontal",
  width = "400px",
  height = "2px",
  variant = "solid",
}) => {
  return (
    <StyledDivider
      orientation={orientation}
      width={width}
      height={height}
      variant={variant}
    />
  );
};

DividerComponent.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  width: PropTypes.string,
  height: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "dotted"]),
};

export default DividerComponent;
