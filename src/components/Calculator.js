import React from "react";
import { Box, Grid } from "@material-ui/core";
import Pad from "./Pad";
import View from "./View";

export default () => {
  return (
    <Box
      boxShadow={3}
      p="1.5rem"
      border={3}
      borderColor="secondary.main"
      borderRadius={16}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <View />
        </Grid>
        <Grid item xs={12}>
          <Pad />
        </Grid>
      </Grid>
    </Box>
  );
};
