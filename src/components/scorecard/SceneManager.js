import React from 'react'
import SceneSeverity from './SceneSeverity';
import SceneEntityList from './SceneEntityList'
import SceneScores from './SceneScores'
import './styles/SceneManager.css'
import  _ from 'lodash';


class SceneManager extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            isTracking: false,
            severity: 5,
            entityScores: {},
            interval: null,
            scoreAggregates: {}
        }
    }

    toggleTracking = () => {
        this.setState({isTracking: !this.state.isTracking})
    }

    updateSeverity = (value) => {
        this.setState({severity: value})
    }

    updateEntityScores = (entityData) => {
        this.setState({entityScores: entityData})
    }

    logScores = () => {
        const {entityScores} = this.state
        const {scoreAggregates} = this.state

        _.entries(entityScores).forEach((entry) => {
            _.set(scoreAggregates, entry[0], parseFloat(_.get(scoreAggregates, entry[0], 0)) + parseFloat(entry[1]))
        })

        this.setState({scoreAggregates: scoreAggregates})
    }

    startSceneTracking = () => {
        this.toggleTracking()

        //TODO: customize timeout. scale with severity?
        this.setState({interval: setInterval(this.logScores, 1000)})
    }

    stopTracking = () => {
        this.toggleTracking()
        clearInterval(this.state.interval)
        this.setState({interval: null})
    }


    render () {

        return (
            
            <div>
                <SceneSeverity initialValue={5} updateSeverity={this.updateSeverity}/>
                <SceneEntityList updateEntityScores={this.updateEntityScores} isTracking={this.state.isTracking}/>
                <SceneScores scoreAggregates={this.state.scoreAggregates}/>

                <div className='scene-manager-buttons'>
                    {(!this.state.isTracking) 
                        ? <button onClick={this.startSceneTracking}>Start New Scene</button>
                        : <button onClick={this.stopTracking}>Stop Scene</button>
                    }
                </div>

 
                
            </div>
        ) 
    }
    
}

export default SceneManager;