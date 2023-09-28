import React from 'react'
import Navbar from '../components/Navbar'
import AddTask from '../components/AddTask'
import TodoList from '../components/TodoList'

import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
const TodoCrud = () => {
  return (
    <>
    <Navbar />
    <main className='add-task'>
     <div className="container">
     <AddTask />
     <TodoList>
    <div className="todo-item">
      <p>Task 1</p>
      <div className="actions">
        <FaCheck className='icon-check' />
        <RiDeleteBin5Fill className='icon-remove' />
      </div>
    </div>
    <div className="todo-item">
      <p>Task 2</p>
      <div className="actions">
        <FaCheck className='icon-check' />
        <RiDeleteBin5Fill className='icon-remove' />
      </div>
    </div>
    <div className="todo-item">
      <p>Task 3</p>
      <div className="actions">
        <FaCheck className='icon-check' />
        <RiDeleteBin5Fill className='icon-remove' />
      </div>
    </div>
     </TodoList>
     </div>
    </main>
    </>
  )
}

export default TodoCrud