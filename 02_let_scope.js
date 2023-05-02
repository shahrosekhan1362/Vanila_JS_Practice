let greetMsg = "hello world";
let language = "en";

if (language === "en") {
  let greetMsg = "Welcome to ES 6"; //new local variable with block scope
  console.log(greetMsg);
}

console.log(greetMsg); // Global let with different scope
