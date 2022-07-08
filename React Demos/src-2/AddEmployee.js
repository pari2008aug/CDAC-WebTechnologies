import React, { Component, useState } from "react";

export default class  AddEmployee extends Component{ 

    constructor(){
        super();
        this.empId = React.createRef();
        this.empName = React.createRef();
        this.empAddress = React.createRef();
        this.handleAddRecord = this.handleAddRecord.bind(this);
    }
    handleAddRecord(e) {

        const empObj = {}
        empObj.empName = this.empName.current.value;
        empObj.empAddress =this.empAddress.current.value;
        empObj.empId = parseInt(this.empId.current.value);
        const url = "http://localhost:1234/Employees"

        const options ={
            method : 'POST',
            body : JSON.stringify(empObj),
            headers : { 'Content-Type' :'application/json'}
        };
        fetch(url, options).then(res =>res.json()).then(result => alert(result))
    }
    render(){
        return(
        <div className="form">
            <p>
                <input ref={this.empId} className="form-control" placeholder ="Enter the ID"/>
            </p>
            <p>
                <input ref={this.empName} placeholder ="Enter the Name"  className="form-control"/>
            </p>
            <p>
                <input ref={this.empAddress} placeholder ="Enter the Address"  className="form-control"/>
            </p>
            <p>
                <button className="btn btn-danger" onClick={(e) => this.handleAddRecord(e)}>Save Record</button>
            </p>
        </div>
    )
    }
}