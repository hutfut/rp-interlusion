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
            severity: 2.5,
            entitySnapshot: {},
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

    updateDisplayForIndex = (index, name) => {

        const {entitySnapshot, scoreAggregates} = this.state

        _.set(entitySnapshot, `${index}.displayName`, name)
        _.set(scoreAggregates, `${index}.displayName`, name)

        this.setState({entitySnapshot: entitySnapshot})
        this.setState({scoreAggregates: scoreAggregates})
    }

    updateEntityScores = (index, score) => {
        const {entitySnapshot} = this.state

        _.set(entitySnapshot, `${index}.score`, score)

        this.setState({entitySnapshot: entitySnapshot})
    }

    addNewEntity = (entity) => {
        const {entitySnapshot, scoreAggregates} = this.state

        _.set(entitySnapshot, entity.index, {'score': entity.score, 'displayName' : entity.displayName})
        _.set(scoreAggregates, `${entity.index}.displayName`, entity.displayName)
        _.set(scoreAggregates, `${entity.index}.score`, 0)


        this.setState({entitySnapshot: entitySnapshot})
        this.setState({scoreAggregates: scoreAggregates})
    }

    logScores = () => {
        const {entitySnapshot, scoreAggregates, severity} = this.state

        _.keys(entitySnapshot).forEach((key) => {

            let currentScoreSum = parseFloat(_.get(scoreAggregates, `${key}.score`, 0))
            let incomingValue =  parseFloat(entitySnapshot[key]['score']) * severity //scalar

            _.set(scoreAggregates, `${key}.score`, (currentScoreSum + incomingValue).toFixed(2))
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
                <SceneSeverity initialValue={2.5} updateSeverity={this.updateSeverity}/>
                <SceneEntityList updateDisplayForIndex={this.updateDisplayForIndex} isTracking={this.state.isTracking} addNewEntity={this.addNewEntity} updateEntityScores={this.updateEntityScores}/>
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