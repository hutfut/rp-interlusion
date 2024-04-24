import React from 'react'
import Slider from './Slider'

class SceneEntity extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            initialValue: this.props.initialValue,
            index: this.props.index
        }
    }

    handleEntityScoreChange = (value) => {
        this.props.handleEntityScoreChange(this.props.index, value)
    }

    render () {
        return (
            <div className='scene-entity'>  
                <input type='text'></input>  
                <Slider initialValue={this.props.initialValue} onChange={this.handleEntityScoreChange} orientation="horizontal" />
            </div>
        )
    }
}

export default SceneEntity;