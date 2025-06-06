import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-banner: "Press Start 2P", serif;
    --font-secondary: "Black Ops One", sans-serif;
    --color-green: #00f441;
    --color-green-dark: #223f23;
    --color-green-active: #69bf8e;
    --color-white: #ffffff;
    --color-white-medium: #d9d9d9;
    --color-black: #000000;
    --color-black-light: #222222;
    --color-black-medium: #0d0d0d;
    --color-grey: #211818;
    --color-beige: #a68f7b;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-secondary);
    background-color: #121212;
    background-image: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.02),
        transparent 70%
      ),
      repeating-conic-gradient(
        from 45deg,
        #121212 0deg 45deg,
        #151515 45deg 90deg
      );
    background-size: 160px 160px;
  }
`;

export default GlobalStyle;
