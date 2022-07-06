//import { moduleFunc, name, Customer } from './simpleModule.js';
////////////////////////New Features of JS that U need to know in React App Development/////////////
//////New Class Syntax////////////
/*
A Class is now a keyword instead of function. function is no longer recommended.  
*/
class Employee{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    display(){
        return `The Name: ${this.name} has an ID ${this.id}`
    }
}

class RegularEmployee extends Employee{
    constructor(id, name, address, salary){
        super(id, name);//Calling the base class constructor
        this.address = address;
        this.salary = salary;
    }
    //override the display method in ur derived class...
    display(){
        let data = super.display();
        data += `The other details: ${this.address} and ${this.salary}` 
        return data;
    }
}
let instance  = new Employee(123, "Phaniraj");
//alert(instance.display());

instance = new RegularEmployee(123, "Phaniraj", "Bangalore", 67000);
//alert(instance.display());

/////////Arrow Functions/////////
const funcName = function(arg1, arg2){
    return arg1 + arg2 -(arg1 * arg2);
}

const func = () => alert("Testing arrow func");

//alert(funcName(2,3));
//func();
///////Modules///////////////////
//moduleFunc();
//alert(name)
//////////New Array methods////// 

const data = ['Apples','mangoes','oranges','bananas'];
const upperCaseData = data.map((item) => item.toUpperCase());
for (const iterator of upperCaseData) {
    alert(iterator)
}
//Perform some operation on each element and returns the data of all the operations as an array.