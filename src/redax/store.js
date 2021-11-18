import { combineReducers, createStore } from 'redux'
import messengerReducer from "./messengerReducer"
import profileReducer from "./profileReducer"
import friendsReducer from './friendsReducer'
import allUsersReducer from './allUsersReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    friendsPage: friendsReducer,
    allUsersPage: allUsersReducer
})

let store = createStore(reducers)


export { store }