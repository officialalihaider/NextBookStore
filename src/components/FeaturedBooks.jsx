import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCard from './BookCard';

const FeaturedBooks = () => {
  const [books, setBooks] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const filterBooks = async () => {
      try {
        const apiUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(`${apiUrl}/books`);
        const filterData = await response.data.filter((e) => e.price === 0)
        setBooks(filterData);
        setIsDataLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }
    filterBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-[98vw] m-auto my-5 p-5 max-md:my-2 max-md:p-0'>
      <h1 className='font-bold text-xl pl-8 max-md:pl-5'>Featured Books</h1>
      <p className='pl-8 my-2 max-md:pl-6 max-md:line-clamp-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sint laboriosam, minus odit, dolorum repudiandae est quibusdam omnis beatae asperiores, ipsum soluta tempora deleniti sequi quod recusandae aperiam. Similique ipsa dolore veniam minima ipsam.</p>
      {isDataLoaded ? (
      <div className="slider-container w-[95%] m-auto my-5 max-md:w-[85%] max-md:mb-10">
        <Slider {...settings}>
          {books.map((e, index) => (
            <div key={index} className='ml-14 max-md:ml-0'><BookCard book={e} /></div>
          ))}
        </Slider>
      </div>) :
        <div className="flex h-[70vh] justify-center items-center max-sm:h-[30vh]">
          <h2 className="text-xl font-bold text-center animate-pulse">Loading...</h2>
        </div>
      }
    </div>

  )
}

export default FeaturedBooks