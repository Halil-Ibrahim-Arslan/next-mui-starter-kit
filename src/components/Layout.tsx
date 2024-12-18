"use client";
import { Box, useTheme } from "@mui/material";
import Sidenav from "./Sidenav";
import { useState } from "react";
import { Appbar } from "./Appbar";
import SidenavContainer from "@/container/SidenavContainer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const [sideNavOpen, setSideNavOpen] = useState(true);

  const handleToggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <>
      <Sidenav open={sideNavOpen}>
        <SidenavContainer />
      </Sidenav>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: sideNavOpen ? "calc(100%- 256px)" : "calc(100% )",
          marginLeft: sideNavOpen ? `256px` : "0px",
          transition: "all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          height: "100vh",
          zIndex: 28,
        }}
      >
        <Appbar handleToggleSideNav={handleToggleSideNav} />
        <Box
          id="layout-main"
          sx={{
            flex: 1,
            width: "100%",
            background: theme.palette.background.default,
            padding: theme.spacing(1.5, 1.5),
            zIndex: 28,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
