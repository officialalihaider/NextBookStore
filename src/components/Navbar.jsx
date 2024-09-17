import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { HiBars2 } from 'react-icons/hi2';
import Modal from './Modal';
import Login from './Login';
import UserProfile from './UserProfile';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('User'));
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.isUserLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoginOpen]);

    const handleLogOut = async () => {
        await localStorage.removeItem('User');
        setIsProfileOpen(false);
        setIsLoggedIn(false);
        toast.success('Logged out successfully');
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
          navigate(`/search/${searchQuery}`);
        }
      };
    return (
        <>
            <div className='w-screen p-4 px-14 bg-slate-200 flex justify-between items-center fixed top-0 z-20 shadow-lg font-modern max-md:px-10 max-sm:px-4 max-md:p-3 max-sm:p-2'>
                <div className="nav-left">
                    <h1 className='font-bold text-3xl text-slate-800 max-md:text-2xl max-sm:text-xl '><NavLink to="/">NextBookStore</NavLink></h1>
                </div>
                <div className="nav-right">
                    {/* for desktop view */}
                    <ul className='flex gap-6 justify-center items-center max-md:hidden'>
                        <NavLink to="/" className={({ isActive }) =>
                            `text-slate-700 transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                        }>Home</NavLink><NavLink to="/books" className={({ isActive }) =>
                            `text-slate-700 transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                        }>Books</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            `text-slate-700 transition-transform duration-300 ease-in-out ${isActive ? 'font-bold text-xl transform scale-110' : 'hover:scale-105'}`
                        }>About</NavLink>
                        <li className="relative flex items-center">
                            <input type="search" placeholder="Search" value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} className="p-1 pl-4 pr-7 bg-slate-300 focus:outline-none rounded-xl active:bg-slate-200" />
                            <button onClick={handleSearch} className="absolute right-1 top-1/2 transform -translate-y-1/2  px-1 rounded-r-md text-slate-600 hover:text-slate-800">
                                <FaSearch />
                            </button>
                        </li>
                        {isLoggedIn && <button className='bg-slate-800 hover:bg-slate-900 text-white p-2 px-5 rounded-xl font-bold' onClick={() => setIsProfileOpen(true)}>Profile</button>}
                        {!isLoggedIn && <button className='bg-slate-800 hover:bg-slate-900 text-white p-2 px-5 rounded-xl font-bold' onClick={() => setIsLoginOpen(true)}>Login</button>}
                    </ul>
                    {/* for mobile view */}
                    <div className="nav-right mobile-view md:hidden">
                        <div className='flex items-center gap-4'>
                            {isLoggedIn && <button className='bg-slate-800 hover:bg-slate-900 text-white p-1 px-3 rounded-lg font-bold max-sm:text-sm' onClick={() => setIsProfileOpen(true)}>Profile</button>}
                            {!isLoggedIn && <button className='bg-slate-800 hover:bg-slate-900 text-white p-1 px-3 rounded-lg font-bold max-sm:text-sm' onClick={() => setIsLoginOpen(true)}>Login</button>}
                            {!isMenuOpen && <button onClick={() => setIsMenuOpen(true)} className="text-slate-900 text-3xl"><HiBars2/></button>}
                            {isMenuOpen && <button onClick={() => setIsMenuOpen(false)} className="text-slate-900 text-3xl"><RxCross2/> </button>}
                        </div>
                    </div>
                </div>
                <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                    <Login setIsLoginOpen={setIsLoginOpen} />
                </Modal>
                <Modal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
                    <UserProfile user={user} handleLogOut={handleLogOut} />
                </Modal>
            </div>
            {/* Navbar Menu */}
            {isMenuOpen && (
                <ul className='fixed top-0 right-0 w-screen z-10 pt-[5rem] p-5 flex flex-col gap-2 bg-slate-200 shadow-lg animate-menu-open md:hidden'>
                    <NavLink to="/" className={({ isActive }) =>
                        `text-slate-700 pl-4  transition-transform duration-300 ease-in-out ${isActive ? 'font-bold scale-105 pl-5' : ''}`
                }>Home</NavLink><hr className='bg-slate-300 h-[2px]'/>
                    <NavLink to="/books" className={({ isActive }) =>
                        `text-slate-700 pl-4  transition-transform duration-300 ease-in-out ${isActive ? 'font-bold scale-105 pl-5' : ''}`
                }>Books</NavLink><hr className='bg-slate-300 h-[2px]'/>
                    <NavLink to="/about" className={({ isActive }) =>
                        `text-slate-700 pl-4  transition-transform duration-300 ease-in-out ${isActive ? 'font-bold scale-105 pl-5' : ''}`
                    }>About</NavLink><hr className='bg-slate-300 h-[2px]'/>
                    <li className="relative flex items-center">
                        <input type="search" placeholder="Search" value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} className=" w-[100%] p-2 pl-4 pr-10 bg-slate-300 focus:outline-none rounded-xl active:bg-slate-200" />
                        <button onClick={handleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-600">
                            <FaSearch />
                        </button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navbar;
