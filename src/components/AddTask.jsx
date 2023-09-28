import React from 'react'
import Button from './Button'

const AddTask = () => {
  return (
    <form>
     <input type="text" name="task" placeholder='Enter Your Task' />
     <Button />
    </form>
  )
}

export default AddTask