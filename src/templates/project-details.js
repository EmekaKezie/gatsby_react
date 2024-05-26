import React from "react";
import { Box, Typography } from "@mui/material";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  console.log(data);
  return (
    <Box>
      <Typography component={"h2"}>
        {data.markdownRemark.frontmatter.title}
      </Typography>
      <br />
      <Typography
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}></Typography>
    </Box>
  );
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
