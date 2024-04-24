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
        this.props.updateEntityScores(index, newScore)
    }

    updateDisplayForIndex = (index, name) => {
        this.props.updateDisplayForIndex(index, name)
    }

    addNewEntity = () => {

        const index = this.state.entityList.length

        const newEntity = 
            <SceneEntity 
                key={index}
                index={index} initialValue={.5} 
                handleEntityScoreChange={this.handleEntityScoreChange}
                updateDisplayForIndex={this.updateDisplayForIndex}/>

        this.setState(
            {   
                entityList: this.state.entityList.concat(newEntity)
            }
        )

        let e = {
            'index': index,
            'displayName': index,
            'score': .5 
        }

        this.props.addNewEntity(e)

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