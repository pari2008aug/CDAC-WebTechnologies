const fs = require("fs");

const filename = "SampleFile.txt"

//fs.writeFileSync(filename, "Some text that should be written to the file", 'utf-8')

// fs.writeFile(filename, "Contents of that file here", 'utf-8', function(err){
//     if(err != null) console.error(err.message)
// })

fs.appendFile(filename, "\nAdds to the existing data", function(err){

});


console.log("The file appending is complete!!!")

//Explore an API from the fs called Open and see what it does. 