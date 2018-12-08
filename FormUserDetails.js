import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';

export class FormUserDeatils extends Component{
    continue= e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default FormUserDeatils