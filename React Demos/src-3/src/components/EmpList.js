//Component that contains the data for the storage and render the output. 
import React from "react";
import { connect } from "react-redux";
import { addEmployee, deleteEmployee } from "../actions";

class EmployeeList extends React.Component{
    constructor(props){
        super(props)
        if(this.props.empList == undefined){
            this.props.empList = [];
        }
        
        if(this.props.empList.length === 0){
            //create the objects here...
            const list = [
                {empId : 123, empName: "Phaniraj", empAddress : "Bangalore"},
                {empId : 124, empName: "Gopi", empAddress : "Hyderabad"},
                {empId : 125, empName: "Robert", empAddress : "Chennai"},
                {empId : 126, empName: "David", empAddress : "Panaji"}
            ]
            list.forEach((emp)=>{
                this.props.onAddEmployee({ empId: emp.empId, empName : emp.empName, empAddress : emp.empAddress})
            })
        }
    }

    onDeleteFunc = (id, e) =>{
        e.preventDefault();
        this.props.onDeleteEmployee(id);
    }
    render(){
        const list = this.props.empList.map((emp)=>
            <tr key={emp.empId}>
                 <td>{emp.empId}</td>   
                 <td>{emp.empName}</td>   
                 <td>{emp.empAddress}</td>
                 <td><a href="#" onClick={(e) => this.onDeleteFunc(emp.empId, e)}>Delete</a></td>   
            </tr>
        )

        return(
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Emp ID</th>
                            <th>Emp Name</th>
                            <th>Emp Address</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => { return { empList : state}}

const mapDispatchToProps = dispatch =>{
    return {
        onAddEmployee : emp => { dispatch(addEmployee(emp))},
        onDeleteEmployee : id => { dispatch(deleteEmployee(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)