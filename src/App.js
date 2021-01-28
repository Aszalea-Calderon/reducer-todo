import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
//import { initialState } from "./components/initalState";
//import toDoReducer, { SET_TO_DO } from "./reducers/toDoReducer";
//import ToDos from "./components/Todos";

function App() {
  const [form, setForm] = useState({
    todo: "",
  });

  //--THE STEPS--//

  //Gather the local state-- Get this working first.
  //be sure that is functioning properly- the correct data structure. no undefined.
  //stick in in an array
  //map that array to the page
  //THEN dispatch it to the store ( this is the global state)

  return (
    <>
      <Header form={form.state} />
      {}
    </>
  );
}

export default App;
