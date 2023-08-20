import React, { Component } from "react";

class Scroll extends Component {
  state = {};
  render() {
    return (
      <div style={{ overflow: "scroll", height: "70vh" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
