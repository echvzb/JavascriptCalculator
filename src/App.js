import React from "react";
import "./styles.css";
import Calculator from "./components/Calculator";
import { Box, Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import calculator from "./calculate";

calculator("5");
calculator("2");
calculator("/");
calculator("2");
calculator("+");
calculator("5");
calculator("-");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5722"
    },
    secondary: {
      main: "#cddc39"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Calculadora Javascript</Typography>
          </Toolbar>
        </AppBar>
        <Box mt="11rem">
          <Container maxWidth="sm">
            <Box>
              <Calculator />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
