import React from "react";
import Header from "../header/header";

const Layout = ({ children, data }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
