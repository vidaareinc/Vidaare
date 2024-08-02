import React from "react";
import PropTypes from "prop-types";
import "../../styles/styles.css";

import Navbar from "../navigation/Navbar";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import CreatePostButton from "../../share/CreatePostButton";

export default function Layout({
  children,
  showCreatePostButton,
  showHeader,
  showNavbar,
}) {
  return (
    // FIXME: Modify the background lineaer gradient color
    <div className="flex min-h-screen main-bg layout-bg p-4">
      {showNavbar && <Navbar />}

      {/* Main content Section */}
      <div className="flex-1 p-4">
        {/* Main content */}
        {showHeader && <MainHeader />}
        <main className="mx-auto px-8 py-4">{children}</main>
        {/* Create Post */}
        {showCreatePostButton && <CreatePostButton />}
        {/* Footer */}
        <MainFooter />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showCreatePostButton: PropTypes.bool,
  showHeader: PropTypes.bool,
};

Layout.defaultProps = {
  showCreatePostButton: false,
  showHeader: true,
};
