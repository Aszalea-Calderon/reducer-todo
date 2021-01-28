import React, { useState } from 'react'




const Todo = (props) => {

const [editing, setEditing]=useState(false)

  const {todo, todos, handleEditing} = props
  return (
    <>
  {!editing ? (
    <> {todos.map((todo) =>{
      return <>
      <div>
        <p>{todo.todo}</p>
        <button>Completed</button>
        <button onClick={() =>{
          setEditing(!editing)
          handleEditing(todo.id)
        }}>Edit</button>
      </div>
      </>
    })}
    </>
  ):<>
  <br></br>
  <input ></input>
  <button>Finish edit</button>
  <button>Delete Item</button>
  </>}
     
    </>
  )
}

export default Todo
