import styled from "styled-components";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";
import DividerComponent from "../DividerComponent";

const HeaderNavbar = styled.header`
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  transition: opacity 0.3s ease;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const Navbar = () => {
  return (
    <HeaderNavbar>
      <Navigation>
        <DividerComponent
          orientation="horizontal"
          width="250px"
          height="1px"
          variant="solid"
        />
        <NavList>
          <NavItem>
            <NavLinks to="/home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/projects">Projetos</NavLinks>
          </NavItem>
        </NavList>
        <DividerComponent
          orientation="horizontal"
          width="100%"
          height="1px"
          variant="solid"
        />
      </Navigation>
    </HeaderNavbar>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Navbar;
