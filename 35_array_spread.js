let persons = [];
const managers = ["Ali", "Ahmad", "Aleem"];
const developers = ["Kareem", "Qadeer", "Qasim"];

console.log(persons);

persons = [...managers, ...developers];

console.log(persons);

let copyPersons = [...persons];
persons[0] = "New Person";
console.log(copyPersons);
console.log(persons);
