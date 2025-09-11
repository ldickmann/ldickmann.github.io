import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SwitcherContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LanguageButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--color-green);
  color: var(--color-green);
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8rem;

  &.selected {
    background-color: var(--color-green);
    color: var(--color-black);
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton
        onClick={() => changeLanguage("pt")}
        className={i18n.language === "pt" ? "selected" : ""}
      >
        PT
      </LanguageButton>
      <LanguageButton
        onClick={() => changeLanguage("en")}
        className={i18n.language === "en" ? "selected" : ""}
      >
        EN
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
