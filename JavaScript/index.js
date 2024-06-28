// console.log("Hello");
// let a = 5;
// let b = 5;
// let c = a * b;
// console.log(c);
// if (true) {
//   let a = "love";
//   console.log(a);
//   a = 123;
//   console.log(a);

//   var b = "adi";
//   console.log(b);
//   var b = 45;
//   console.log(b);
// }
// let a = 452;
// console.log(a);
// var b = "nis";
// console.log(b);
// a = "hlo";
// console.log(a);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// let x = 1;
// do {
//   console.log(x);
//   x++;
// } while (x < 10);
// if (true) {
//   let rectangle = {
//     length: 2,
//     breadth: 3,

//     draw: function () {
//       console.log("drawing");
//     },
//   };
// }

// let rectangle;
//Factory function

// function createRectangle(length, breadth) {
//   return (rectangle = {
//     length: length,
//     breadth: breadth,

//     draw: function () {
//       console.log("drawing");
//     },
//   });
// }
// obj1 = createRectangle(5, 10);
// obj1.draw();
// console.log(obj1);
// function Rectangle() {
//   this.length = 1;
//   this.breadth = 2;
//   this.draw = function () {
//     console.log("drawing");
//   };
// }
// let rectangleObject = new Rectangle();
// rectangleObject.color = "yellow";
// let a = { value: 10 };
// let b = a;
// a.value++;
// console.log(a);
// console.log(b);
// let a = { value: 10 };
// function inc(a) {
//   a.value++;
// }
// inc(a);
// console.log(a);
// let rectangle = {
//   length: 2,
//   breadth: 4,
// };
// for (let key in rectangle) {
//   console.log(key, rectangle[key]);
// }
// let numbers = [1, 2, 3, 4];
let person = {
  fName: "Love",
  lName: "Babber",
};
// console.log(person);
function fullName() {
  return `${person.fName}  ${person.lName}`;
}
console.log(fullName());
