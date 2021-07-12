import { combineReducers } from 'redux';
import selectedElementReducer from './selectedElementReducer'

const allReducer = combineReducers({
    selectedElementReducer: selectedElementReducer
})

export default allReducer;