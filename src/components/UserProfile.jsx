import React from 'react'

const UserProfile = ({ user, handleLogOut }) => {
    const userData = user ? user.user : null;
    return (
        <div className='w-[90%] m-auto'>
            <h2 className="text-2xl font-bold my-4 text-center text-slate-800 max-md:text-xl">User Profile</h2>
            <h1 className="text-slate-600 text-sm max-sm:text-xs">Name : </h1>
            <h1 className="block mb-5 font-bold text-lg text-slate-900 max-md:text-base max-sm:text-sm">{userData.fullname}</h1>
            <h1 className="text-slate-600 text-sm max-sm:text-xs">Email : </h1>
            <h1 className="block mb-5 font-bold text-lg text-slate-900 max-md:text-base max-sm:text-sm">{userData.email}</h1>
            <div className='text-end text-sm mt-4'>
                <button onClick={handleLogOut} className="text-red-700 underline font-bold text-lg hover:text-red-400 max-sm:text-base max-sm:m-4">Logout</button>
            </div>
        </div>
    )
}

export default UserProfile