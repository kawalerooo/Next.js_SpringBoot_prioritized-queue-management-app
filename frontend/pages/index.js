import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const IndexPage = () => {
  return (
    <div>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h3">Witaj na stronie głównej!</Typography>
        <Typography variant="body1">
          Wybierz interesującą ciebie kategorię z menu, znajdującego się z lewej strony.
        </Typography>
      </Stack>
    </div>
  );
};

export default IndexPage;
