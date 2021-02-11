import React, { Component } from 'react';
import { round } from '../../helpers/salary';
import { formatNumber } from '../../helpers/formatNumbers';
import css from './InputReadOnly.module.css';

export default class InputDiscountINSS extends Component {
  render() {
    const { changeValue, percent } = this.props;
    const formattedValue = `${formatNumber(changeValue)} (${round(percent)}%)`;
    return (
      <div className={css.discountINSS}>
        <label>Desconto INSS:</label>
        <input type="text" value={formattedValue} readOnly />
      </div>
    );
  }
}
