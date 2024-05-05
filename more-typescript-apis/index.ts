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

interface UserDetails {
    id: string;
    name: string;
}

// type Users = { [key: string]: UserDetails }; // This can also be written as
type Users = Record<string, UserDetails>;

const users: Users = {
    abc123: { id: "abc123", name: "John Doe" },
    xyz789: { id: "xyz789", name: "Jane Doe" },
};
// console.log(users);

const usersMap = new Map<string, UserDetails>();
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });
// console.log(usersMap);
// console.log(usersMap.get("abc123"));

type SomeEvent = "scroll" | "click" | "mousemove";
type ExcludeEvent = Exclude<SomeEvent, "click">;

function handleEvent(event: ExcludeEvent) {
    console.log("handling event:" + event);
}

handleEvent("mousemove");
handleEvent("scroll");
