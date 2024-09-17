import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookCard from './BookCard';

const SearchPage = () => {
    const { query } = useParams();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const searchBooks = async () => {
            const apiUrl = import.meta.env.VITE_BACKEND_URL;
            try {
                const response = await axios.get(`${apiUrl}/books`);
                const books = response.data;

                const matchedBooks = books.filter(book =>
                    book.name.toLowerCase().includes(query.toLowerCase()) ||
                    book.desc.toLowerCase().includes(query.toLowerCase()) ||
                    book.category.toLowerCase().includes(query.toLowerCase())
                );

                setFilteredBooks(matchedBooks);
                setIsDataLoaded(true);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        searchBooks();
    }, [query]);
    return (<>
        <div className="w-[98vw] min-h-[90vh] m-auto mt-[5rem] p-5 mb-10 max-md:p-0">
            <h2 className="text-3xl font-bold my-6 max-md:text-2xl max-md:my-4 max-sm:text-xl max-sm:my-2 pb-5">Search Results for "{query}"</h2>
            {isDataLoaded ? (<div className="flex flex-wrap gap-y-12 m-auto justify-evenly items-center max-sm:flex-col max-sm:gap-10">
                {filteredBooks.map((e, index) => (
                    <div key={index} className='max-sm:scale-110' > <BookCard book={e} /> </div>
                ))}
            </div>) :
                <div className="flex h-[70vh] justify-center items-center">
                    <h2 className="text-xl font-bold text-center my-6 animate-pulse">Searching...</h2>
                </div>
            }
        </div>
    </>
    );
}

export default SearchPage