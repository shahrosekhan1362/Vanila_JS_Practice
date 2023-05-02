function greet() {
  var msg = "Hello World.";
  console.log(msg);
}

greet();

// var of funciton scope are inaccessible outside the function
// console.log(msg); Undefined here.

var language = "en";
if (language === "en") {
  var greetMsg = "Hello World in English";
  let greetLet = "Hello World in English with let";
  console.log(greetMsg);
  console.log(greetLet);
}

// var with block scope are accessible outside the block scope
console.log(greetMsg);

// while let variables are not accessible outside the block scope
// console.log(greetLet);   //Will not be accessible
