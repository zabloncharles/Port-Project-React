import React  from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import "../components/styles/Font.css";

import { useEffect, useState } from "react";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function SecondPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Check if window is defined (client-side)
  if (typeof window !== 'undefined') {
    window.addEventListener("resize", handleResize);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", handleResize);
    }
  };
}, []);


  return (
    <div>
      {isMobile ? (
        <MobileApp />
      ) : (
        <WebApp />
      )}
    </div>
  );
};

export default SecondPage;

const Wrapper = styled.div`
  .hide-web {
    display: none;
   
  }
`;
