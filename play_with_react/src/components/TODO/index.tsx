import React, { Component } from "react";

type PropType = {
  id: number;
  title: string;
  done?: boolean;
  deleteItem?: React.MouseEventHandler<HTMLLIElement> | any;
};

type StateType = {
  title: string;
};

class ToDoListListItem extends Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    this.state = {
      title: props.title,
    };
  }
  render() {
    return (
      <div className="todo-list-item">
        <h1>{this.state.title}</h1>
        <button
          onClick={() => {
            this.props.deleteItem(this.props.id);
          }}
        >
          delete {this.props.id}
        </button>
      </div>
    );
  }
}

class ToDoList extends Component<{ count?: number }, { count: number }, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: props.count || 10,
    };
  }

  addItem() {
    const count = this.state.count;
    this.setState({
      count: this.state.count + 1,
    });
  }

  deleteItem(id: number) {
    console.log("xxxxxx", id);
  }

  render() {
    const result = [];

    for (let i = 0; i < this.state.count; i++) {
      result.push(
        <ToDoListListItem
          key={i}
          title={`hello world ${i}`}
          id={i}
          deleteItem={this.deleteItem}
        />
      );
    }

    return (
      <div className="todo-list">
        <button onClick={this.addItem.bind(this)}>Add</button>
        {result}
      </div>
    );
  }
}

export default ToDoList;
