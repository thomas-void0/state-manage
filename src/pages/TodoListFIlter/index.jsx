import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilState } from "recoil"
import { todoListFilterState } from "../../store/todolist"

const TodoListFIlter = () => {
    
    const [filter,setFilter] = useRecoilState(todoListFilterState)
    const updateFilter = ({target: {value}}) => {
        setFilter(value);
    };
    
    return (
        <>
        Filter:
        <select value={filter} onChange={updateFilter}>
          <option value="Show All">All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Uncompleted">Uncompleted</option>
        </select>
      </>
    )

}

TodoListFIlter.propTypes={

}

export default TodoListFIlter