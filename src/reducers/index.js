// Step 2 : Create reducer's directory
import { combineReducers } from 'redux'
import KontakReducer from './kontak'

console.log("Reducer")

export default combineReducers({
    KontakReducer
})