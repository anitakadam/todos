import React from 'react'
import { shallow } from 'enzyme'
import Todos from '../src/todos'
import { expect } from 'chai'

describe("<TODO>", () => {
    it("verify 'HELLO'", () => {
        let todo = shallow( < Todos / > )
        expect(todo.find("div").text()).to.equal("Hello")
    })
})