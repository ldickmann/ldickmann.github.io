import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled(Link)`
  color: var(--color-green);
  text-decoration: none;
  padding: 1rem 0.5rem;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease, padding 0.3s ease;
  font-size: 1.4rem;

  &:hover {
    background-color: var(--color-white-medium);
    color: var(--color-black-medium);
    display: flex;
    height: 30%;
  }

  &:active {
    background-color: var(--color-beige);
    color: var(--color-white-medium);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--color-green-active);
    `}
`;

const SidebarLink = styled(Link)`
  color: white;
  font-family: "Silkscreen", serif;
  font-weight: 500;
  font-size: 1.5rem;
  width: 90%;
  transition: opacity 0.3s ease, color 0.3s ease, padding 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    color: var(--color-white-medium);
    padding: 3.2rem 0.7rem;
  }

  &:active {
    opacity: 0.6;
    color: var(--color-green-active);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--color-green-active);
    `}
`;

const NavLinks = ({ children, to, isSidebar }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return isSidebar ? (
    <SidebarLink to={to} $isActive={isActive}>
      {children}
    </SidebarLink>
  ) : (
    <StyledLink to={to} $isActive={isActive}>
      {children}
    </StyledLink>
  );
};

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  isSidebar: PropTypes.bool,
};

export default NavLinks;
