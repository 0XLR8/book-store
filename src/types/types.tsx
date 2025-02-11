export type TypeBook = {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
}

export type TypeCartItem = TypeBook & { count: number };

export type TypeUser = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth?: string;
}