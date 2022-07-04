const os = require("os");
const data = require("./SampleData.json");

console.log("The machine name: " + os.hostname());
console.log("The OS name: " + os.type());
console.log("The Current version of the OS: " + os.version());
console.log("The machine is running for : " + (os.uptime() /3600) + "hrs");
console.log("The machine has : " + os.cpus().length);
console.log("The total memory of this machine is " + os.totalmem())

// console.table([{Name: "Phaniraj", Address : "Bangalore", Salary : 45000},{Name: "Phaniraj", Address : "Bangalore", Salary : 45000},{Name: "Phaniraj", Address : "Bangalore", Salary : 45000},{Name: "Phaniraj", Address : "Bangalore", Salary : 45000},{Name: "Phaniraj", Address : "Bangalore", Salary : 45000}])

console.table(data)