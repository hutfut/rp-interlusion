import React from "react";
import InterludeOption from "./InterludeOption";
import './styles/InterludeOptionList.css'
import generateDefaultInterludeSet from "../interlude-generator/InterludeGenerator";
import RegenerateInterludeScenarioButton from './RegenerateInterludeScenarioButton'


class InterludeOptionList extends React.Component {

    constructor(props){
        super(props);
        this.state = {interludeList: generateDefaultInterludeSet()}

        this.refreshInterludeList = this.refreshInterludeList.bind(this)
    }

    refreshInterludeList() {
        this.setState((s, p) => ({
            interludeList: generateDefaultInterludeSet()
        }))
    }

    render () {
        return (
            <div>
                <ul className="interlude-option-list">
                    <InterludeOption interludeData={this.state.interludeList.backstory} />
                    <InterludeOption interludeData={this.state.interludeList.downtime} />
                    <InterludeOption interludeData={this.state.interludeList.trek} />
                </ul>
                <RegenerateInterludeScenarioButton onClick={this.refreshInterludeList}/>
            </div>
        )
    }
}

export default InterludeOptionList;