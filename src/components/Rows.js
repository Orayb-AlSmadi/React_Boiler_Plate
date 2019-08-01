import React, { Component } from "react";

export default class Rows extends Component {
  state = {};

  handleChange(event) {
    this.setState({S: event.target.value});
  }

  handleChange2(event) {
    this.setState({R: event.target.value});
  }

  render() {
    return (
      <tr>
        <th scope="row"> {this.props.index +1} </th>
        <td>{this.props.Rowdata.name}</td>
        <td>{this.props.Rowdata.color}</td>
        <td>{this.props.Rowdata.FavFood}</td>
        <td>{"S:"+this.props.Rowdata.location.S+"-R:"+this.props.Rowdata.location.R}</td>
        <td>
        <div className="input-group">
        <input type="text" className="col-sm-2  form-control" id="S" placeholder="S" value={this.state.value} onChange={this.handleChange.bind(this)}/> 
        <input type="text" className="col-sm-2 form-control" id="R" placeholder="R" value={this.state.value} onChange={this.handleChange2.bind(this)}/>
        </div>
   
        <button className="btn btn-primary" onClick={() => this.props.fun1(this.state,this.props.index)}>Update location</button> 
        </td>
      </tr>
    );
  }
}


//onClick={this.changeMainState(this.props.index).bind}
//onClick={() => console.log('clicking', this.props.index)}