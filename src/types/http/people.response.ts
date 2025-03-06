export interface PeopleResponse {
    results: Results[];
    info: Info; 
}

export interface Results {
    profile_pic: string;
    name: string;
    age: Number;
    phone: string;
    email: string;
    birthday: string;
    address: string;
    userName: string;
    password: string;
}

export interface Info {
    data:string;
}