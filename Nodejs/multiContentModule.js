//This module will contain not only a class, but also methods that can be used in ur client js
//In this example, we will use ES6 Class version...
//ES6 class created...
class testClass{
    testFunc(){
        console.log("testFunc is being called")
    }
}
//associate the ES6 class to the module.exports
module.exports.myNewClass = testClass;

//Normal Functions created...
module.exports.regularFunc = function(v1, v2){
    console.log("Display: " + v1 )
    console.log("Display: " + v2 )
}
//fields of the module...
module.exports.developedBy ="Phaniraj"
module.exports.createdOn = new Date();

//exporting old singleton class into the current module
module.exports.oldClass = (function(){
    let data =[];
    function myFunc(){
        data.push("Apples")
        data.push("PineApples")
        data.push("Mangoes")
        data.push("Oranges")
        console.log("The total items are " + data.length)
    }
    return{
        myFunc
    }
})();