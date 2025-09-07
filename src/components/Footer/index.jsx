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
    // Aqui você pode implementar a lógica de envio do formulário
    // Por exemplo, integração com EmailJS ou outro serviço de email
    console.log("Dados do formulário enviados:", formData);

    // Exemplo para futuras integrações:
    // await emailjs.send('service_id', 'template_id', formData, 'user_id');

    // Simular sucesso
    return Promise.resolve();
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
