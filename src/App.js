import { useReducer, useState } from "react";
import "./App.css";
import { initialState } from "./components/initalState";
import toDoReducer from "./reducers/toDoReducer";
import ToDo from "./components/Todo";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  //Application level State
  const [newToDo, setNewToDo] = useState({
    todo: "a",
  });

  // const [editing, setEditing] = useState(false);
  // const [clear, setClear] = useState("");

  const handleChanges = (e) => {
    setNewToDo(e.target.value);
  };
  return (
    <div className="App">
      <h1>ToDo</h1>
      <input
        type="text"
        // value={newToDo}
        onChange={handleChanges}
        name="toDo"
        placeholder="What do you need to do today?"
      />
      <button>Add to do</button>
      {/* //Todo's -- Edit, Delete*/}
      <ToDo />
    </div>
  );
}

export default App;
