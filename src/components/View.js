import React from "react";
import { Box, Typography } from "@material-ui/core";

export default props => {
  return (
    <Box
      p="1rem"
      bgcolor="primary.light"
      color="text.primary"
      textAlign="right"
      height='4rem'
    >
      <Typography color="secondary">
        {props.history}
      </Typography>
      <Typography variant='h4' color="secondary">
        {props.output}
      </Typography>
    </Box>
  );
};
