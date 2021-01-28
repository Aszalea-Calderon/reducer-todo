import { useReducer, useState } from "react";
import "./App.css";
import toDoReducer from "./reducers/toDoReducer";
import ToDo from "./components/Todo";
import actions from "./actions/toDoActions";

const INITALSTATE = {
  todos: [
    {
      //1) make what the state will look like, Shape the state
      todo: "Eat food",
      completed: false,
      id: new Date(), //This is used so it looks like a normal backend. this creates a fake id
    },
  ],
};

//This is pulling in the actions needed from action.
const {
  addToDo,
  editToDo,
  deleteOneItem,
  markAllCompleted,
  markSingleCompleted,
  clearAllCompleted,
} = actions;

function App() {
  const [state, dispatch] = useReducer(toDoReducer, INITALSTATE);

  //Application level State
  const [newToDo, setNewToDo] = useState("");

  //Actionable things
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(newToDo));
  };

  const handleEditing = (id) => {
    dispatch(editToDo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteOneItem(id));
  };

  const handleChanges = (e) => {
    setNewToDo(e.target.value);
  };

  const handleMarkAllCompleted = (e) => {
    dispatch(markAllCompleted(e));
  };

  const handleMarkSingleCompleted = (e) => {
    dispatch(markSingleCompleted(e));
  };
  return (
    <>
      <div className="App">
        <h1>ToDo</h1>
        <input
          type="text"
          onChange={handleChanges}
          name="toDo"
          placeholder="What do you need to do today?"
        />
        <button onClick={handleSubmit}>Add to do</button>
        <br></br>
        <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
        <button>Clear All Completed</button>
        <button>Delete All Items</button>
        {/* //Todo's -- Edit, Delete*/}
        <ToDo
          handleMarkSingleCompleted={handleMarkSingleCompleted}
          handleEditing={handleEditing}
          handleSubmit={handleSubmit}
          handleChanges={handleChanges}
          dispatch={dispatch}
          addToDo={addToDo}
          todos={state.todos}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
