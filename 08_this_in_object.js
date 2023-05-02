var person = {
  firstName: "John",
  lastName: "Smith",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  owner: {
    firstName: "Ali",
    lastName: "Mosa",
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
    },
  },
};

person.fullName();
person.owner.fullName();
