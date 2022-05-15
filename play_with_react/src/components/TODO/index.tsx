import React, { Component } from "react";

type ToDoListItemType = {
  id: number;
  title: string;
  done?: boolean;
};

type PropType = {
  id: number;
  title: string;
  done?: boolean;
  deleteItem?: React.MouseEventHandler<HTMLLIElement> | any;
};

type StateType = {
  item: ToDoListItemType;
};

class ToDoListListItem extends Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    this.state = {
      item: props,
    };
  }
  render() {
    return (
      <div className="todo-list-item">
        <h1>{this.state.item.title}</h1>
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

const mockData = [
  {
    id: 1,
    title: "hello world 123",
    done: false,
  },
  {
    id: 2,
    title: "hello world 456",
    done: false,
  },
];

class ToDoList extends Component<
  { count?: number },
  { list: ToDoListItemType[] },
  any
> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: mockData,
    };
  }

  addItem() {
    const list = this.state.list;
    list.push({
      id: Math.random(),
      title: "todo",
    });
    this.setState({
      list: list,
    });
  }

  deleteItem(id: number) {
    // console.log("xxxxxx", id);
    const list = this.state.list;
    const delete_index = list.findIndex((item) => item.id === id);
    list.splice(delete_index, 1);
    this.setState({
      list,
    });
  }

  render() {
    const result = this.state.list.map((item, i) => {
      return (
        <ToDoListListItem
          key={i}
          {...item}
          deleteItem={this.deleteItem.bind(this)}
        />
      );
    });

    return (
      <div className="todo-list">
        <button onClick={this.addItem.bind(this)}>Add</button>
        {result}
      </div>
    );
  }
}

export default ToDoList;
