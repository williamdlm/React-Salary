import React, { Component } from 'react';
import { round } from '../../helpers/salary';
import { formatNumber } from '../../helpers/formatNumbers';
import css from './InputReadOnly.module.css';

export default class InputNetSalary extends Component {
  render() {
    const { changeValue, percent } = this.props;
    const formattedValue = `${formatNumber(changeValue)} (${round(percent)}%)`;
    return (
      <div className={css.netSalary}>
        <label>Salário liquido:</label>
        <input type="text" value={formattedValue} readOnly />
      </div>
    );
  }
}
