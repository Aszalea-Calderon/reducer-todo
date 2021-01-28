//6)all of the action types. What you are using, not what you are exporting
import actions, {
  ADD_TO_DO,
  EDIT_TO_DO,
  DELETE_ONE_ITEM,
  MARK_ALL_COMPLETED,
  TOGGLE_SINGLE_COMPLETED,
  CLEAR_ALL_COMPLETED,
} from "../actions/toDoActions";

const toDoReducer = (state, action) => {
  switch (
    action.type //The type coming in from the actions folder, this is the value coming in from the variable
  ) {
    case ADD_TO_DO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo: action.payload, // This comes from that action
            completed: false,
            id: new Date(), //Chaz hates new date. There are happier ways.
          },
        ],
      };

    // This updated the state which means its immutable, unchangeing and annoying af

    case EDIT_TO_DO: // this needs to be immutable, itterate through the arrays. it is immutable because it has a new array.
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          } else {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
        }),
      };

    //!FINISH HERE

    //!Check on after
    case DELETE_ONE_ITEM:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== actions.payload.id) {
            return todo;
          } else {
            return {
              ...todo,
              completed: true,
            };
          }
        }),
      };

    case MARK_ALL_COMPLETED:
      return {
        ...state,
      };

    case TOGGLE_SINGLE_COMPLETED:
      return {
        ...state,
      };

    case CLEAR_ALL_COMPLETED:
      return {
        ...state,
      };

    default:
      // This is saying we are swicth
      return { ...state };
  } // This is essentialy and else if but bettter
};
export default toDoReducer;

//this is what handel events that users triggers. This is what tells the reduces to fire. This effects what
