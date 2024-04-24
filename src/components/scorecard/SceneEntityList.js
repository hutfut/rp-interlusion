import React from 'react'
import SceneEntity from './SceneEntity'
import './styles/SceneEntityList.css'
import _ from 'lodash'


class SceneEntityList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            entityList: [],
            entityScores: {}
        }

    }

    handleEntityScoreChange = (index, newScore) => {
        const { entityScores } = this.state
        _.set(entityScores, index, newScore)
        this.setState({entityScores: entityScores})

        this.props.updateEntityScores(this.state.entityScores)
    }

    addNewEntity = () => {

        const index = this.state.entityList.length

        const newEntity = <SceneEntity key={this.state.entityList.length} index={index} initialValue={.5} handleEntityScoreChange={this.handleEntityScoreChange}/>

        this.setState(
            {   
                entityList: this.state.entityList.concat(newEntity),
                entityScores: _.set(this.state.entityScores, index, .5)
            }
        )

        this.props.updateEntityScores(this.state.entityScores)

    }


    render () {

        const {entityList} = this.state

        return (
            <div className='scene-entities'>
                    {
                        entityList.map((entity) => {
                            return(
                                entity
                            )
                        })
                    }

                    {(!this.props.isTracking) 
                        ? <button onClick={this.addNewEntity}>Add Entity</button>
                        : null
                    }


                    
            </div>
        )
    }
}

export default SceneEntityList