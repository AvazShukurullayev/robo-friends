import React, { Component } from "react";
import Cards from "../components/Cards";
// import robots from "../robots";
// import NotFound from "./NotFound";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

class App extends Component {
  state = {
    robots: [],
    search: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { robots, search } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    if (robots.length === 0) {
      return (
        <div className="row">
          <div className="col my-5 m-auto">
            <h1 className="text-center">Loading...</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app">
          <div className="container">
            <div className="shadow">
              <h1 className="text-center my-4">Robo Fr13nds</h1>
              <SearchBar onSearchChange={this.onSearchChange} />
            </div>
            <Scroll>
              <Cards robots={filteredRobots} />
            </Scroll>
          </div>
        </div>
      );
    }
  }
}

export default App;
