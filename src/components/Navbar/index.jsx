import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";

const HeaderNavbar = styled.header`
  background-color: var(--color-black);
`;

const Navigation = styled.nav`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  transition: opacity 0.3s ease;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const ToggleIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 550px) {
    display: block;
    margin-left: auto;
  }
`;

const Navbar = ({ toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderNavbar>
      <Navigation>
        {isMobile && (
          <ToggleIcon onClick={toggleSidebar}>
            <FaBars
              size={40}
              color="white"
            />
          </ToggleIcon>
        )}
        {!isMobile && (
          <NavList>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projetos</NavLinks>
            </NavItem>
          </NavList>
        )}
      </Navigation>
    </HeaderNavbar>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Navbar;
