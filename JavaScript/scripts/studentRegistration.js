//Create a class called Student.(Entity Class)

class Student{
    constructor(id, name, address, age){
        this.id = id;
        this.name = name;
        this.address = address;
        this.age = age;
    }
    //function to represent data of student as a row of a table...
    toStringFormat(){
        return `<tr><td>${this.id}</td><td>${this.name}</td><td>${this.address}</td><td>${this.age}</td></tr>`
    }
}

//Create a Repository of students where we have CRUD operations on the collection(Data).  
class StudentDb{
    constructor(){
        this.students = [];//create a blank array
    }
    //add new
    register(student) {
        this.students.push(student);//push method of the Array will add the element to the bottom of the array..
    }

    //update existing
    update(student){
        for (const s of this.students) {
            if(student.id == s.id){
                s.name = student.name;
                s.address = student.address;
                s.age = student.age;
                return;
            }
        }
        throw "Student not found to update"
    }

    //splice is used to remove an element from the collection, replace if required or add them..
    delete(id){
        for(let index =0; index<this.students.length;index++){
            if(this.students[index].id == id){
                this.students.splice(index,1);//splice can be used to insert, delete as well as update. 
                return;//exit the function if the deletion is completed...
            }
        }
        throw "Student not found to delete"; 
    }

    //gets all the records
    getAll(){
        return this.students;
    }
    //gets single record based on id
    find(id){
        for (const s of this.students) {
            if(s.id == id) return s;
        }
        throw "Student not found";
    }
}
