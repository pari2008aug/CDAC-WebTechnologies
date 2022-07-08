import { useEffect, useState } from "react"

const RestClientPart2 =() =>{
    const [ employees, setEmployees ] =useState([]); //initial State of the employees

    useEffect(()=>{fetch("http://localhost:1234/Employees").then(response => response.json()).then(result => setEmployees(result))
    }, []);

    return(
        <table border="1">
        <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Address</th>
            <th>Options</th>
        </tr>
        {employees.map((emp)=>(
            <tr>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empAddress}</td>
                <td><a href="#" data-id={emp.empId}>X</a></td>
            </tr>
        ))}
    </table>
    )
}

export default RestClientPart2