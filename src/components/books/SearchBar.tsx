import { ChangeEvent } from "react"

type TypeSearchBarProps = {
    searchText: string;
    setSearchText: (text: string) => void;
}

export const SearchBar = ({searchText, setSearchText}: TypeSearchBarProps) => {
    const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    return(
        <div className="search-bar p-3 mx-auto mb-5">
            <input 
                type='text' 
                placeholder="Search a book by title or author..."
                value={searchText} 
                onChange={handleSearchBarChange}    
            />
        </div>
    )
}