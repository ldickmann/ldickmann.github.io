import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="/">
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
