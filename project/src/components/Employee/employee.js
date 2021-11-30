import React, { Component } from 'react'
import './employee.css'
class Contact extends Component {
  render () {
    return (
      <div className='container'>
        <br />
        <br />
        <br />
        <br />
        <h1>Ficha das Assistências</h1>

        <br />
        <table class='table table-bordered table-hover'>
          <thead>
            <tr>
              <th scope='col'>Nome</th>
              <th scope='col'>Email</th>
              <th scope='col'>Equipamento</th>
              <th scope='col'>Modelo da máquina</th>
              <th scope='col'>Descriçao do problema</th>
              <th scope='col'>Data da compra</th>
              <th scope='col'>Data da Assistência</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Técnico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Contact
