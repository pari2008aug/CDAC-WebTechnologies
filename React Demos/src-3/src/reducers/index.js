//This will contain action invokers in the form of Reducers. 
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "../actions/types";

export default function empReducer(state = [] , action){
    switch (action.type) {
        case ADD_EMPLOYEE:
            return [...state, action.payload]
        case DELETE_EMPLOYEE:
            return state.filter(rec => rec.empId !== action.payload.id )
        default:
            return state;
    }
}