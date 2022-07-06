import { Component } from "react";

export class AppHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <h1>{this.props.title}</h1>
            <hr/>
        </div>
    )}  
}