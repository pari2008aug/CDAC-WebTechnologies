module.exports = (function(){
    let cart = [];

    //Functions in a module are private.
    function addItem(item){ cart.push(item);}
    function getAll() { return cart ;}

    //Accessing the methods
    return{
        addToCart : addItem, 
        getAllItems :getAll
    }
})();//U will return an object of UR Shopping car...