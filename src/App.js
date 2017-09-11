import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal100, teal500, teal900, tealA200, tealA700} from 'material-ui/styles/colors'

import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Education from './Education'

const muiTheme = getMuiTheme({
    appBar: {
        height: 48,
        color: teal500
    },
    palette: {
        appBarColor : teal500,
        aboutBackgroundColor : teal500,
        aboutTextColor : '#ffffff',
        educationBackgroundColor : teal100,
        educationTextColor : '#444444'
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <NavBar/>
                    <Header/>
                    <About/>
                    <Education/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
