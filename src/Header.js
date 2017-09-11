import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Background from './img/header-bg.jpg'

class About extends Component {
    render() {
        let styles = {
            background: {
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                paddingTop: '150px',
                paddingBottom: '150px'
            }
        }
        return(
            <div className="Header" style={styles.background}>
                <h1 style={{fontSize: '80px', color: '#ffffff', textAlign: 'center'}}>沃 锦文</h1>
                <h3 style={{fontSize: '20px', color: '#ffffff', textAlign: 'center'}}>Full Stack developer</h3>
            </div>
        )
    }
}

export default muiThemeable()(About)