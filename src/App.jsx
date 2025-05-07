import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="*"
                element={<div>Página não encontrada...</div>}
              />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
