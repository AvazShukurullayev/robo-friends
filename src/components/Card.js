import React, { Component } from "react";

class Card extends Component {
  state = {};

  render() {
    const { robot } = this.props;
    return (
      <div className="col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 mx-auto" >
        <div className="card text-center">
          <div className="card-header">
            <h5>{robot.username}</h5>
          </div>
          <div className="card-body">
            <img src={`https://robohash.org/${robot.id}`} className="img-fluid" alt={robot.name} />
          </div>
          <div className="card-footer">
            <h4>{robot.name}</h4>
            <p><a href="#!">{robot.email}</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
