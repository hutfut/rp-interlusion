import './App.css';
import InterludeOptionList from './components/InterludeOptionList';
import React from 'react';

class InterludeApp extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <InterludeOptionList/>
      </div>
    )
  }
}

export default InterludeApp;
