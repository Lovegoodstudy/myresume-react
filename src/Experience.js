import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton'
import SvgIcon from 'material-ui/SvgIcon';

class Experience extends Component {
    render() {
        let styles = {
            background : {
                backgroundColor: this.props.muiTheme.palette.experienceBackgroundColor,
                paddingTop : '60px',
                paddingBottom : '60px',
                color: this.props.muiTheme.palette.experienceTextColor
            }
        };
        return(
            <div className="Block" style={styles.background} id="Experience">
                <div className="Header">
                    <h4>EXPERIENCE</h4>
                </div>
                <div className="Context">
                    <p><t>Software Engineering</t></p>
                    <p>Huazhong University of Science and Technology</p>
                    <p>4 years course</p>
                </div>
                <div className="More">
                    <p>September 2015 - June 2019</p>
                </div>
                <div className="Header">
                </div>
                <div className="Context">
                    <p><t>Full Stack Development Training Camp</t></p>
                    <p>ThoughtWorks Wuhan Training Camp</p>
                    <p>7 weeks course</p>
                </div>
                <div className="More">
                    <p>July, August 2017</p>
                </div>
            </div>
        )
    }
}

export default muiThemeable()(Experience)