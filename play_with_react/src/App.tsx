import { Component } from "react";
import "./App.less";
import RotateCard from "./components/RotateCard";
import ToDoList from "./components/TODO/index";

class App extends Component {
  render() {
    const result = [];
    for (let i = 0; i < 43; i++) {
      result.push(<RotateCard />);
    }
    return (
      <div className="layout">
        <ToDoList count={3}/>
      </div>
    );
  }
}

export default App;
