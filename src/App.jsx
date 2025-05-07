import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
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
  );
}

export default App;
