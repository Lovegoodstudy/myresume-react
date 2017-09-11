import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class About extends Component {
    render() {
        return(
            <div className="About" style={{backgroundColor: this.props.muiTheme.palette.aboutColor}}>
                Hello
            </div>
        )
    }
}

export default muiThemeable()(About)