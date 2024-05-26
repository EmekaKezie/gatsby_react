import { Box, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      <Box>Gatsby Practice</Box>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Typography>
          <Link to="/">Home</Link>
        </Typography>
        <Typography>
          <Link to="/about">About</Link>
        </Typography>
        <Typography>
          <Link to="/members">Members</Link>
        </Typography>
        <Typography>
          <Link to="/projects">Projects</Link>
        </Typography>
      </Box>
    </Box>
  );
}
