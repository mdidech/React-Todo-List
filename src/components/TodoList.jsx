import React from 'react'
// {children}=props
const TodoList = (props) => {

  return (
    <div className='todo-list'>
     {props.children}
    </div>
  )
}

export default TodoList