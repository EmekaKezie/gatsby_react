import { Box } from "@mui/material";
import * as React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

function IndexPage() {
  return (
    <Layout>
      <Box>Home</Box>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;
