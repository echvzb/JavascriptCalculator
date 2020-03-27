import React from "react";
import { Box, Typography } from "@material-ui/core";

export default () => {
  return (
    <Box
      p="1rem"
      bgcolor="primary.light"
      color="text.primary"
      textAlign="right"
    >
      <Typography color="secondary">
        0<br />
        {"0"}
      </Typography>
    </Box>
  );
};
