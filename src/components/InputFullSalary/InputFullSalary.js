import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newValue = event.target.value;
    this.props.changeInput(newValue);
  };

  render() {
    const { currentValue } = this.props;
    return (
      <div>
        <label>Salário bruto:</label>
        <input
          autoFocus
          type="number"
          onChange={this.handleInputChange}
          value={currentValue}
          defaultValue="1000"
          min="1000"
          step="100"
        />
      </div>
    );
  }
}
