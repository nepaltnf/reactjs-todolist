import React, { Children } from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (
    <li className='todoItem'>
        {children}
        <div classname='actionsContainer'>
            <button onClick={() => {
              handleEditTodo(index)
            }}>
            <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button onClick={() =>{
              handleDeleteTodo(index)
            }}>
            <i className="fa-regular fa-trash-can"></i>
            </button>
            </div>
    </li>
  )
}
