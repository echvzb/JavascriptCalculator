import React from "react";
import { Box, Grid } from "@material-ui/core";
import Pad from "./Pad";
import View from "./View";
import calculate from './calculate'


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: "",
      output: "",
      number: ""
    };
    this.formatedNumber = this.formatedNumber.bind(this);
    this.reverseFormatedNumber = this.reverseFormatedNumber.bind(this);
    this.setHistory = this.setHistory.bind(this);
    this.setOutput = this.setOutput.bind(this);
    this.clear = this.clear.bind(this);
  }
  setHistory(str) {
    if (str === "=") {
      let result = calculate('+ '+this.state.history+' '+this.state.number)
      if(isNaN(result)){
        return
      }
      else{
        this.setState({
          output: this.formatedNumber(result),
          history: "",
          number: result
        });
      }
      
    }
    else{
      this.setState({
        output: "",
        history: this.state.history + this.state.number +' '+str,
        number: ""
      });
    }
    
  }
  setOutput(str) {
    this.setState({
      output: this.formatedNumber(this.state.number + str),
      number: this.state.number + str
    });
  }
  clear() {
    this.setState({
      output: "",
      history: "",
      number: ""
    });
  }
  formatedNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
  }
  reverseFormatedNumber(num) {
    return Number(num.replace("/,/g", ""));
  }

  render() {
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
            <View output={this.state.output} history={this.state.history} />
          </Grid>
          <Grid item xs={12}>
            <Pad
              onClickNumber={this.setOutput}
              onClear={this.clear}
              onOperator={this.setHistory}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default Calculator;
