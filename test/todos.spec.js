import React from 'react'
import { shallow } from 'enzyme'
import Todos from '../src/todos'
import { expect } from 'chai'

describe("<TODO>", () => {
    it("should display 'no todos' text if no todos", () => {
        let todos = shallow( < Todos data={[]}/ > )
        expect(todos.find("#empty_todos_warning").text()).to.equal("There are no todos")
    })

    it("should not display 'no todos' text if todos", () => {
        let todos = shallow( < Todos data={["First todo"]} / > )
        expect(todos.find("#empty_todos_warning")).to.have.length(0)
        
    })

    it("should display todos", () => {
        let todos = shallow( < Todos data={["First todo"]}/ > )
        expect(todos.find("li").at(0).text()).to.equal("First todo")
    })

    it("should add new todo to existing todos", () => {
    	let todos = shallow( < Todos data={["First todo"]}/ > )
    	
    	todos.find("#add_todo_input").simulate('change', { target : { value : "New todo" } });
    	
    	todos.find("#add_todo_button").simulate('click') 

    	expect(todos.find("li").at(0).text()).to.equal("First todo")
    	expect(todos.find("li").at(1).text()).to.equal("New todo")
    })
})