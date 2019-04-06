import React, { Component } from 'react'
import Header from '../Header/Header';
import Button from "@material-ui/core/Button";
//import { withStyles} from "@material-ui/core/styles";
import { FormControl } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import blue from "@material-ui/core/colors/blue";
import RadioGroup from "@material-ui/core/RadioGroup";
//import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
//import RadioGroup from "@material-ui/core/RadioGroup";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormControl from "@material-ui/core/FormControl";
//import FormLabel from "@material-ui/core/FormLabel";

export class Feeling extends Component {
  state ={
    value:'',
  }
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
                  onChange={this.HandleChange}
                  row
                >
                  <i className="material-icons">
                    sentiment_very_satisfied
                  </i>
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: '1.1rem',color:'8a8989'}}>1</Typography> }
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: '1.1rem', color: '8a8989' }}>2</Typography>}
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: '1.1rem', color: '8a8989' }}>3</Typography>}
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: '1.1rem', color: '8a8989' }}>4</Typography>}
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: '1.1rem', color: '8a8989' }}>5</Typography>}
                    labelPlacement="bottom"
                  />
                </RadioGroup>
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
export default Feeling
