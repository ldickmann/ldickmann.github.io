import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesComponent from "../components/Particles/particlesComponent";

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4500); // 4.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return <ParticlesComponent />;
};

export default Intro;
