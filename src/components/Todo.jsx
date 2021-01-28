import React from 'react'

const Todo = (props) => {

  const {todo, todos} = props
  return (
    <div>

      {todos.map((todo) =>{
        return <>
        <div>
          <p>{todo.todo}</p>
          <button>Completed</button>
          <button>Edit</button>
        </div>
        </>
      })}
    </div>
  )
}

export default Todo
