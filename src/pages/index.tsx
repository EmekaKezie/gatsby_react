import { Box } from "@mui/material";
import * as React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

function IndexPage({ data }: any) {
  // const { title } = data.site.siteMetadata;
  // console.log(title);
  return (
    <Layout>
      {/* <Box component={"h1"}>{title}</Box> */}
      <Box>Home</Box>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         title
//         description
//         siteUrl
//       }
//     }
//   }
// `;
