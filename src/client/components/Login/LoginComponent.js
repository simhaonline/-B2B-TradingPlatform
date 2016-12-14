/**
 * Created by Sebastian Karrie on 01.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

const styles = {
    paper: {
        height: 250,
        width: 400,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    button: {
        margin: 12
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    center: {
        textAlign: 'center'
    }
};

export default class LoginComponent extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
        <div style={styles.center}>
            <h2 style={styles.headline}>B2B</h2>
            <Paper style={styles.paper} zDepth={1}>
                <TextField
                    hintText="Email Adresse"
                    floatingLabelText="Email"
                /><br/>
                <TextField
                    hintText="Passwort"
                    floatingLabelText="Passwort"
                    type="password"
                /><br/>
                <FlatButton label="Registrieren" containerElement={<Link to="/register" />}
                            linkButton={true} primary={true} />
                <RaisedButton label="Login" style={styles.button} containerElement={<Link to="/viewCompany" />}
                              linkButton={true}/>
            </Paper>
        </div>
            </MuiThemeProvider>
        );
    }
}