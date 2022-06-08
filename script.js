// Mapping an array

// const number = [1, 2, 3, 4, 5];
// console.log(number);
// let multiply2 = number.map((value) => {
//   return value * 2;
// });
// console.log(multiply2);

const people = [
  { id: 1, Firstname: "gokul", Lastname: "raj" },
  { id: 2, Firstname: "deepak", Lastname: "kumar" },
  { id: 3, Firstname: "mani", Lastname: "kandan" },
];

let combinename = people.map((value) => {
  //   return value.Firstname + value.Lastname;
  let fullname = [value.Firstname, value.Lastname].join(" ");
  let obj = { Id: value.id, Name: fullname };
  return obj;
});
console.log(combinename);
