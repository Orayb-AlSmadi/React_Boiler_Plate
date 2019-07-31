import React, { Component } from "react";

export default class Rows extends Component {
  state = {};

  render() {
    return (
      <tr>
        <th scope="row"> {this.props.index +1} </th>
        <td>{this.props.Rowdata.name}</td>
        <td>{this.props.Rowdata.color}</td>
        <td>{this.props.Rowdata.FavFood}</td>
        <td>{"S:"+this.props.Rowdata.location.S+"-R:"+this.props.Rowdata.location.R}</td>
        <td>
        <input type="text" className="col-sm-2  form-control" id="S" placeholder="S"/> 
        <input type="text" className="col-sm-2 form-control" id="R" placeholder="R"/>
        <button className="btn btn-primary" onClick={() => console.log('clicking', this.props.index)}>Update location</button> 
        </td>
      </tr>
    );
  }
}
