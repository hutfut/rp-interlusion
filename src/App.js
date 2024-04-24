import './App.css';
import InterludeOptionList from './components/interlude/InterludeOptionList';
import CollapsibleContainer from './components/meta/CollapsibleContainer';
import React from 'react';
import SceneManager from './components/scorecard/SceneManager';

class InterludeApp extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <CollapsibleContainer title="Scorecard">
          <SceneManager/>
        </CollapsibleContainer>

        <CollapsibleContainer title='Interludes'>
          <InterludeOptionList/>
        </CollapsibleContainer>
      </div>

    )
  }
}

export default InterludeApp;
