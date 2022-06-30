//foreach in jQUery
function testingjQueryForeach(){
    //$.each is a function used to perform foreach on ur data(collecion)
    let data = [123,23,56,66,77,45];
    //it was very popular before ES6 came. we got for..of and for..in with ES6 and the need for foreach and $.each got reduced.
    $.each(data, (i, v) =>{
        console.log(`It contains ${v} at index ${i}`);       
    })
}