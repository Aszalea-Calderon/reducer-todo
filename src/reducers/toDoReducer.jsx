export const SET_TO_DO = 'SET_TO_DO'

const toDoReducer = (state, action) =>{
 
  if (action.type === SET_TO_DO){
    return{
      ...state,
      todo: [ action.payload]
    }
  }
  return state
}
export default toDoReducer