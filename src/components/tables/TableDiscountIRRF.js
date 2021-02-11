import React, { Component } from 'react';
import './table.css';

export default class TableDiscountIRRF extends Component {
  render() {
    return (
      <div className="tables">
        <h4>Descontar o imposto de renda retido na fonte</h4>
        <p>
          Após o desconto feito para a previdência social é possível saber
          quanto se deve destinar ao imposto de renda. Este imposto é retido da
          fonte, ou seja, é descontado diretamente pelo empregador e entregue à
          Receita Federal.
          <br />
          <br />
          Para isso, existe uma tabela de IRRF (imposto de renda retido na
          fonte) que mostram as porcentagens de descontos para cada valor de
          salário bruto sem o INSS, que atualmente é a seguinte:
        </p>
        <table className="table-normal">
          <caption>Tabela de descontos ao IRRF</caption>
          <thead>
            <tr>
              <th>Base de cálculo (R$)</th>
              <th>Alíquota (%)</th>
              <th>Parcela dedutível (R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Até 1.903,98</td>
              <td>0%</td>
              <td>0,00</td>
            </tr>
            <tr>
              <td>De 1.903,99 até 2.826,65</td>
              <td>7,5%</td>
              <td>142,80</td>
            </tr>
            <tr>
              <td>De 2.826,66 até 3.751,05</td>
              <td>15%</td>
              <td>354,80</td>
            </tr>
            <tr>
              <td>De 3.751,06 até 4.664,68</td>
              <td>22,5%</td>
              <td>636,13</td>
            </tr>
            <tr>
              <td>Acima de 4.664,69</td>
              <td>27,5%</td>
              <td>869,36</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
