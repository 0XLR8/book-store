import { useEffect, useState } from "react"
import { booksMock } from "../mocks/mocks";
import { TypeBook } from "../types/types";
import { SearchBar } from "../components/books/SearchBar";
import { BookList } from "../components/books/BookList";

export const BooksRoute = () => {
    const [bookList, setBookList] = useState<TypeBook[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        setBookList(booksMock);
    }, [])

    const filteredBooks = bookList.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    )

    if(!Boolean(bookList.length)) {
        return <h2>No books available for now.</h2>
    }

    return(
        <div className="books">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <BookList bookList={filteredBooks} />
        </div>
    )
}