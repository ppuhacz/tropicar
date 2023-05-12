import React, { ReactNode } from "react";
import Header from "../header/header";
import { Footer } from "../footer/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
