import styled from "styled-components";
import DividerComponent from "../DividerComponent";
import FormsContact from "../FormsContact";
import React from "react";

const FooterStyles = styled.footer`
  color: var(--color-white);
  padding: 4rem 1rem 2rem;
  text-align: center;
  font-size: 1rem;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 50%);
  margin-top: 6rem;
  border-top: 1px solid rgba(0, 244, 65, 0.1);

  p {
    margin: 1.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0.5rem 1.5rem;
    margin-top: 4rem;
  }
`;

const ContactSection = styled.div`
  margin-bottom: 4rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding: 0 0.5rem;
  }
`;

const FooterDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footer = () => {
  const handleFormSubmit = async (formData) => {
    // Callback opcional para analytics ou outras ações após o envio
    console.log("Formulário enviado com sucesso:", formData);
    
    // Aqui você pode adicionar tracking, analytics, etc.
    // Exemplo: gtag('event', 'contact_form_submit');
  };

  return (
    <FooterStyles>
      <ContactSection>
        <FormsContact onSubmit={handleFormSubmit} />
      </ContactSection>

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

export default React.memo(Footer);
