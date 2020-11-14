import { hot } from "react-hot-loader/root";
import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

export default hot(App);
