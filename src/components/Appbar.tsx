import { AppBar, IconButton, SxProps, Toolbar, useTheme } from "@mui/material";
import Iconify from "./Iconify";

export function Appbar(props: {
  sx?: SxProps;
  handleToggleSideNav: () => void;
}) {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        background: theme.palette.secondary.main,
        height: 70,
        ...props.sx,
        transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        zIndex: 11,
        shadow: 0,
      }}
      color="inherit"
      elevation={0}
      enableColorOnDark
    >
      <Toolbar
        sx={{
          display: "flex",
          transition: "padding-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={props.handleToggleSideNav}>
          <Iconify icon="quill:hamburger" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
