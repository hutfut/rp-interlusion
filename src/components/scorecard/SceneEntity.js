import React from 'react'
import Slider from './Slider'
import ImageUploader from './ImageUploader'
import './styles/SceneEntityList.css'

class SceneEntity extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            score: this.props.initialValue,
            displayName: this.props.index
        }
    }

    handleEntityScoreChange = (value) => {
        this.setState({score: value})
        this.props.handleEntityScoreChange(this.props.index, value)
    }

    updateDisplayName = (event) => {
        this.setState({displayName: event.target.value})
        this.props.updateDisplayForIndex(this.props.index, event.target.value)
    }

    render () {
        return (
            <div className='scene-entity'>
                <ImageUploader/>
                <input onBlur={this.updateDisplayName} type='text' className="display-name-input"></input>  
                <Slider 
                    initialValue={this.props.initialValue} 
                    onChange={this.handleEntityScoreChange} 
                    orientation="horizontal" 
                    minValue={0}
                    maxValue={1}
                    valueStep={.05}
                    />
            </div>
        )
    }
}

export default SceneEntity;