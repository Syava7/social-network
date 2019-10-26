import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'


let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
})

let store = createStore(redusers)

export default store

