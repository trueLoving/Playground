import { Component } from "react";
import "./App.less";
import RotateCard from "./components/RotateCard";

class App extends Component {
  render() {
    const result = [];
    for (let i = 0; i < 43; i++) {
      result.push(<RotateCard />);
    }
    return <div className="layout">{result}</div>;
  }
}

export default App;
