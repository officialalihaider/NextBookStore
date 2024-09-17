import React from 'react'

const BookCard = ({ book }) => {
    const imgUrl = new URL(`../assets/${book.image}`, import.meta.url).href;
    return (
        <div className='card w-[22vw] h-[60vh] bg-slate-200 shadow-xl p-4 rounded-xl flex flex-col hover:transform hover:scale-105 transition-all ease-in-out duration-300 max-md:w-[40vw] max-md:h-[50vh] max-sm:flex-row max-sm:w-[82vw] max-sm:h-[28vh] max-sm:p-1'>
            <div className="CoverImage h-[60%] m-auto max-sm:w-1/2 bg-yegfllow-400 max-sm:h-[90%] flex justify-center items-center">
                <img src={imgUrl} alt={book.image} className='w-full scale-110 max-sm:scale-150' />
            </div>
            <div className='card-body w-[90%] m-auto max-md:w-full max-sm:w-1/2 max-sm:mr-1 bg-bldfue-800 '>
                <span className="text-xs bg-slate-700 text-white px-2 p-1 rounded-full shadow-lg shadow-slate-300 max-md:text-[0.65rem] max-sm:text-[0.55rem] ">{book.category}</span>
                <h2 className='card-title text-xl font-bold mt-1 max-md:text-lg max-sm:text-base'>{book.name}</h2>
                <p className='card-desc text-sm text-justify mt-2 line-clamp-2 max-md:text-xs max-sm:text-[0.7rem] max-sm:text-left'>{book.desc}</p>
                <div className='flex justify-between my-4 items-center self-end mx-2 max-sm:flex-col'>
                    <h2 className='font-semibold text-lg max-sm:text-sm max-sm:mx-0 max-sm:self-start'>₹ {book.price}</h2>
                    <button className='bg-blue-600 p-1 px-2 rounded-xl text-white hover:bg-blue-800 active:bg-blue-900 max-sm:text-xs max-sm:self-end'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard