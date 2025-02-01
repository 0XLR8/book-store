export type TypeBook = {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
}

export type TypeCartItem = TypeBook & { count: number };