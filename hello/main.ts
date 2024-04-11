type User = {
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
    gender?: string;
};

const userOne: User = {
    name: "Sophia",
    age: 287,
    isMarried: false,
    hobbies: ["Playing Football", "Watching Movies"],
    gender: "Male"
};

const userTwo: User = {
    name: "John",
    age: 30,
    isMarried: true,
    hobbies: ["Reading Books", "Playing Guitar"]
};

const users: User[] = [userOne, userTwo];
