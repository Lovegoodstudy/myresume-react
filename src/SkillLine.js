import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import LinearProgress from 'material-ui/LinearProgress';

class SkillLine extends Component {
    render() {
        return(
            <div className="SkillLine">
                {this.props.label}:
                <div>
                    <LinearProgress
                        mode="determinate"
                        value={this.props.value}
                        style={{}}
                    />
                </div>
            </div>
        )
    }
}

export default muiThemeable()(SkillLine)