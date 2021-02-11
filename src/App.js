import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import { calculateSalaryFrom } from './helpers/salary';
import InputDiscountINSS from './components/InputReadOnly/InputDiscountINSS';
import InputBaseIRPF from './components/InputReadOnly/InputBaseIRPF';
import InputDiscountIRPF from './components/InputReadOnly/InputDiscountIRPF';
import InputNetSalary from './components/InputReadOnly/InputNetSalary';
import './App.css';
import InputBaseINSS from './components/InputReadOnly/InputBaseINSS';
import TableContributionINSS from './components/tables/TableContributionINSS';
import TableDiscountIRRF from './components/tables/TableDiscountIRRF';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 1000,
    };
  }

  handleChangeSalary = (newSalary) => {
    this.setState({ fullSalary: newSalary });
  };

  percent = (currentValue, totalValue) => {
    const resultPercent = (currentValue / totalValue) * 100;
    return resultPercent;
  };

  render() {
    const { fullSalary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);
    return (
      <div className="containerGeral">
        <h1 style={{ textAlign: 'center' }}>React Salario</h1>
        <InputFullSalary
          currentValue={fullSalary}
          changeInput={this.handleChangeSalary}
        />

        <div className="containerInputs">
          <InputBaseINSS changeValue={baseINSS} />
          <InputDiscountINSS
            changeValue={discountINSS}
            percent={this.percent(discountINSS, baseINSS)}
          />
          <InputBaseIRPF changeValue={baseIRPF} />
          <InputDiscountIRPF
            changeValue={discountIRPF}
            percent={this.percent(discountIRPF, baseIRPF)}
          />
          <InputNetSalary
            changeValue={netSalary}
            percent={(netSalary / baseIRPF) * 100}
          />
        </div>
        <div className="barContainer">
          <div
            className="orange"
            style={{ flex: `${this.percent(discountINSS, baseINSS)}%` }}
          ></div>
          <div
            className="red"
            style={{ flex: `${this.percent(discountIRPF, baseIRPF)}%` }}
          ></div>
          <div
            className="green"
            style={{ flex: `${this.percent(netSalary, baseINSS)}%` }}
          ></div>
        </div>
        <TableContributionINSS />
        <TableDiscountIRRF />
      </div>
    );
  }
}
