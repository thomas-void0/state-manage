import React from 'react'
import PropTypes from 'prop-types'
import { useSetRecoilState } from "recoil"
import { textState } from "../../store/todolist"

const TodoItemCreator = () => {

    const [inputValue, setInputValue] = React.useState('')
    
    const setTextState = useSetRecoilState(textState)

    const addItem = () => {
        setTextState((oldTextState)=> [
            ...oldTextState,
            {
                id: Date.now(),
                text: inputValue,
                isComplete:false
            }
        ])
    }

    const onChange = ({ target: { value } }) => {
        setInputValue(value)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )

}

TodoItemCreator.propTypes={

}

export default TodoItemCreator