// import { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";
import DividerComponent from "../DividerComponent";

const HeaderNavbar = styled.header`
  /* background-color: var(--color-black); */
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-inline: 0.625rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  max-width: 100%;
  transition: opacity 0.3s ease;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

// const ToggleIcon = styled.div`
//   cursor: pointer;
//   display: none;

//   @media (max-width: 550px) {
//     display: block;
//   }
// `;

const Navbar = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 550);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <HeaderNavbar>
      <Navigation>
        <DividerComponent
          orientation="horizontal"
          width="250px"
          height="1px"
          variant="solid"
        />
        {/* {isMobile && (
          <ToggleIcon onClick={toggleSidebar}>
            <FaBars
              size={40}
              color="white"
            />
          </ToggleIcon>
        )} */}
        <NavList>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          {/* <NavItem>
              <NavLinks to="/projects">Projetos</NavLinks>
            </NavItem> */}
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
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Navbar;
