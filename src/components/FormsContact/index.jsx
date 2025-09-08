import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import DividerComponent from "../DividerComponent";
import { EMAIL_CONFIG, validateEmailConfig } from "../../config/emailConfig";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 4rem;
  background: linear-gradient(
    145deg,
    rgba(34, 63, 35, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  border-radius: 15px;
  border: 1px solid var(--color-green);
  box-shadow: 0 8px 32px rgba(0, 244, 65, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0;
    border-radius: 10px;
  }

  @media (max-width: 430px) {
    padding: 1rem;
    border-radius: 8px;
    max-width: 360px;
  }
`;

const FormTitle = styled.h2`
  color: var(--color-green);
  font-family: var(--font-banner);
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FormSubtitle = styled.p`
  color: var(--color-white-medium);
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.6;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  position: relative;
`;

const Label = styled.label`
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InputBase = styled.input`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  border-radius: 8px;
  color: var(--color-white);
  font-size: 1rem;
  padding: 1rem;
  outline: none;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);

  &::placeholder {
    color: var(--color-white-medium);
    opacity: 0.7;
  }

  &:focus {
    border-color: var(--color-green);
    background: rgba(0, 244, 65, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 244, 65, 0.2);
    transform: translateY(-2px);
  }

  &:hover:not(:focus) {
    border-color: var(--color-green-active);
    background: rgba(0, 0, 0, 0.4);
  }

  ${({ $hasError }) =>
    $hasError &&
    `
    border-color: #ff4444;
    box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.2);
  `}
`;

const TextArea = styled.textarea`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  border-radius: 8px;
  color: var(--color-white);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: var(--color-white-medium);
    opacity: 0.7;
  }

  &:focus {
    border-color: var(--color-green);
    background: rgba(0, 244, 65, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 244, 65, 0.2);
    transform: translateY(-2px);
  }

  &:hover:not(:focus) {
    border-color: var(--color-green-active);
    background: rgba(0, 0, 0, 0.4);
  }

  ${({ $hasError }) =>
    $hasError &&
    `
    border-color: #ff4444;
    box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.2);
  `}
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-green),
    var(--color-green-active)
  );
  border: none;
  border-radius: 8px;
  color: var(--color-black);
  cursor: pointer;
  font-family: var(--font-secondary);
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 244, 65, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0, 244, 65, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;

      &::before {
        left: -100%;
      }
    }
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateY(${({ $show }) => ($show ? 0 : -10)}px);
  transition: all 0.3s ease;
`;

const SuccessMessage = styled.div`
  background: rgba(0, 244, 65, 0.1);
  border: 1px solid var(--color-green);
  border-radius: 8px;
  color: var(--color-green);
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateY(${({ $show }) => ($show ? 0 : -20)}px);
  transition: all 0.3s ease;
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Verificar se as configurações do EmailJS estão corretas
      if (!validateEmailConfig()) {
        throw new Error(
          "Configurações do EmailJS não encontradas. Verifique o arquivo .env.local"
        );
      }

      // Preparar os dados para o template do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAIL_CONFIG.TO_EMAIL,
        reply_to: formData.email,
      };

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      console.log("Email enviado com sucesso:", response);

      // Se há uma função onSubmit personalizada, chamá-la também
      if (onSubmit) {
        await onSubmit(formData);
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Limpar qualquer erro anterior
      setErrors({});

      // Ocultar mensagem de sucesso após 5 segundos
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      // Mostrar erro específico para o usuário
      let errorMessage = "Erro ao enviar mensagem. Tente novamente.";

      if (error.message && error.message.includes("Configurações do EmailJS")) {
        errorMessage =
          "Serviço de email não configurado. Entre em contato diretamente.";
      } else if (error.status === 400) {
        errorMessage =
          "Dados inválidos. Verifique os campos e tente novamente.";
      } else if (error.status === 403) {
        errorMessage = "Serviço de email temporariamente indisponível.";
      }

      setErrors({
        submit: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Contato</FormTitle>
      <DividerContainer>
        <DividerComponent
          orientation="horizontal"
          width="60px"
          height="2px"
          variant="solid"
        />
      </DividerContainer>
      <FormSubtitle>
        Vamos conversar! Estou sempre aberto a novas oportunidades e
        colaborações.
      </FormSubtitle>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome *</Label>
          <InputBase
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Seu nome completo"
            $hasError={!!errors.name}
          />
          <ErrorMessage $show={!!errors.name}>{errors.name}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <InputBase
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="seu.email@exemplo.com"
            $hasError={!!errors.email}
          />
          <ErrorMessage $show={!!errors.email}>{errors.email}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Mensagem *</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Digite sua mensagem aqui..."
            $hasError={!!errors.message}
          />
          <ErrorMessage $show={!!errors.message}>{errors.message}</ErrorMessage>
        </FormGroup>

        {errors.submit && (
          <ErrorMessage
            $show={true}
            style={{ marginBottom: "1rem" }}>
            {errors.submit}
          </ErrorMessage>
        )}

        <SubmitButton
          type="submit"
          disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </SubmitButton>
      </form>

      <SuccessMessage $show={showSuccess}>
        ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
      </SuccessMessage>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
