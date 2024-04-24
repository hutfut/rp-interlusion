import _ from 'lodash'
import React from 'react'
import './styles/SceneScores.css'

class SceneScores extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            scoreAggregates: this.props.scoreAggregates
        }
    }

    render () {

        const scoreAggregates = this.state.scoreAggregates

        return (
            <div className='scores'>
                {
                    _.entries(scoreAggregates).map((entry, index)=>{
                        return (
                            <div key={index}>
                                {entry[0]} : {entry[1]}
                            </div>)
                    })
                }
            </div>
        )  
    }
}

export default SceneScores