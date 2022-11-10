import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const SharedFooter = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default SharedFooter;
