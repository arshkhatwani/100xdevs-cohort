interface User {
    name: string;
    age: number;
    email: string;
    createdAt: Date;
}

type UserProfile = Pick<User, "name" | "email" | "age">;

type UpdateProps = Partial<User>;

function displayUserProfile(user: UserProfile) {
    console.log(user);
}
// displayUserProfile({ name: "John", email: "a@a.com", age: 30 });

function updateUser(updatedProps: UpdateProps) {
    console.log(updatedProps);
}
// updateUser({ name: "John", email: "a@a.com", createdAt: new Date() });

interface Config {
    readonly endpoint: string;
    readonly port: number;
}

const conf: Readonly<Config> = {
    endpoint: "localhost",
    port: 3000,
};
// Readonly ensures compile time checking for an object that should not be altered after initialization
// console.log(conf);
