import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton'
import SvgIcon from 'material-ui/SvgIcon';

class About extends Component {
    render() {
        let styles = {
            background : {
                backgroundColor: this.props.muiTheme.palette.aboutBackgroundColor,
                paddingTop : '60px',
                paddingBottom : '60px',
                color: this.props.muiTheme.palette.aboutTextColor
            }
        };
        return(
            <div className="Block" style={styles.background} id="About">
                <div className="Header">
                    <h4>ABOUT</h4>
                </div>
                <div className="Context">
                    <p>Now, I'm a full-time student and I've studied in my major Software Engineering for 2 years. I'm interested in all kinds of software development, but my major focus is on web development. I've learned some web development skills but I'm still learning to become a Full Stack developer. </p>
                </div>
                <div className="More">
                    <FlatButton
                        style={{color: '#ffffff', marginTop : '16px'}}
                        target="_blank"
                        label="Download PDF"
                        icon={
                            <SvgIcon>
                                <path fill="#ffffff" d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
                            </SvgIcon>
                        }
                    />
                </div>
            </div>
        )
    }
}

export default muiThemeable()(About)