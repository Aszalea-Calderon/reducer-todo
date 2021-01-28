import React, { useState } from 'react'




const Todo = (props) => {

const [editing, setEditing]=useState(false)

  const {todo, todos, handleSubmit, handleEditing, dispatch, addToDo, handleChanges, handleDelete, handleMarkSingleCompleted} = props
  return (
    <>
  {!editing ? (
    <> {todos.map((todo) =>{
      return <>
      <div>
        <p>{todo.todo}</p>
        <button 
        onClick={() =>{
          handleMarkSingleCompleted(todo.id)
        }}>Completed</button>
        <button onClick={() =>{
          setEditing(!editing)
          handleEditing(todo.id)
        }}>Edit</button>
        <button onClick={() =>
    handleDelete(todo.id)
  }>Delete Item</button>
      </div>
      </>
    })}
    </>
  ):<>
  <br></br>
  <input 
  type="text"
  //!FIX THIS. IT IS NOT UPDATING THE STATE TO EDIT
  onChange={handleChanges}
  name="toDo"
  placeholder="Edit To do"
  ></input>
  <button>Finish edit</button>
  <button
  >Delete Item</button>
  </>}
    
    </>
  )
}

export default Todo
