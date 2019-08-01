import React, { Component } from "react";
import Table from "./components/Table";

export default class App extends Component {
  state = {
    data: [
      {
        name: "jo",
        color: "red",
        FavFood: "potato",
        location: {
          S: 1,
          R: 2
        }
      },

      {
        name: "jo",
        color: "red",
        FavFood: "potato",
        location: {
          S: 1,
          R: 2
        }
      },

      {
        name: "jo",
        color: "red",
        FavFood: "potato",
        location: {
          S: 1,
          R: 2
        }
      },

      {
        name: "jo",
        color: "red",
        FavFood: "potato",
        location: {
          S: 1,
          R: 2
        }
      }
    ]
  };

  changeMainState = (location, index) => {
    let newData = [...this.state.data]
    newData[index].location.S = location.S;
    newData[index].location.R = location.R;
    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <>
        <h1 className="text-center"> Dragon Zoo </h1>
        <Table fun= {this.changeMainState} data={this.state.data} />
      </>
    );
  }
}
