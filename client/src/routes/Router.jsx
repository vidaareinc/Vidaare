import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import MyVideos from "../pages/MyVideos";
import Analytics from "../pages/Analytics";
import Demo from "../pages/Demo";
import CreatePost from "../pages/CreatePost";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={
          <Layout showCreatePostButton>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/myvideos"
        element={
          <Layout showCreatePostButton>
            <MyVideos />
          </Layout>
        }
      />
      <Route
        path="/analytics"
        element={
          <Layout showCreatePostButton>
            <Analytics />
          </Layout>
        }
      />
      <Route
        path="/demo"
        element={
          <Layout showCreatePostButton={false}>
            <Demo />
          </Layout>
        }
      />
      <Route
        path="/createpost"
        element={
          <Layout showCreatePostButton={false}>
            <CreatePost />
          </Layout>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <Layout
            showCreatePostButton={false}
            showHeader={false}
            showNavbar={false}
          >
            <TermsAndConditions />
          </Layout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Layout
            showCreatePostButton={false}
            showHeader={false}
            showNavbar={false}
          >
            <PrivacyPolicy />
          </Layout>
        }
      />
    </Routes>
  );
}
