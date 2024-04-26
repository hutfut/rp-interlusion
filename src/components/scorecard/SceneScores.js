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
                    
                    _.keys(scoreAggregates).map((key)=>{
                            return (
                                <div key={key} className="score-item">
                                    {scoreAggregates[key]['displayName']} : {scoreAggregates[key]['score']}
                                </div>)
                        })
                }
            </div>
        )  
    }
}

export default SceneScores