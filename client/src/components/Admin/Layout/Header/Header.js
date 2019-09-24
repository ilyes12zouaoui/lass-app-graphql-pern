import React from "react";
import Sidebar from "./SideBar/SideBar";
import "./Header.css";
const Header = () => {
  return (
    <div
      className=" admin-header sticky-top"
      style={{ minHeight: "40px", padding: "0.5rem 1rem" }}
    >
      <Sidebar />
      <span
        className="color-pink "
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "500",
          paddingRight: "12px",
          fontSize: "14px",
          cursor: "pointer"
        }}
      >
        WELCOME TO ADMIN SPACE
      </span>
    </div>
  );
};

export default Header;
