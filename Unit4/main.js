
/*console.log("Hello World!");
var empOBj ={};
var car = {
    color: "black",
    make: "honda",
    model: "odyssey"
};
function carMaker(make,model,year) {
    var aCar = {
        make: make,
        model: model,
        year: year
     };
        return aCar;
  }
  carMaker("honda","odyssey",2012);
  function carMaker2 (options) {
      var anotherCar = {
            color: options.color,
            make:  options.make,
            model: options.model
    };
    if(options.wheelBase) {
      
    }
    return anotherCar;
  }
  */
  
function calculator(arg1, action, arg2) {
    if(action !== "add" && action !== "subtract" && action !== "divide" && action !== "multiply") {
       return "INVALID";
       // return;
    }
   if(arg1 <= 0 || arg2 <= 0 || arg1 === null || arg2 === null || arg1 === undefined || arg2 === undefined || typeof(arg1) !== "number" || typeof(arg2) !== "number") {
        return "INVALID";  
       // return;     
   } 
   if (action === "add") {
       return arg1 + arg2;
   }
   else if (action === "subtract") {
       return arg1 - arg2;
   }
   else if (action === "multiply") {
       return arg1 * arg2;
   }
   else
        return arg1 / arg2;   
}
function calcTest() {
    console.log("INPUT: 2, \"add\", 2 OUTPUT: " + calculator(2, "add", 2));
    console.log("INPUT: \"a\", \"add\", \"0\" OUTPUT: " + calculator("a","add","0"));
    console.log("INPUT: 10, \"divide\", 2 OUTPUT: " + calculator(10, "divide", 2));
    console.log("INPUT: 3, \"multiply\", 3 OUTPUT: " + calculator(3, "multiply", 3));
}
calcTest();

var input = {
    arg1: 2,
    action: "add",
    arg2: 2
};
    
    
    function objectCalculator(calcArgs) {
        
    if(calcArgs.action !== "add" && calcArgs.action !== "subtract" 
        && calcArgs.action !== "divide" && calcArgs.action !== "multiply") {
       console.log("INVALID");
       // return;
    }
   if(calcArgs.arg1 <= 0 || calcArgs.arg2 <= 0 || calcArgs.arg1 === null || calcArgs.arg2 === null || calcArgs.arg1 === undefined 
                        || calcArgs.arg2 === undefined || typeof(calcArgs.arg1) !== "number" || typeof(calcArgs.arg2) !== "number") {
        console.log("INVALID");  
       // return;     
   } 
   if (calcArgs.action === "add") {
       console.log(calcArgs.arg1 + calcArgs.arg2);
   }
   else if (calcArgs.action === "subtract") {
       console.log(calcArgs.arg1 - calcArgs.arg2);
   }
   else if (calcArgs.action === "multiply") {
       console.log(calcArgs.arg1 * calcArgs.arg2);
   }
   else
        console.log(calcArgs.arg1 / calcArgs.arg2);   
}
objectCalculator(input);