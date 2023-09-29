import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import AddTask from '../components/AddTask'
import TodoList from '../components/TodoList'
import {todos} from "../assets/data";

import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
const TodoCrud = () => {
  const [todoItems,setTodoItems]=useState(todos);

  const addNewTask=(newTask)=>{
    setTodoItems([...todoItems,newTask]);
  }
  return (
    <>
    <Navbar />
    <main className='add-task'>
     <div className="container">
     <AddTask addnewTask={addNewTask} />
     <TodoList>

    {todoItems.map((item)=>{
      return (
          <div className="todo-item" key={item.id}>
            {item.completed ? (<s>{item.title}</s>):(<p>{item.title}</p>) }
            
              <div className="actions">
                <FaCheck className='icon-check' />
                <RiDeleteBin5Fill className='icon-remove' />
              </div>  
          </div>

        )
      })}
     </TodoList>
     </div>
    </main>
    </>
  )
}

export default TodoCrud