import { Box, Paper, useTheme } from "@mui/material";

const Sidenav = ({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        height: "100dvh",
        width: "256px",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        zIndex: 11,
        padding: 1,
        overflow: "auto",
        background: theme.palette.secondary.main,
      }}
    >
      {children}

      <Box
        sx={{
          height: "100%",
          width: open ? 0 : "256px",
          transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          position: "absolute",
          right: 0,
          zIndex: 10,
          padding: 0,
        }}
      ></Box>
    </Paper>
  );
};

export default Sidenav;
