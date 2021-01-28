import React, {useState} from 'react'

const Header = (props) => {
 const{todo} =props.form

  return (
    <>
      <div>
        <h1>Your todo's!</h1>
        <input type="text" name ="todo" placeholder="Todo today?"/>
        <button>Add To Do</button>
      </div>
    </>
  )
}

export default Header
