import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

const InformationBar = ({ barTitle }) => {
  return (
    <div>
      <AppBar
        sx={{
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="h6">{barTitle}</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default InformationBar;
