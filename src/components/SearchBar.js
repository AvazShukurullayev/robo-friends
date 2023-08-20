import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3 mx-auto mx-sm-0">
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search robo friend..."
              onChange={(e) => this.props.onSearchChange(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
