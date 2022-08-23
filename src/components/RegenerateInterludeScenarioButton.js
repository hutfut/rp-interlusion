import React from 'react';
import './styles/RegenerateInterludeScenarioButton.css'

class RegenerateInterludeScenarioButton extends React.Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className='regen-interlude-container'>
                <button onClick={this.props.onClick}>Generate New Interludes</button>
            </div>
        )
    }
}

export default RegenerateInterludeScenarioButton;