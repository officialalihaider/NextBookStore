import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const apiUrl = import.meta.env.VITE_BACKEND_URL;
                const response = await axios.get(`${apiUrl}/books`);
                setBooks(response.data);
                setIsDataLoaded(true);
            } catch (error) {
                console.error(error);
            }
        }
        getBooks();
    }, []);

    return (
        <div className="w-[98vw] min-h-[90vh] m-auto mt-[5rem] p-5 mb-10 max-md:p-0">
            <h2 className="text-3xl font-bold text-center my-6 max-md:text-2xl max-md:my-4 max-sm:text-xl max-sm:my-2">Explore Our Collection</h2>
            <hr className='my-4' />
            {isDataLoaded ? (
                <div className="flex flex-wrap gap-y-12 m-auto justify-evenly items-center max-sm:flex-col max-sm:gap-10">
                    {books.map((e, index) => (
                        <div key={index} className='max-sm:scale-110' > <BookCard book={e} /> </div>
                    ))}
                </div>) :
                <div className="flex h-[70vh] justify-center items-center">
                    <h2 className="text-xl font-bold text-center my-6 animate-pulse">Loading...</h2>
                </div>
            }
        </div>

    )
}

export default BooksPage