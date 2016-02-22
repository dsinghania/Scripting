// Functions!
// named function
function someFunc(){
	
	console.log("hey there!");
	
	var answer = 2 + 2;
	
	return 4;	
}

var blah = someFunc();
var someOtherFunc = someFunc;

var blah2 = someOtherFunc();

// function variable
var funcVar = function(){
	return "hey there";
}

//****************************************************
// Objects

var emptyObj = {};

var car = {
	color: "black",
	make: "Chevrolet",
	model: "Cruze"
};

function carMaker(make, model, year){
	
	var aCar = {
		make: make,
		model: model,
		year: year
	};
	
	return aCar;
}

carMaker("Chevrolet", "Cruze", 2012);

function carMaker2(options){
	
	var anotherCar = {
		make: options.make,
		model: options.model,
		year: options.year	
	};
	
	if(options.wheelBase){
		anotherCar.wheelBase = options.wheelBase;
	}
	return anotherCar;
}

carMaker2({
	make: "Chevrolet",
	model: "Cruze",
	year: 2012,
	wheelBase: 104,
	engine:"4.1L"
});

// IF statements and comparisons
function exampleIfs(arg1){
	
	if(arg1 === 9){
		console.log("they're equal!");
	}
	
	// strict equals
	if(arg1 === 0){ // or !==
		console.log("they're equal");
	}
	
	if(arg1 == 0){
		console.log("its empty");
	}
	
	var someString = null;
	
	console.log(someString);
	console.log(someStringz);
	
	// standard error checking logic
	if(someString === null){
		console.log("null");
	}
	else if(someString === undefined){
		console.log("undefined");
	}
	else{
		console.log("everything is good");
	}
}

exampleIfs(9);
exampleIfs("0");

// how to do guard clauses
function checkThis(arg1){
	
	if(arg1 === null || arg1 === undefined){
		return "INVALID";
	}
	
	/*
	// whitelist approach
	if(typeof(arg1) == "number"){
		// some critical piece of logic that we're trying to accomplish
		return arg1 + 2;
	}
	*/
	
	// blacklist approach
	if(typeof(arg1) == "string"){
		return "INVALID";
	}
	
	if(typeof(arg1) == "object"){
		return "INVALID";
	}
	
	// some critical piece of logic that we're trying to accomplish
	return arg1 + 2;
}