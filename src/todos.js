import React from 'react';

export default class Todos extends React.Component {

		constructor(props) {
			super(props)
			this.state = {todos : props.data, newTodo: ""};
		}

		addTodo = () => {
			this.state.todos.push(this.state.newTodo)
			this.setState({todos : this.state.todos})
		}

		assignTodo = e => {
			this.setState({newTodo : e.target.value})
		} 

        render() {
        	let todos = this.state.todos
        	if (todos && todos.length == 0 ) {
        		return (<h1 id = "empty_todos_warning" >There are no todos</h1>)
        	}

        	let todoItems = todos.map(todo => {
        		return (<li>{todo}</li>)
        	})

            return ( <div>
            			<div>	
            				<input type="text" id="add_todo_input" onChange={this.assignTodo}></input>
            				<button id="add_todo_button" onClick={this.addTodo}>Add Todo</button>
            			</div>
	            		<ul>
	            				{todoItems}
	            		</ul>
	            	</div>
            	)
            }
        }