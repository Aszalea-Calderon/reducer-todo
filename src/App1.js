import { useReducer, useState } from "react";
import "./App.css";
//import { initialState } from "./components/initalState";
import toDoReducer, { SET_TO_DO } from "./reducers/toDoReducer";
//import ToDos from "./components/Todos";

const initialState = {
  todo: [],
  input: "",
  completed: false,
};

function App() {
  //const [state, dispatch] = useReducer(toDoReducer, initialState);
  //const { todo, editing } = state;

  //Fake state for now
  const [todo, setToDo] = useState(initialState);

  //Application level State
  //const [editToDo, setEditToDo] = useState([]);
  //const [todo, setTodo] = useState("Play games");

  //To Edit the page,
  const [editing, setEditing] = useState(false);

  //handleChanges
  const handleChanges = (e) => {
    const { value, name } = e.target;
    const valueToUse = value;
    setToDo({ ...todo.todo, [name]: valueToUse });
  };
  //--THE STEPS--//

  //Gather the local state-- Get this working first.
  //be sure that is functioning properly- the correct data structure. no undefined.
  //stick in in an array
  //map that array to the page
  //THEN dispatch it to the store ( this is the global state)

  return (
    <div className="App">
      <h1>To Do List</h1>
      <h3>Add new to do's</h3>
      <input
        type="text"
        //value="text"
        onChange={handleChanges}
        name="toDo"
        placeholder="What do you need to do today?"
      />
      <button
        onClick={() => {
          setToDo(todo);
          // dispatch({
          //   type: SET_TO_DO,
          //   payload: editToDo,
          // }); /*This is the value that is being set, be sure this is the right value going in, check the data that is being recived.   */
        }}
      >
        Add to do
      </button>

      {/* <ToDos or not toDos /> */}
      {!editing ? (
        <>
          <h1> My Todo's</h1>
          {todo.todo}
          <button
            onClick={() => {
              setEditing(!editing);
            }}
          >
            Edit
          </button>
          <button>Delete</button>
        </>
      ) : (
        <div>
          {todo.length === 0 ? (
            <h1>Add New todo</h1>
          ) : (
            todo.map((todo) => (
              <>
                <p>{todo.todo}</p>
                <input
                  type="text"
                  name="newToDo"
                  placeholder="edit" /*Add here value*/
                ></input>
                <button
                  onClick={() => {
                    setEditing(!editing);
                  }}
                >
                  Finished editing
                </button>
              </>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
