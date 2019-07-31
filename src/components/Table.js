import React, { Component } from 'react';
import Rows from './Rows';

export default class Table extends Component {
  state = {
  };

  render() {
    return (
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Color</th>
          <th scope="col">Fav Food</th>
          <th scope="col">location</th>
          <th scope="col">update location</th>
        </tr>
      </thead>
      <tbody>
      {this.props.data.map( (x,i) =>
        {
        return <Rows key={i} Rowdata ={x} index={i} />
        })}
  </tbody>
    </table>
    );
  }
}
