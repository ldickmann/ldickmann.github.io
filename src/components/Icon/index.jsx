import PropTypes from "prop-types";
import styled from "styled-components";

const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = ({ component: IconComponent, size = 70, color = "white" }) => {
  return (
    <IconItem>
      <IconComponent
        size={size}
        color={color}
      />
    </IconItem>
  );
};

Icon.propTypes = {
  component: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
