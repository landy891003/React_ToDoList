import React from 'react'

export default class App extends React.Component{
    constructor(props){
      super(props);

      this.state ={
          userName:'landy',
          todoItems:[],
          newtodo :'',
      };
    }

    updateValue=(event)=>{
        this.setState({newtodo:event.target.value});
    };
    
    newtodo=()=>{
      this.setState({
        todoItems:[...this.state.todoItems,
          {action : this.state.newtodo,done:false},
        ],
      });
    };
    removeItem = (item)=> {
      var index=this.state.todoItems.indexOf(item);
      this.state.todoItems.splice(index, 1);
      this.setState({todoList: this.state.todoItems})
    }
    todorows=()=>
      this.state.todoItems.map((item)=>(
        <tr key={item.action}>
            <td>{item.action}</td>
            <td>
              <input
                type="checkbox"
                checked={item.done}
                onChange={()=>this.toggleDone(item)}
              />
              <button
                type="deletebox"
                onClick={()=>this.removeItem(item)}>
                delete
              </button>
            </td>
        </tr>
      ));
    
      toggleDone=(todo)=>
        this.setState({
          todoItems:this.state.todoItems.map((item)=>
              item.action === todo.action?{...item,done:!item.done}:item
          ),
        });

    render = () =>(
      <div>
        <h2>To Do List</h2>
        <input 
            value={this.state.newtodo} 
            onChange={this.updateValue}
        />
        <button onClick={this.newtodo}>Add</button>
        
        <table>
          <tbody>{this.todorows()}</tbody>
        </table>
      </div>
    )
}