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
const PAD_ELEMENTS = (str, props) => {
  let code = str.codePointAt(0);
  if (code > 47 && code < 58) {
    return (
      <Grid item xs={3}>
        <Box>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            onClick={() => props.onClickNumber(str)}
          >
            {str}
          </Button>
        </Box>
      </Grid>
    );
  }

  return (
    <Grid item xs={3}>
      <Box>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          size="large"
          onClick={() => props.onOperator(str)}
        >
          {str}
        </Button>
      </Box>
    </Grid>
  );
};

export default props => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            color="primary"
            variant="outlined"
            fullWidth
            size="large"
            onClick={props.onClear}
          >
            AC
          </Button>
        </Grid>
        {PAD.map(elem => PAD_ELEMENTS(elem, props))}
        <Grid item xs={6}>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            onClick={() => {
              props.onClickNumber("0");
            }}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            onClick={() => {
              props.onClickNumber(".");
            }}
          >
            .
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
