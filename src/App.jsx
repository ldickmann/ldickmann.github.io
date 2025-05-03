import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import PropTypes from "prop-types";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Footer from "./components/Footer";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <BrowserRouter basename="/">
//       <AppContent
//         toggleSidebar={toggleSidebar}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />
//     </BrowserRouter>
//   );
// }

// function AppContent({ toggleSidebar, sidebarOpen, setSidebarOpen }) {
//   const location = useLocation();
//   const isParticlesRoute = location.pathname === "/";

//   return (
//     <>
//       {!isParticlesRoute && (
//         <Navbar
//           toggleSidebar={toggleSidebar}
//           isSidebarOpen={sidebarOpen}
//         />
//       )}
//       <Sidebar
//         isOpen={sidebarOpen}
//         setIsOpen={setSidebarOpen}
//       />
//       <Routes>
//         <Route
//           path="/"
//           element={<Home toggleSidebar={toggleSidebar} />}
//         />
//         <Route
//           path="/projects"
//           element={<Projects />}
//         />
//         <Route
//           path="*"
//           element={<div>Página não encontrada...</div>}
//         />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

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

// AppContent.propTypes = {
//   toggleSidebar: PropTypes.func.isRequired,
//   sidebarOpen: PropTypes.bool.isRequired,
//   setSidebarOpen: PropTypes.func.isRequired,
// };

export default App;
