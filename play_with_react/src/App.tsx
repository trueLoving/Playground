import { Button } from "antd";
import { Component } from "react";
import "./App.less";
import axios from "axios";

class App extends Component {
  test() {
    console.log("hello world");
    axios
      .get("https://api.github.com/users/trueLoving")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="layout">
        <Button onClick={this.test.bind(this)}>Hello World</Button>
      </div>
    );
  }
}

export default App;
