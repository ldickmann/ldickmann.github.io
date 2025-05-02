import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDivider = styled.div`
  /* Estilização da linha - props para poder passar linha pontilhada ou sólida e o 
  * tamanho do pontilhado e a distância entre eles & horizontal ou vertical
  */
  ${(props) =>
    props.variant === "dotted"
      ? props.orientation === "vertical"
        ? `
  width: ${props.width};
  height: ${props.height};
  background: repeating-linear-gradient(
    to bottom,
    var(--color-green),
    var(--color-green) ${props.dashSize}px,
    transparent ${props.dashSize}px,
    transparent ${props.dashSize + props.dashGap}px
  );
  `
        : `
  height: ${props.height};
  width: ${props.width};
  background: repeating-linear-gradient(
    to right,
    var(--color-green),
    var(--color-green) ${props.dashSize}px,
    transparent ${props.dashSize}px,
    transparent ${props.dashSize + props.dashGap}px
  );
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
  dashSize = 8,
  dashGap = 4,
}) => {
  return (
    <StyledDivider
      orientation={orientation}
      width={width}
      height={height}
      variant={variant}
      dashSize={dashSize}
      dashGap={dashGap}
    />
  );
};

DividerComponent.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  width: PropTypes.string,
  height: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "dotted"]),
  dashSize: PropTypes.number,
  dashGap: PropTypes.number,
};

export default DividerComponent;
