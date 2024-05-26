import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export default function ProjectsPage({ data }: any) {
  const projects = data.allMarkdownRemark.nodes;
  
  return (
    <Layout>
      <Box component="h2">Projects</Box>
      <Box component="div">List of projects</Box>
      <br/>
      <br/>
      {/* <Box>
        {projects?.map((project: any, index: number) => (
          <Link to={`/projects/${project.frontmatter.slug}`} key={index}>
            <Typography component={"h3"}>{project.frontmatter.title}</Typography>
          </Link>
        ))}
      </Box> */}
    </Layout>
  );
}

// export const query = graphql`
//   query ProjectQuery {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           title
//           slug
//         }
//       }
//     }
//   }
// `;
