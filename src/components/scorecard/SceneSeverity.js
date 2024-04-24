import React from 'react'
import Slider from './Slider'
import './styles/SceneSeverity.css'

class SceneSeverity extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            initialValue: this.props.initialValue
        }
    }

    updateSeverity = (value) => {
        this.props.updateSeverity(value)
    }

    render () {
        
        return (
            <div className='scene-severity'>
                <div>Severity</div>
                <Slider initialValue={this.state.initialValue} onChange={this.updateSeverity} orientation="vertical" />
            </div> 
        )
    }
}

export default SceneSeverity;