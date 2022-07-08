import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, FIND_ALL } from "./types";

//Functions for the actions...
export const addEmployee =({ empId, empName, empAddress }) => ({
    type : ADD_EMPLOYEE,
    payload: {
        empId, empName, empAddress
    }
});

export const deleteEmployee = id =>({
    type : DELETE_EMPLOYEE,
    payload: {
        id
    }
})

export const updateEmployee = ({ empId, empName, empAddress }) => ({
    type : UPDATE_EMPLOYEE,
    payload: {
        empId, empName, empAddress
    }
});

//toDo: other functions also to be implemented. 