var a = 1,
  b = 2;

function add(c, d) {
  console.log(this.a + this.b + c + d);
}

var numObj = {
  a: 20,
  b: 40,
};
add.call(numObj, 1, 2);
add.apply(numObj, [1, 2]);

const addBind = add.bind(numObj);
addBind(1, 2);
