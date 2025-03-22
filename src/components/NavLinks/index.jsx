import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const LinkText = styled.div`
  font-size: 1.2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  color: var(--color-green);
  text-decoration: none;
  font-family: "Black Ops One", "Righteous", Arial, sans-serif;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  text-shadow: rgba(133, 185, 255, 0);

  &:after {
    display: inline-block;
    content: attr(data-text);
    position: absolute;
    top: 0px;
    left: 0px;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    opacity: 0;
    transform: translate(-20px, -50px) rotate(-20deg);
    -webkit-transform: translate(-20px, -50px) rotate(-20deg);
    color: var(--color-white);
    max-width: 50%;
    overflow: hidden;
    visibility: hidden;
  }
`;

const TestBox = styled.div`
  position: absolute;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  left: 50%;
  height: 25px;
  width: 100%;
  top: 15px;
  background: transparent;
  text-align: right;
  overflow: hidden;
  transform: translate(20px, -50px) rotate(20deg);
  -webkit-transform: translate(20px, -50px) rotate(20deg);
  z-index: 2;
  opacity: 0;
  transition-delay: 0.15s;
  -webkit-transition-delay: 0.15s;
  visibility: visible;

  span {
    font-size: 1.2rem;
    position: absolute;
    left: -50%;
    z-index: 2;
    color: var(--color-white);
    text-decoration: none;
    font-family: "Black Ops One", "Righteous", Arial, sans-serif;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
  }
`;

const NavStyleItem = styled(Link)`
  position: relative;
  display: inline-block;
  height: 35px;
  padding-top: 15px;
  margin: 0 5px;
  background: transparent;
  z-index: 2;
  color: #007bff;
  text-decoration: none;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;

  &:hover ${LinkText}:after, &:hover ${TestBox} {
    visibility: visible;
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    opacity: 1;
  }

  &:hover ${LinkText} {
    color: rgba(133, 185, 255, 0);
    transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
  }
`;

const NavLinks = ({ children, to }) => {
  return (
    <NavStyleItem to={to}>
      <LinkText data-text={children}>{children}</LinkText>
      <TestBox>
        <span>{children}</span>
      </TestBox>
    </NavStyleItem>
  );
};

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLinks;
