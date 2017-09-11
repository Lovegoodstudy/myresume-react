import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Education extends Component {
    render() {
        let styles = {
            background : {
                backgroundColor: this.props.muiTheme.palette.educationBackgroundColor,
                paddingTop : '60px',
                paddingBottom : '60px',
                color: this.props.muiTheme.palette.educationTextColor
            }
        };
        return(
            <div className="Block" style={styles.background} id="Education">
                <div className="Header">
                    <h4>EDUCATION</h4>
                </div>
                <div className="Context">
                    <p>Now, I'm a full-time student and I've studied for 2 years. I'm interested in all kinds of software development, but my major focus is on web development. I've learned some web development skills after class but I'm still learning to become a Full Stack developer. </p>
                </div>
            </div>
        )
    }
}

export default muiThemeable()(Education)