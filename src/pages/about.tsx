import React from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout>
      <Box>This is about Page</Box>
      <Box>
        {/* <StaticImage alt="mini-banner" src="/banner2.jpg" /> */}
        <img src="/banner2.jpg"/>
      </Box>
    </Layout>
  );
};

export default AboutPage;
// export const Head = () => <title>About us</title>;
