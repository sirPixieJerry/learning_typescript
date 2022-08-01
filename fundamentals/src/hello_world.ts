// interface for User
interface User {
    name: string;
    birthDate: number;
}

// string
const message: string = "Hello world!";

// create user
const user: User = {
    name: "Jerry",
    birthDate: 1982,
};

// calculate age
function age(x: number): number {
    const date = new Date().getFullYear();
    return date - x;
}

console.log(
    message,
    `My name is ${user.name}. I am ${age(user.birthDate)} years old.`
);
