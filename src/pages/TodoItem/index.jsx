import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilState } from "recoil"
import { textState } from "../../store/todolist"

const TodoItem = ({ item }) => {
    
    const [_textState, setTextState] = useRecoilState(textState)
    //查找索引值
    const index = _textState.findIndex((listItem) => listItem === item);

    //编辑
    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(_textState, index, {
            ...item,
            text:value
        })

        setTextState(newList);
    }

    //消费
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(_textState, index, {
          ...item,
          isComplete: !item.isComplete,
        });
    
        setTextState(newList);
    };  

    // 删除
    const deleteItem = () => {
        const newList = removeItemAtIndex(_textState, index);
    
        setTextState(newList);
    };

    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }
      
    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    return (
        <div>
            <input
                type="text"
                value={item.text}
                onChange={editItemText}
            />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
      </div>
    )

}

TodoItem.propTypes={

}

export default TodoItem