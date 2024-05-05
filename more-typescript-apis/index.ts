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
updateUser({ name: "John", email: "a@a.com", createdAt: new Date() });
