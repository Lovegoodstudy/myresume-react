import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal50, teal500, teal900, tealA200, tealA700} from 'material-ui/styles/colors'

import NavBar from './NavBar'
import Header from './Header'
import About from './About'

const muiTheme = getMuiTheme({
    appBar: {
        height: 48,
        color: teal500
    },
    palette: {
        appBarColor : teal500,
        aboutColor : teal50,
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
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
