import { Component } from "react";
import mangoes from './Images/Mangoes.jpg';
import oranges from './Images/Oranges.jpg';
import apples from './Images/Apples.jpg';
import gauvas from './Images/Gauvas.jpg';
import Product from "./Product";

export default class ShoppingApp extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        //create the array..
        const products =[
            {"name": "Apples", "price" : "Rs. 200", "quantity" : "1 Kg", "picture" : apples },
            {"name": "Mangoes", "price" : "Rs. 100", "quantity" : "1 Kg", "picture" : mangoes },
            {"name": "Oranges", "price" : "Rs. 40", "quantity" : "1 Kg", "picture" : oranges },
            {"name": "Gauvas", "price" : "Rs. 100", "quantity" : "2 Kg", "picture" : gauvas },
        ]

        const productCards = products.map((p) => <Product product={p}/>);
        return(productCards);
    }
}