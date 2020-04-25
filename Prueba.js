// example from video min 51:40
/*function ourReusableFunction(a,b){
    console.log(a + b);
}

ourReusableFunction(10, 5);
ourReusableFunction(9, 3);
ourReusableFunction(8, 10);*/


/* example from Global Scope of Variables
var myGlobal = 10;

function fun1() {
    //Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
*/

/*function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));*/

var X = "Robson";

console.log(X);

