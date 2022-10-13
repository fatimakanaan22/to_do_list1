import React from "react";
import SideBar from "../pharmacy/sideBar";

function Layout({ children }) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}

export default Layout;
