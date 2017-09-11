import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class NavBar extends Component {
    render () {
        let styles = {
            iconsBar : {
                margin : '0 auto 0 auto'
            },
            icons : {
                width:'24px',
                height:'24px'
            }
        };
        return (
            <AppBar showMenuIconButton={false} style={{position : 'fixed'}}>
                <div className="iconsBar" style={styles.iconsBar}>
                    <IconButton tooltip="Introduction">
                        <svg style={styles.icons} viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                        </svg>
                    </IconButton>
                    <IconButton tooltip="Education">
                        <svg style={styles.icons} viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" />
                        </svg>
                    </IconButton>
                    <IconButton tooltip="Experience">
                        <svg style={styles.icons} viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M14,6H10V4H14M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z" />
                        </svg>
                    </IconButton>
                    <IconButton tooltip="Contact With Me">
                        <svg style={styles.icons} viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                        </svg>
                    </IconButton>
                </div>
            </AppBar>
        )
    }
}

export default NavBar;