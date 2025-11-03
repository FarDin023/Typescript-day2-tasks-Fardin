//1

interface User {
  name: string;
  email: string;
  active: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.active);
}

const users: User[] = [
  { name: "Alice", email: "alice@abc.com", active: true },
  { name: "Bob", email: "bob@abc.com", active: false },
  { name: "Charlie", email: "charlie@bd.com", active: true },
]; 

const activeUsers = filterActiveUsers(users);
console.log(activeUsers);


//2


function getArea(shape: "circle", r: number): number;
function getArea(shape: "square", a: number): number;

function getArea(shape: string, dimension: number): number {
  if (shape === "circle") {
    return Math.PI * dimension * dimension;
  } else if (shape === "square") {
    return dimension * dimension;
  }
}

console.log(getArea("circle", 5));
console.log(getArea("square", 4));


//3


async function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, 1000);
  });
}

async function displayData() {
  const data = await fetchData("https://api.example.com");
  console.log(data);
}

displayData();


//4

function safeParse(jsonString: string): any | null {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

const jsonString = '{"name": "Alice", "age": 30}';
const invalidJsonString = '{"name": "Alice", age: 30';

console.log(safeParse(jsonString));
console.log(safeParse(invalidJsonString));


//5

interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Woof!";
  }
}

const myDog = new Dog("Buddy");

console.log(myDog.name);
console.log(myDog.sound());


//6

function getlastElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}
const emptyArray: number[] = [];
const numberArray: number[] = [1, 2, 3, 4];
const stringArray: string[] = ["a", "b", "c"];

console.log(getlastElement(emptyArray));
console.log(getlastElement(numberArray));
console.log(getlastElement(stringArray));


//7


export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
