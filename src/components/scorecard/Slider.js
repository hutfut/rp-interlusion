import React, { Component } from 'react';

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
      this.props.onChange(value);
    }
  };

  render() {
    const { value } = this.state;
    const { orientation } = this.props;
    const isVertical = orientation === 'vertical';

    return (  
        <input
          appearance='slider-vertical'
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={value}
          onChange={this.handleChange}
          orient={isVertical ? 'vertical' : 'horizontal'}
        />
    );
  }
}

export default Slider;
