const amazon = require("./cart");//() is more like a constructor calling. Either the developer of the module would do this and return a single object or the caller can create the object and use it. It is dependent on the requirement and the coder's documentation.. In this example, the module itself is creating the object and there is no need to pass ()
console.log(amazon)
amazon.addToCart({"id" : 111, 'itemName': 'Samsung Note 3', 'price' : 45000});
amazon.addToCart({"id" : 112, 'itemName': 'MI NOTE 10', 'price' : 15000});
amazon.addToCart({"id" : 113, 'itemName': 'Samsung A51', 'price' : 30000});
amazon.addToCart({"id" : 114, 'itemName': 'Nokia 1100', 'price' : 1000});
amazon.addToCart({"id" : 115, 'itemName': 'Jio Phone', 'price' : 4000});

const items = amazon.getAllItems();
for (const iterator of items) {
    console.log(iterator.itemName)
}

items.forEach((val)=>{
    console.log(`${val.itemName} is priced at ${val.price}`)
})
/*
Improvise UR code with add, delete, update and findById in the module and consume it in Ex03 Example.
*/