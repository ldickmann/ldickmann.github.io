import { useEffect, useRef } from "react";
import styled from "styled-components";
import NavLinks from "../NavLinks";
import PropTypes from "prop-types";

const SidebarContainer = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
  height: 100%;
  width: 250px;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 1rem;
  z-index: 1000;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
`;

const StyledNavLink = styled(NavLinks)`
  text-decoration: none;
  font-size: 0.875rem;
`;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <SidebarContainer ref={sidebarRef} $isOpen={isOpen}>
      <SidebarHeader></SidebarHeader>
      {isOpen && (
        <>
          <StyledNavLink to="/" isSidebar>
            Home
          </StyledNavLink>
          <StyledNavLink to="/projects" isSidebar>
            Projetos
          </StyledNavLink>
        </>
      )}
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
