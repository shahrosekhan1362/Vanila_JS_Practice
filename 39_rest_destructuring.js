const persons = [
  "Jane",
  "14",
  "Abc@gmail.com",
  "Qbec@gmail.com",
  "Kryack@gmail.com",
];

const [name, id, ...emails] = persons;
console.log(emails);
