import { Component } from "react";

export class AppHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="mt-4 p-5 bg-primary text-white rounded">
            <h1>{this.props.title}</h1>
            <hr/>
        </div>
    )}  
}