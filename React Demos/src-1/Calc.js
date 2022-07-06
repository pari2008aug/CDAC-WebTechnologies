import React, { Component } from "react";
import './App.css'

//U need data: v1, v2, operand, result.
//React stores the data in the form of refs. refs are now obselete, instead we use api called createRef to create referces of the data. This is called STATE MANAGEMENT of React. 
//State is an object of React components that stores info which React can store and use it for a brief period of time. 
export class Calc extends Component{
    state = { result : 0.0 }//Store any data that has to be saved and used for a good amount of time. 
    constructor(){
        super();
        this.fVal = React.createRef();
        this.sVal = React.createRef();
        this.operand = React.createRef();
        this.onCalc = this.onCalc.bind(this);//The binding is an important concept of associating events with the functions of UR class, so that all data transfers b/w the elements and UR ref objects will be mapped. 
        console.log(this.fVal)
    }

    onCalc(event){
        console.log(this);
       const v1 = parseFloat(this.fVal.current.value);
       const v2 = parseFloat(this.sVal.current.value);
       const operand = this.operand.current.value;
       let res =0.0;
       switch (operand) {
        case "+":
            res = v1 + v2;
            break;
        case "-":
            res= v1 - v2;
            break;
        default:
            res = v1 * v2;
            break;
       }
       this.setState({result : res})
       console.log({"v1" : v1, "v2": v2, "operand":operand, "Res" : res});
       event.preventDefault();//blocks the default functionality of this button.  
    }

    render(){
        return(
            <div class="calc">
                <p><input ref={this.fVal} placeholder="First Value"/></p>
                <p><input ref={this.sVal} placeholder="Second Value"/></p>
                <p>
                    <select ref={this.operand}>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                    </select>
                </p>
                <p><button onClick={this.onCalc}>Calculate</button></p>
                <p>The result: <span>{this.state.result}</span></p>
            </div>
        )
    }
}