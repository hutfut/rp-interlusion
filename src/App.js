import './App.css';
import InterludeOptionList from './components/interlude/InterludeOptionList';
import CollapsibleContainer from './components/meta/CollapsibleContainer';
import React from 'react';
import Slider from './components/scorecard/Slider';

class InterludeApp extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <CollapsibleContainer title="Scorecard">
          <Slider initialValue={5} onChange={this.handleSliderChange} orientation="vertical" />
          <Slider initialValue={5} onChange={this.handleSliderChange} orientation="horizontal" />
        </CollapsibleContainer>

        <CollapsibleContainer title='Interludes'>
          <InterludeOptionList/>
        </CollapsibleContainer>
      </div>

    )
  }
}

export default InterludeApp;
