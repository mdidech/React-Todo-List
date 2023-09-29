import React, { useState } from 'react'
import Button from './Button'

const AddTask = (props) => {
  const [title,setTitle]=useState('');
  const handleTitle=(e)=>{
    setTitle(e.target.value);
  }
  const handleClick=(e)=>{
    e.preventDefault();
const task={
  id:Math.floor(( Math.random()) * 1000),
  title:title,
  completed:false
}
  props.addnewTask(task);

  }
  return (
    <form>
     <input type="text" name="task" value={title} placeholder='Enter Your Task' onChange={handleTitle} />
     <button className='btn' onClick={handleClick}>Add task</button>
     {/* <Button  /> */}
    </form>
  )
}

export default AddTask