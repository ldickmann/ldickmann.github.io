// Configurações do EmailJS
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key",
  TO_EMAIL: "ldickmann12@gmail.com",
};

// Validar se as configurações estão definidas
export const validateEmailConfig = () => {
  const requiredConfigs = ["SERVICE_ID", "TEMPLATE_ID", "PUBLIC_KEY"];
  const missingConfigs = requiredConfigs.filter(
    (key) =>
      !EMAIL_CONFIG[key] ||
      EMAIL_CONFIG[key].includes("default") ||
      EMAIL_CONFIG[key].includes("your_")
  );

  if (missingConfigs.length > 0) {
    console.warn(
      `EmailJS: Configurações faltando ou usando valores padrão: ${missingConfigs.join(
        ", "
      )}`
    );
    return false;
  }

  return true;
};
