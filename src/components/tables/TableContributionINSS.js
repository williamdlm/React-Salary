import React, { Component } from 'react';
import './table.css';

export default class TableContributionINSS extends Component {
  render() {
    return (
      <div className="tables">
        <h4>Descontar o INSS do salário bruto:</h4>
        <p>
          O INSS é descontado para que, futuramente, se torne sua aposentadoria,
          ou caso venha a ser demitido, servirá como base para o pagamento do
          seguro-desemprego.
          <br />
          <br />
          Seu cálculo é feito pelo salário bruto multiplicado por uma
          porcentagem, e este valor será destinado à previdência social. A
          alíquota descontada depende do valor do salário:
        </p>
        <table className="table-normal">
          <caption>Tabela de contribuição INSS 2020</caption>
          <thead>
            <tr>
              <th scope="col">Salário de contribuição</th>
              <th scope="col">Alíquota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salário mínimo: R$ 1.045,00</td>
              <td>7,5%</td>
            </tr>
            <tr>
              <td>De R$ 1.045,01 a R$ 2.089,60</td>
              <td>9%</td>
            </tr>
            <tr>
              <td>De R$ 2.089,61 a R$ 3.134,40</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>De R$ 3.134,41 a R$ 6.101,06</td>
              <td>14%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
