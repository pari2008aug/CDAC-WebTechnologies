//details of a single student..
let id = 123;
let name ='Vishal';
let address ='Bhopal';
let phone = 9856455678;

//Singleton object creation in js...
let employee = {};//blank object. this creates a Singleton object. Only one object 
employee.empId = 123;//U add the properties/fields to it.
employee.empName = "Phaniraj";
employee.empAddress = "Bangalore"
//creating function in a singleton object
employee.display = function(){
    let value = `The name:${this.empName} is from ${this.empAddress} and has Id:${this.empId}`;
    return value;
}
let emp2 = employee;//reference of the same object. 
emp2.empAddress = "Hyderabad";

console.log(employee.display());
//////////////////////////////////////////////////////////////////////////
//Old syntax of creating classes in Js. Classes were like collections in Js.
let emp = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;
}

let emp1 = new emp(123, "TestName", "TestAddress");
let emp5 = new emp(123, "TestName", "TestAddress");
let emp3 = new emp(123, "TestName", "TestAddress");
let emp4 = new emp(123, "TestName", "TestAddress");
//There are 4 different objects created, unlike singleton, U can modify the objects which will not have any impact on the other objects.
console.log(emp1);
console.log(emp5);
console.log(emp3);
console.log(emp4);

emp4.empAddress="Pune";

console.log(emp1);
console.log(emp5);
console.log(emp3);
console.log(emp4);

//New ES6 syntax of creating classes in JavaScript...
class Student{
    //constructor keyword is required, else objects cannot be created. Constructor is the place of creating fields for UR class, so that it can be accessed by UR functions. 
    constructor(id, name, address, phone){
        this.id = id;
        this.address = address;
        this.name = name;
        this.phone = phone;
    }
    //member functions creation in Js
    getDetails(){
        let data = `{${this.id},${this.name},${this.address},${this.phone}}`
        return data;
    }
}

let vishal = new Student(123, 'Vishal', 'Bhopal', 9856455678);
console.log(vishal.getDetails())

