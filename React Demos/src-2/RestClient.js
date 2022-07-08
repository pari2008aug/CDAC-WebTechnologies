/*
How to use express to create a Rest Service
How to run the Rest service
How to make queries in MongoDB
Stack: ReactApp->Express->MongoDB->Nodejs
If React Apps have to get the data from REST API, we use a method called fetch(). fetch is a React API that is used to fetch the JSON data from the REST API. It uses an object called useEffect thru which the fetch method hits the URL and fetches the data
*/

import { Component } from "react";

export default class ReactClient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    //Helper function to convert the data into an Array of employees
    setEmployees(data) {
        let empList = [];
        data.forEach(emp => {
            let newEmp = {
                empId: emp.empId,
                empName: emp.empName,
                empAddress: emp.empAddress
            }
            empList.push(newEmp)
        });
        this.setState({
            employees: empList
        })
    }

    fetchJsonData() {
        fetch("http://localhost:1234/Employees")
            .then(res => res.json())
            .then(result => this.setEmployees(result))
    }

    deleteEmployee(empId) {
        const id = parseInt(empId);
        const url = "http://localhost:1234/Employees/" + id;
        fetch(url, { method : 'DELETE'})
         .then(res =>{
             alert(res)
             this.fetchJsonData()
        });
    }

    //Part of the Component building process where the react will call this method when the component is loaded into the Virtual DOM. 
    componentDidMount() {
        this.fetchJsonData();
    }

    render() {
        return (
            <table className="table table-bordered table-hover table-responsive" border={1}>
                <thead className="table-dark">
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Address</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {this.state.employees.map((emp) => (
                    <tr>
                        <td>{emp.empId}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.empAddress}</td>
                        <td><a href="#" onClick={(e) => this.deleteEmployee(emp.empId)}>X</a></td>
                    </tr>
                ))}
            </table>
        )
    }

}
