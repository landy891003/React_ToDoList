import React from "react";
class App extends React.Component {
  setCurrentToDoItem = toDoItem => {
    this.setState({
      currentToDoItem: toDoItem
    });
  };

  saveToDoListItem = toDoItem => {
    this.setState({
      toDoList: [...this.state.toDoList, toDoItem]
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      currentToDoItem: null,
      toDoList: []
    };
  }

  handleClick = e => {
    e.target.classList.toggle("strikeThrough");
  };

  removeItem = (index)=> {
    this.state.toDoList.splice(index, 1);
    this.setState({toDoList: this.state.toDoList})
  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <label>To Do Item: </label>
        <input
          onChange={event => this.setCurrentToDoItem(event.target.value)}
        />
        <button onClick={() => this.saveToDoListItem(this.state.currentToDoItem)}>
        Add Item
        </button>
        <p>{this.state.currentToDoItem}</p>
        <p>To Do Items</p>
        <div class="block">
          {this.state.toDoList.map((item, index) => (
            <div>
              <p key={index} onClick={this.handleClick} style={{display: "inline-block"}}>{item}{" "}</p>
              <button onClick={this.removeItem}>delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
