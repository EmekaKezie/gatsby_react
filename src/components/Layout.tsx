import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { graphql, useStaticQuery } from "gatsby";

type props = {
  children: ReactNode;
};
export default function Layout(props: props) {
  // const data = useStaticQuery(graphql`
  //   query SiteInfo {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  // const { title } = data.site.siteMetadata;
  return (
    <Box>
      <Navbar />
      <br />
      {/* <Box>{title}</Box> */}
      <Box>{props.children}</Box>
    </Box>
  );
}
