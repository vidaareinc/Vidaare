import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Landing from "../pages/Landing";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
    </Routes>
  );
}
