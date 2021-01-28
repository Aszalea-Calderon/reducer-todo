//these are not jsx files.
//2) Start with actions, what are the things you want to do?

//--What we want to do--//
//Adding to do
//Editing
//Delete one item
//Mark all completed
//Toggle completed field, this is marking a single item as complete
//Clear all completed.

//3)Export all actions these are the types of actions to be completed
export const ADD_TO_DO = "ADD_TO_DO";
export const EDIT_TO_DO = "EDIT_TO_DO";
export const DELETE_ONE_ITEM = "DELETE_ONE_ITEM";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";
export const TOGGLE_SINGLE_COMPLETED = "TOGGLE_SINGLE_COMPLETED";
export const CLEAR_ALL_COMPLETED = "CLEAR_ALL_COMPLETED";

const addToDo = (text) => {
  return { type: ADD_TO_DO, payload: text }; //onsubmit trigger this action. you don't want it to fire at every instance
};

const editToDo = (text, id) => {
  return { type: EDIT_TO_DO, payload: { id: id, text: text } };
};

//!FINISH HERE
const deleteOneItem = () => {
  return;
};

const markAllCompleted = () => {
  return;
};

const toggleSingleCompleted = () => {
  return;
};

const clearAllCompleted = () => {
  return;
};

//4) export an object. by just adding addToDo with a comma shows it what it needs to know
const actions = {
  addToDo,
  editToDo,
  deleteOneItem,
  markAllCompleted,
  toggleSingleCompleted,
  clearAllCompleted,
};

//5) export the actions
export default actions;
