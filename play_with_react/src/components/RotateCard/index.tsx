import { Component } from "react";
import "./index.less";

class RotateCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-side front">
          <div>Front Side</div>
        </div>
        <div className="card-side back">
          <div>Back Side</div>
        </div>
      </div>
    );
  }
}

export default RotateCard;
