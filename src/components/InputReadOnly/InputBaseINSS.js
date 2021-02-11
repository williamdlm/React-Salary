import React, { Component } from 'react';
import { formatNumber } from '../../helpers/formatNumbers';
import css from './InputReadOnly.module.css';

export default class InputBaseInss extends Component {
  render() {
    const { changeValue } = this.props;
    return (
      <div className={css.inputRead}>
        <label>Base INSS:</label>
        <input type="text" value={formatNumber(changeValue)} readOnly />
      </div>
    );
  }
}
