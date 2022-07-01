//This app will get the data from the multiContentModule.js
const app = require('./multiContentModule')

console.log("This app was developed by " + app.developedBy) 
console.log("This app was developed on " + app.createdOn)

app.regularFunc("Apples", 12)
const es6Obj = new app.myNewClass();
es6Obj.testFunc();

app.oldClass.myFunc();
