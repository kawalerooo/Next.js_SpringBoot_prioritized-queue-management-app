import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PendingIcon from '@mui/icons-material/Pending';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { useRouter } from "next/router";

const drawerWidth = 240;
export default function MainDrawer({ children }) {
  const router = useRouter();
  const handleOrderButtonClick = async () => {
    await router.push("/get-ticket");
  };

  const handleGetOrderButtonClick = async () => {
    await router.push("/ticket-queue");
  };

    const handleQueueManagerButton = async () => {
        await router.push("/queue-manager");
    };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <ListItem key="Bilety" disablePadding>
          <ListItemButton onClick={handleOrderButtonClick}>
            <ListItemIcon>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Bilety" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <List>
          <ListItem key="Lista oczekiwania" disablePadding>
            <ListItemButton onClick={handleGetOrderButtonClick}>
              <ListItemIcon>
                <PendingIcon />
              </ListItemIcon>
              <ListItemText primary="Lista oczekiwania" />
            </ListItemButton>
          </ListItem>
            <ListItem key="Zarządzanie kolejką" disablePadding>
                <ListItemButton onClick={handleQueueManagerButton}>
                    <ListItemIcon>
                        <FastForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Zarządzanie kolejką" />
                </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
