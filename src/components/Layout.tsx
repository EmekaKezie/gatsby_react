import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type props = {
  children: ReactNode;
};
export default function Layout(props: props) {
  return (
    <Box>
      <Navbar />
      <br />
      <Box>{props.children}</Box>
    </Box>
  );
}
