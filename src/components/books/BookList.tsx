import { TypeBook } from "../../types/types";
import { BookItem } from "./BookItem";

type TypeBookListProps = {
    bookList: TypeBook[];
}

export const BookList = ({bookList}: TypeBookListProps) => {
    return(
        <div className="d-flex align-items-center flex-wrap justify-content-center gap-4">
            {   
                bookList.map(book => 
                    <BookItem 
                        key={book.id} 
                        id={book.id}
                        title={book.title} 
                        author={book.author}
                        price={book.price}
                        imageUrl={book.imageUrl}
                    />
                )
            }
        </div>
    )
}