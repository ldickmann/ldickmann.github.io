import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const Home = lazy(() => import("./pages/Home"));
const Intro = lazy(() => import("./pages/Intro"));
const Projects = lazy(() => import("./pages/Projects"));

// Global container style
const GlobalContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalContainer>
            <Routes>
              <Route
                path="/intro"
                element={<Intro />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/projects"
                element={<Projects />}
              />
              <Route
                path="/"
                element={<Navigate to="/intro" />}
              />
              <Route
                path="*"
                element={<div>Página não encontrada...</div>}
              />
            </Routes>
          </GlobalContainer>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
