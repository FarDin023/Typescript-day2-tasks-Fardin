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



