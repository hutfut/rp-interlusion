import React from 'react'
import './styles/InterludeOption.css'

class InterludeOption extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <div className="interlude-option-container">
                <div className="interlude-option-image"></div>
                <div className="interlude-option-header">{this.props.interludeData.title}</div>
                <div className="interlude-option-body">{this.props.interludeData.description}</div>
            </div>
        )
    }
}

export default InterludeOption;