import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = props => {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: "rgb(246, 247, 247)"
        }}
      >
        {props.children || "empty main"}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
