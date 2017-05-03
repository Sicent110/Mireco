import { combineReducers } from 'redux'


const defaultState = {
  count:0

}

//chulidenglu
// const regist = (state = { users: {}, repos: {} }, action) => {
//   if (action.response && action.response.entities) {
//     return merge({}, state, action.response.entities)
//   }
//
//   return state
// }


// Reducer
const counter = (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

const reducerRoot = combineReducers({
  counter
})

export default reducerRoot;
