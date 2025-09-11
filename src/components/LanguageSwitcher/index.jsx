import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { memo, useCallback } from "react";

const SwitcherContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const LanguageButton = styled.button`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-green)" : "transparent"};
  border: 1px solid var(--color-green);
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-black)" : "var(--color-green)"};
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);
  min-width: 45px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 244, 65, 0.3);

    ${({ $isActive }) =>
      !$isActive &&
      `
        background-color: rgba(0, 244, 65, 0.1);
      `}
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-green);
    outline-offset: 2px;
  }
`;

const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    async (lng) => {
      if (i18n.language !== lng) {
        try {
          await i18n.changeLanguage(lng);
        } catch (error) {
          console.error("Erro ao alterar idioma:", error);
        }
      }
    },
    [i18n]
  );

  return (
    <SwitcherContainer>
      <LanguageButton
        onClick={() => changeLanguage("pt")}
        $isActive={i18n.language === "pt"}
        aria-label="Mudar para Português">
        PT
      </LanguageButton>
      <LanguageButton
        onClick={() => changeLanguage("en")}
        $isActive={i18n.language === "en"}
        aria-label="Change to English">
        EN
      </LanguageButton>
    </SwitcherContainer>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
