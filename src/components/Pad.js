import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
const PAD = [
  "/",
  "X",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "="
];
const PAD_ELEMENTS = str => {
  let code = str.codePointAt(0);
  if (code > 47 && code < 58) {
    return (
      <Grid item xs={3}>
        <Box>
          <Button color="primary" variant="contained" fullWidth size="large">
            {str}
          </Button>
        </Box>
      </Grid>
    );
  }

  return (
    <Grid item xs={3}>
      <Box>
        <Button color="secondary" variant="contained" fullWidth size="large">
          {str}
        </Button>
      </Box>
    </Grid>
  );
};

export default () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button color="primary" variant="outlined" fullWidth size="large">
            AC
          </Button>
        </Grid>
        {PAD.map(elem => PAD_ELEMENTS(elem))}
        <Grid item xs={6}>
          <Button color="primary" variant="contained" fullWidth size="large">
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="contained" fullWidth size="large">
            .
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
