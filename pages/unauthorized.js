
import React from "react";
import Layout from "../components/Layout";

export default function Unauthorized() {
  return <Layout>
    <h1>Access Denied</h1>
    <p className="text-red-500">login required</p>
  </Layout>;
}
