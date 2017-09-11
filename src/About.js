import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class About extends Component {
    render() {
        let styles = {
            background : {
                backgroundColor: this.props.muiTheme.palette.aboutColor,
                paddingTop : '100px',
                paddingBottom : '100px'
            }
        };
        return(
            <div className="About" style={styles.background}>
                Hello
            </div>
        )
    }
}

export default muiThemeable()(About)