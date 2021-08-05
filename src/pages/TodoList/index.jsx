import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilState } from "recoil"
import { textState } from "../../store/todolist"
import TodoItemCreator from '../TodoItemCreator'

const TodoList = () => {
    
    console.log("gogogogogogog")

    const [text, setText] = useRecoilState(textState)
    
    return (
        <div>
            <TodoItemCreator />
            {text.map(item => <li>{item}</li>)}
        </div>
    )

}

TodoList.propTypes={

}

export default TodoList