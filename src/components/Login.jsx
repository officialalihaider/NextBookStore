import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = ({ setIsLoginOpen }) => {

    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    // For Login form
    const {
        register: loginRegister,
        handleSubmit: handleLoginSubmit,
        formState: { isSubmitting: loginIsSubmitting, errors: loginErrors },
    } = useForm();

    // For Sign Up form
    const {
        register: signUpRegister,
        handleSubmit: handleSignUpSubmit,
        watch,
        formState: { isSubmitting: signupIsSubmitting, errors: signUpErrors },
    } = useForm();

    const onLoginSubmit = async (data) => {
        const user = {
            email: data.email,
            password: data.password,
        };
        try {
            const response = await axios.post(`${apiUrl}/user/login`, user);
            localStorage.setItem('User', JSON.stringify({
                user: response.data.user,
                isUserLoggedIn: true
            }));
            const { fullname } = response.data.user;
            toast.success(`Welcome , ${fullname} !`);
            setIsLoginOpen(false);

        } catch (error) {
            console.error('Login Error:', error.message);
            toast.error('Login failed. Please check your credentials.');
        }
    };

    const onSignUpSubmit = async (data) => {
        const user = {
            fullname: data.name,
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post(`${apiUrl}/user/signup`, user);
            toast.success('Sign-up successful! You can now log in.');
            setIsSignUpOpen(false)
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Sign-up failed. Please try again.');
            }
        }
    };
    const password = watch('password', '');
    return (<>
        {/* Log In Form */}
        {!isSignUpOpen && (
            <div className='w-[90%] m-auto'>
                <h2 className="text-3xl font-bold my-4 text-center text-slate-800 max-md:text-2xl">Login</h2>
                <form onSubmit={handleLoginSubmit(onLoginSubmit)} className='mx-2'>
                    <label className="block mb-1 mx-4 text-lg font-semibold max-md:text-base max-sm:text-sm max-md:mx-2 max-sm:mx-1">Email :</label>
                    <input
                        type="email"
                        placeholder='Enter Email'
                        className="border p-2 px-4 w-full mb-1  rounded-xl text-slate-800 bg-slate-100 outline-none max-sm:text-sm"
                        {...loginRegister('email', { required: 'Email is required' })}
                    />
                    {loginErrors.email && <p className="text-red-500 mx-4 text-sm opacity-85 max-sm:text-xs">{loginErrors.email.message}</p>}

                    <label className="block mt-4 mb-1 mx-4 text-lg font-semibold max-md:text-base max-sm:text-sm max-md:mx-2 max-sm:mx-1">Password :</label>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        className="border p-2 px-4 w-full mb-1  rounded-xl  text-slate-800 bg-slate-100 outline-none max-sm:text-sm"
                        {...loginRegister('password', { required: 'Password is required' })}
                    />
                    {loginErrors.password && <p className="text-red-500 mx-4 text-sm opacity-85 max-sm:text-xs">{loginErrors.password.message}</p>}

                    <div className='text-center mx-4'>
                        <button disabled={loginIsSubmitting} type="submit" className={`bg-slate-800 text-white font-semibold text-lg mt-4 p-2 px-5 rounded-xl max-sm:text-base ${loginIsSubmitting ? 'opacity-50' : 'hover:bg-slate-900'}`}>{loginIsSubmitting ? 'Logging in ...' : 'Login'}</button>
                    </div>
                </form>
                <div className='text-end text-sm mx-4 mt-4 max-sm:text-xs'>
                    <span>Not registered? </span><button onClick={() => setIsSignUpOpen(true)} className='underline text-blue-700 hover:text-blue-900 font-semibold text-lg max-sm:text-base'>Signup</button>
                </div>
            </div>
        )}

        {/* SignUp Form  */}
        {isSignUpOpen && (
            <div className='w-[90%] m-auto'>
                <h2 className="text-3xl font-bold my-4 text-center text-slate-800 max-md:text-2xl">Sign up</h2>
                <form onSubmit={handleSignUpSubmit(onSignUpSubmit)}>
                    <label className="block mb-1 mx-4 text-lg font-semibold max-md:text-base max-sm:text-sm max-md:mx-2 max-sm:mx-1">Email:</label>
                    <input
                        type="email"
                        placeholder='Enter Email'
                        className="border p-2 px-4 w-full mb-1  rounded-xl text-slate-800 bg-slate-100 outline-none max-sm:text-sm"
                        {...signUpRegister('email', {
                            required: 'Email is required'
                        })}
                    />
                    {signUpErrors.email && <span className="text-red-500 mx-4 text-sm opacity-85 max-sm:text-xs">{signUpErrors.email.message}</span>}

                    <label className="block mb-1 mx-4 text-lg font-semibold max-md:text-base max-sm:text-sm max-md:mx-2 max-sm:mx-1">Name:</label>
                    <input
                        type="text"
                        placeholder='Enter Full Name'
                        className="border p-2 px-4 w-full mb-1  rounded-xl text-slate-800 bg-slate-100 outline-none max-sm:text-sm"
                        {...signUpRegister('name', { required: 'Name is required' })}
                    />
                    {signUpErrors.name && <span className="text-red-500 mx-4 text-sm opacity-85 max-sm:text-xs">{signUpErrors.name.message}</span>}

                    <label className="block mb-1 mx-4 text-lg font-semibold max-md:text-base max-sm:text-sm max-md:mx-2 max-sm:mx-1">Password:</label>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        className="border p-2 px-4 w-full mb-1  rounded-xl text-slate-800 bg-slate-100 outline-none max-sm:text-sm"
                        {...signUpRegister('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters' },
                        })}
                    />
                    {signUpErrors.password && <span className="text-red-500 mx-4 text-sm opacity-85 max-sm:text-xs">{signUpErrors.password.message}</span>}

                    <label className="block mb-1 mx-4 text-lg font-semibold max-md:text-base max-sm:text-sm max-md:mx-2 max-sm:mx-1">Confirm Password:</label>
                    <input
                        type="password"
                        placeholder='Re-Enter Password'
                        className="border p-2 px-4 w-full mb-1  rounded-xl text-slate-800 bg-slate-100 outline-none max-sm:text-sm"
                        {...signUpRegister('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: (value) => value === password || 'Passwords do not match',
                        })}
                    />
                    {signUpErrors.confirmPassword && (<span className="text-red-500 mx-4 text-sm opacity-85 max-sm:text-xs">{signUpErrors.confirmPassword.message}</span>)}

                    <div className='text-center mx-4'>
                        <button disabled={signupIsSubmitting} type="submit" className={`bg-slate-800 text-white font-semibold text-lg mt-4 p-2 px-5 rounded-xl max-sm:text-base ${signupIsSubmitting ? 'opacity-50' : 'hover:bg-slate-900'}`}>{signupIsSubmitting ? 'Signing Up ...' : 'Sign Up'}</button>
                    </div>
                </form>
                <div className='text-end text-sm mx-4 mt-4 max-sm:text-xs'>
                    <span>Already registered? </span><button onClick={() => setIsSignUpOpen(false)} className='underline text-blue-700 hover:text-blue-900 font-semibold text-lg max-sm:text-base'>Login</button>
                </div>
            </div>
        )}

    </>
    )
};

export default Login;