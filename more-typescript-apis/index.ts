interface User {
    name: string;
    age: number;
    email: string;
    createdAt: Date;
}

type UserProfile = Pick<User, "name" | "email" | "age">;

function displayUserProfile(user: UserProfile) {
    console.log(user);
}

displayUserProfile({ name: "John", email: "a@a.com", age: 30 });
