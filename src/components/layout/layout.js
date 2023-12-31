import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "./Header";
import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <meta name="viewport" content="width=device-width"></meta>
     
    </>
  );
}

export default Layout;
