(function () {
  var greetMsg = "Hello World";
})();

// console.log(greetMsg); // IIFE will restrict the use of var

for (var i = 0; i < 10; i++) {
  // var scope will result in inconsistent values
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  // let scope will result in consistent values
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
