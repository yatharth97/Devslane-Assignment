export interface User {
    name: Name;
    gender: string;
    age: number;
    dob: DateOfBirth;
    email: string;
    phone: string;
    picture: Picture;
    nationality: string;
};

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface DateOfBirth {
    age: number;
    date: string;
}