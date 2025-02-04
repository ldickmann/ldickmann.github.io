import styled from "styled-components";

const FooterStyles = styled.footer`
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 3rem 3rem;
  text-align: center;
  font-size: 1.1rem;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>Copyright &copy; 2025 | Developer Lucas Elias Dickmann</p>
    </FooterStyles>
  );
};

export default Footer;
