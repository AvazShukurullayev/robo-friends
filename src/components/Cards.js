import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  state = {};

  render() {
    const { robots } = this.props;
    return (
      <div className="row">
        {robots.map((robot) => (
          <Card robot={robot} key={robot.id} />
        ))}
      </div>
    );
  }
}

export default Cards;
