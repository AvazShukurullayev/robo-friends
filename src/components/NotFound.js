import React, { Component } from "react";

class NotFound extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 my-5 mx-auto">
            <h1 className="text-center my-5 text-danger">
              404! Page Not Found
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
