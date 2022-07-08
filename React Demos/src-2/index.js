import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import App from './App';
import RestClient from './RestClient';
import RestClientPart2 from './RestClientPart2';
import AddEmployee from './AddEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<div>
//     <Product productName = "Mangoes" price="200" quantity = "3Kgs" picture = {mangoes}/>
//     <Product productName = "Apples" price="200" quantity = "3Kgs" picture = {apples}/>
//     <Product productName = "Gauvas" price="200" quantity = "3Kgs" picture = {gauvas}/>
//     <Product productName = "Oranges" price="200" quantity = "3Kgs" picture = {oranges}/>
// </div>);
//root.render(<ShoppingApp/>, document.getElementById("root"));
root.render(<App/>);
//root.render(<RestClient/>);
// root.render(<RestClientPart2/>, document.getElementById("root"));
//root.render(<div><RestClient/><AddEmployee/></div>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
