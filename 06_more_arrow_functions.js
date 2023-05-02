const friends = ["Jhon", "doe", "Ali"];
const result = friends.map((friend, i) => ({
  firstName: friend,
  lastName: "doe",
  id: `askl${i}hdf`,
}));

const filter = friends.filter((friend) => friend === "Ali");

console.log(result);
console.log(filter);
