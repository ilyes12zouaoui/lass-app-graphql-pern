import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children || "empty main admin"}</main>
      <Footer />
    </>
  );
};

export default Layout;
