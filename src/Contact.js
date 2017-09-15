import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Contact extends Component {
    render() {
        let styles = {
            background : {
                backgroundColor: this.props.muiTheme.palette.contactBackgroundColor,
                paddingTop : '60px',
                paddingBottom : '60px',
                color: this.props.muiTheme.palette.contactTextColor
            }
        };
        return(
            <div className="Block" style={styles.background} id="Contact">
                <div className="Header">
                    <h4>CONTACT</h4>
                </div>
                <div className="Context">
                    <p><t>EMAIL</t></p>
                    <p>wjwlovegood@qq.com</p>
                </div>
                <div className="More">
                    <p><t>Thank you</t></p>
                </div>
                <div className="Header">
                </div>
                <div className="Context">
                    <p><t>QQ</t></p>
                    <p>287310886</p>
                </div>
                <div className="More">
                </div>
                <div className="Header">
                </div>
                <div className="Context">
                    <p><t>WeChat</t></p>
                    <p>lovegoodstudy</p>
                </div>
                <div className="More">
                </div>
            </div>
        )
    }
}

export default muiThemeable()(Contact)