import React from 'react'
import { shallow } from 'enzyme'
import Todos from '../src/todos'
import { expect } from 'chai'

describe("<TODOS>", () => {
    it("should display 'no todos' text if no todos", () => {
        let todos = shallow( < Todos data={[]}/ > )
        expect(todos.find("#empty_todos_warning").text()).to.equal("There are no todos")
    })

    it("should not display 'no todos' text if todos", () => {
    	const data = [{name: "First todo", completed: false}]
        let todos = shallow( < Todos data={data}/ > )
        expect(todos.find("#empty_todos_warning")).to.have.length(0)
        
    })

    it("should display todos", () => {
    	let todoItemData = {name: "First todo", completed: false}
        let todos = shallow( < Todos data={[todoItemData]}/ > )

        console.log(todos.find("TodoItem").at(0).props);

        expect(todos.find("TodoItem").at(0).props().todo).to.equal(todoItemData);
    })

    it("should add new todo to existing todos", () => {
    	let todoItemData = {name: "First todo", completed: false}
		let todos = shallow( < Todos data={[todoItemData]}/ > )
    	
    	todos.find("#add_todo_input").simulate('change', { target : { value : "New todo" } });
    	
    	todos.find("#add_todo_button").simulate('click') 

		expect(todos.find("TodoItem").at(0).props().todo).to.equal(todoItemData);
		expect(todos.find("TodoItem").at(1).props().todo.name).to.equal("New todo");
    })
})