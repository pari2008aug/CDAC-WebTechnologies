class employee{
    constructor(id, name, address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

class empRepo{
    constructor(){
        this.data = [];
        this.data.push(new employee(123, "Phaniraj", "Bangalore"))
        this.data.push(new employee(124, "Mahesh", "Mysore"))
        this.data.push(new employee(125, "Gopal", "Hyderabad"))
        this.data.push(new employee(126, "Venki", "Chennai"))
    }

    addNew(emp) {
        this.data.push(emp)
    }

    delete(id){
        for (const key in this.data) {
            if(this.data[key].id == id)
                this.data.splice(key, 1);
        }
        throw "Employee not found to delete"
    }

    update(emp){
        for (const key in this.data) {
            if(this.data[key].id == emp.id)
                this.data.splice(key, 1, emp);
        }
        throw "Employee not found to update"
    }

    getAll(){
        return this.data;
    }

    find(id){
        for (const  obj of this.data) {
            if(obj.id == id) return obj;
        }
        throw "Employee not found"
    }
}