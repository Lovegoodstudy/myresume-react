import React,{Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import CircularProgress from 'material-ui/CircularProgress';

class SkillCircle extends Component {
    render() {
        return(
            <div className="SkillCircle">
                <div>
                    <CircularProgress
                        color={'#eeeeee'}
                        mode="determinate"
                        value={100}
                        size={140}
                        thickness={8}
                        style={{transform: 'rotate(-90deg)',position:'absolute'}}
                    />
                    <CircularProgress
                        mode="determinate"
                        value={this.props.value}
                        size={140}
                        thickness={8}
                        style={{transform: 'rotate(-90deg)'}}
                    />
                </div>
                {this.props.label}
            </div>
        )
    }
}

export default muiThemeable()(SkillCircle)