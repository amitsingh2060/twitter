import {combineReducers} from 'redux'
import addingComment from './Reducer'


const AllReducers = combineReducers({
    comments:addingComment
})

export default AllReducers