import { createStore, applyMiddleware, compose } from 'redux'
import reducerRoot from '../reducers/reducer'

// Store
const store = createStore(reducerRoot)


export default store
