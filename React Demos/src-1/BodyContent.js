import { Component } from "react";
import { Calc } from "./Calc";

export default class BodyContent extends Component{
    onClick(){
        alert("Button was clicked!!!")
    }
    render(){
        return(
            // <p><button onClick={this.onClick}>Click Me</button></p>
            <Calc/>
        )
    }
}