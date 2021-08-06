import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilState } from "recoil"
import { textState } from "../../store/todolist"
import TodoItemCreator from '../TodoItemCreator'
import TodoItem from "../TodoItem"
import TodoListFIlter from '../TodoListFIlter'

const TodoList = () => {
    
    console.log("gogogogogogog")

    const [text, setText] = useRecoilState(textState)
    
    return (
        <div>
            <TodoListFIlter />
            <TodoItemCreator />
            {text.map(todoItem => <TodoItem key={todoItem.id} item={todoItem} />)}
        </div>
    )

}

TodoList.propTypes={

}

export default TodoList