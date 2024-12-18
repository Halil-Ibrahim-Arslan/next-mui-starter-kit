/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Collapse,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    useTheme,
    Divider,
  } from "@mui/material";
  import SettingsIcon from "@mui/icons-material/Settings";
  import { useState } from "react";
  import MenuItem from "./MenuItem";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Iconify from "../Iconify";
  
  export default function MenuTreeItem({
    item,
    children,
    leaf,
    handleClick,
  }: any) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleOperate = (item: any) => {
      if (!leaf && item.children.length > 0) {
        setOpen(!open);
      }
      handleClick(item);
    };
  
    return (
      <>
        <ListItemButton
          onClick={() => handleOperate(item)}
          sx={{
            "&:active": {
              backgroundColor: "#4CAF50",
            },
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
            "&:before": {
              content: '""',
              position: "absolute",
              width: 3,
              height: "100%",
              left: "2rem",
              backgroundColor: theme.palette.primary.main,
              borderRadius: 3,
              display: leaf ? (children ? "none" : "block") : "none",
            },
          }}
        >
          <ListItemIcon>
            {leaf ? (
              <></>
            ) : item.icon ? (
              <Iconify icon={item.icon}  />
            ) : (
              <SettingsIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            sx={{ fontWeight: theme.typography.fontWeightMedium }}
          />
          {item.children.length > 0 ? (
            open ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          ) : (
            <></>
          )}
        </ListItemButton>
        <Divider />
  
        <Collapse in={open} timeout="auto" unmountOnExit>
          <MenuItem data={item.children} leaf={true} handleClick={handleClick} />
        </Collapse>
      </>
    );
  }
  