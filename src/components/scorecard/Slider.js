import React, { Component } from 'react';
import './styles/Slider.css'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0 // Set initial value (default to 0)
    };
  }

  handleChange = (event) => {
    const value = parseFloat(event.target.value);
    this.setState({ value });
    if (this.props.onChange) {
      this.setState({ value }); 
    }

    this.props.onChange(value)
  };

  render() {
    const { value } = this.state;
    const { orientation, handleEntityScoreChange } = this.props;
    const isVertical = orientation === 'vertical';

    return (  
        <input
          onChange={this.handleChange}
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={value}
          orient={isVertical ? 'vertical' : 'horizontal'}
          className='slider'
        />
    );
  }
}

export default Slider;
