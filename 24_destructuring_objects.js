let person = {
  first: "Ali",
  last: "Khan",
  age: 29,
  address: {
    city: "Sargodha",
    zip: "40100",
    location: {
      long: "123",
      lat: "99",
    },
  },
};

let { long, lat } = person.address.location;
console.log(long);
console.log(lat);

let { long: longitude, lat: lattitude } = person.address.location;
console.log(longitude);
console.log(lattitude);

// You can also use the default values in destructuring
