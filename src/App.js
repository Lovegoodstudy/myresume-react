import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal100, teal500, teal800, teal50, teal700} from 'material-ui/styles/colors'

import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'

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
        educationTextColor : '#444444',
        skillsBackgroundColor : teal800,
        skillsTextColor : '#cccccc',
        experienceBackgroundColor : teal50,
        experienceTextColor : '#333333',
        contactBackgroundColor : teal700,
        contactTextColor : '#dddddd'
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
                    <Skills/>
                    <Experience/>
                    <Contact/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
