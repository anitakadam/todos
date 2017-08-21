import React from 'react';

export default class Todos extends React.Component {

        render() {
        	if (this.props.data && this.props.data.length == 0 ) {
        		return (<h1 id = "empty_todos_warning" >There are no todos</h1>)
        	}

        	let  todos = this.props.data.map(todo => {
        		return (<li>{todo}</li>)
        	})

            return ( <ul>
            				{todos}
            		</ul>
            	)
            }
        }