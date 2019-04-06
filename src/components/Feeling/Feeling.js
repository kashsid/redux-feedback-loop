import React, { Component } from "react";
import Header from "../Header/Header";
import Button from "@material-ui/core/Button";
import { FormControl } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import blue from "@material-ui/core/colors/blue";
import RadioGroup from "@material-ui/core/RadioGroup";
import { connect } from "react-redux";

import Radio from "@material-ui/core/Radio";

import FormControlLabel from "@material-ui/core/FormControlLabel";

export class Feeling extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  

  handleClick = () => {
    //  sending feedback on feelings to  reducer
    const action = {
      type: "SET_FEEDBACK_FEELING",
      payload: this.state.value
    };
    this.props.dispatch(action);

    // route to understanding
    this.props.history.push("/understanding");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div className="question-div">
            <FormControl component="fieldset">
              <h1> How are you feeling today?</h1>
              <div className="radio-buttons">
                <RadioGroup
                  style={{ display: "block" }}
                  aria-label="position"
                  name="position"
                  value={this.state.value}
                  onChange={this.handleChange}
                  row
                >
                  <i className="material-icons" />
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label={
                      <Typography
                        style={{ fontSize: "1.1rem", color: "8a8989" }}
                      >
                        1
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label={
                      <Typography
                        style={{ fontSize: "1.1rem", color: "8a8989" }}
                      >
                        2
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label={
                      <Typography
                        style={{ fontSize: "1.1rem", color: "8a8989" }}
                      >
                        3
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label={
                      <Typography
                        style={{ fontSize: "1.1rem", color: "8a8989" }}
                      >
                        4
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label={
                      <Typography
                        style={{ fontSize: "1.1rem", color: "8a8989" }}
                      >
                        5
                      </Typography>
                    }
                    labelPlacement="bottom"
                  />
                  <i class="material-icons" />
                </RadioGroup>
                <div className="button-div">
                  <Button
                    onClick={this.handleClick}
                    type="submit"
                    value="submit"
                    style={{ fontSize: "14px", marginTop: "30px" }}
                    size="medium"
                    variant="contained"
                    color="primary"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </FormControl>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 22
  }
});
export default connect()(Feeling);
