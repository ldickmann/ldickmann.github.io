import styled from "styled-components";
import DividerComponent from "../DividerComponent";

const FooterStyles = styled.footer`
  /* background-color: var(--color-black); */
  color: var(--color-white);
  padding: 1rem 3rem;
  text-align: center;
  font-size: 1rem;

  p {
    margin: 0 1rem;
  }
`;

const FooterDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <FooterDivider>
        <DividerComponent
          orientation="horizontal"
          width="40%"
          height="1px"
          variant="solid"
        />
        <p>Copyright &copy; 2025 | Developer Lucas Elias Dickmann</p>
        <DividerComponent
          orientation="horizontal"
          width="40%"
          height="1px"
          variant="solid"
        />
      </FooterDivider>
    </FooterStyles>
  );
};

export default Footer;
