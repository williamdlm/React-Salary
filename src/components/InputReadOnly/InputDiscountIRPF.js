import React, { Component } from 'react';
import { round } from '../../helpers/salary';
import { formatNumber } from '../../helpers/formatNumbers';
import css from './InputReadOnly.module.css';

export default class InputDiscountIRPF extends Component {
  render() {
    const { changeValue, percent } = this.props;
    const formattedValue = `${formatNumber(changeValue)} (${round(percent)}%)`;
    return (
      <div className={css.discountIRPF}>
        <label>Desconto IRPF:</label>
        <input type="text" value={formattedValue} readOnly />
      </div>
    );
  }
}
