import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Background from './img/header-bg.jpg'

class Header extends Component {
    render() {
        let styles = {
            background: {
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                paddingTop: '150px',
                paddingBottom: '80px'
            }
        }
        return(
            <div className="Page-Header" style={styles.background}>
                <h1 style={{fontSize: '80px', color: '#ffffff', textAlign: 'center'}}>沃 锦文</h1>
                <h3 style={{fontSize: '20px', color: '#ffffff', textAlign: 'center'}}>Studying to Become a Full Stack Developer</h3>
            </div>
        )
    }
}

export default muiThemeable()(Header)