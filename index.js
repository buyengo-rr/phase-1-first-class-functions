function  receivesAFunction(callback){
    callback()
}
function   returnsANamedFunction(){
    function undefined(){
        console.log("I am undefined");
    }
    return undefined;
}
function  returnsAnAnonymousFunction(){
    return function(){}
}