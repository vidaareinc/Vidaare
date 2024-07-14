import React from "react";
import PropTypes from "prop-types";
import "../../styles/styles.css";

import Navbar from "../navigation/Navbar";
import MainHeader from "../header/MainHeader";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen main-bg">
      <Navbar />

      {/* Main content Section */}
      <div className="flex-1">
        {/* Main content */}
        <MainHeader />
        <main className="container mx-auto px-4 py-4">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
