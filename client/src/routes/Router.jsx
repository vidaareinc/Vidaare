import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import MyVideos from "../pages/MyVideos";
import Analytics from "../pages/Analytics";
import Demo from "../pages/Demo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/myvideos"
        element={
          <Layout>
            <MyVideos />
          </Layout>
        }
      />
      <Route
        path="/analytics"
        element={
          <Layout>
            <Analytics />
          </Layout>
        }
      />
      <Route
        path="/demo"
        element={
          <Layout>
            <Demo />
          </Layout>
        }
      />
    </Routes>
  );
}
