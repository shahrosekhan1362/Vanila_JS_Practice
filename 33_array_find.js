const users = [
  {
    id: 7,
    userId: 27,
    title: "New Task",
    completed: false,
  },
  {
    id: 1,
    userId: 19,
    title: "New Task",
    completed: true,
  },
  {
    id: 2,
    userId: 11,
    title: "Task",
    completed: true,
  },
  {
    id: 3,
    userId: 21,
    title: "New Trick",
    completed: true,
  },
  {
    id: 4,
    userId: 17,
    title: "Cleared",
    completed: false,
  },
  {
    id: 5,
    userId: 13,
    title: "Created",
    completed: false,
  },
];

let todo = users.find((user) => user.completed === false);
console.log(todo);

todo = users.filter((user) => user.completed === false);
console.log(todo);

todoId = users.findIndex((user) => user.id === 5);
console.log(todoId);
