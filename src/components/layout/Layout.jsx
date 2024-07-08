import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className=" ">
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
