import { combineReducers } from 'redux'


const defaultState = {

  user:{
    isLogin: false,
    info:{
    }
  },

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
const counter = (state = defaultState, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      state.count = state.count + 1;
      console.log(state);
      return {
        ...state,
        count: state.count}
    default:
      return state
  }
}

const reducerRoot = combineReducers({
  counter
})

export default reducerRoot;
