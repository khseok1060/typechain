const name = "daniel",
  age = 35,
  gender = "male";

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const person = {
//   name: "daniel",
//   age: 35,
//   gender: "male"
// };

const kh = new Human("kh", 18, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(kh));

export {};
