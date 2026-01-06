import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import imageTobase64 from '../src/helpers/imageTobase64';

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmpassword: "",
        profilePic: ""
    });

    const handleuploadPic = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const imagePic = await imageTobase64(file);
            console.log("imagePic", imagePic);
            setData((prev) => ({
                ...prev,
                profilePic: imagePic
            }));
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    console.log("data signup", data);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", data);
    };

    return (
        <section id='SignUp'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <img 
                            src={data.profilePic || "https://via.placeholder.com/80"} 
                            alt='Profile' 
                            className='w-full h-full object-cover'
                        />
                        <form>
                            <label>
                                <input 
                                    type='file' 
                                    className='hidden' 
                                    onChange={handleuploadPic}
                                    accept="image/*"
                                />
                            </label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                Upload Photo
                            </div>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Name:</label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='text' 
                                    placeholder='Enter your name' 
                                    name='name'
                                    value={data.name} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                        </div>

                        <div className='grid'>
                            <label>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='Enter email' 
                                    name='email'
                                    value={data.email} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                        </div>

                        <div>
                            <label>Password:</label>
                            <div className='bg-slate-100 p-2 flex items-center gap-2'>
                                <input 
                                    type={showPassword ? "text" : 'password'} 
                                    placeholder='Enter password' 
                                    name='password'
                                    value={data.password} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent'
                                />
                                <div 
                                    className='cursor-pointer text-xl p-1' 
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password:</label>
                            <div className='bg-slate-100 p-2 flex items-center gap-2'>
                                <input 
                                    type={showConfirmPassword ? "text" : 'password'} 
                                    placeholder='Confirm password' 
                                    name='confirmpassword'
                                    value={data.confirmpassword} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent'
                                />
                                <div 
                                    className='cursor-pointer text-xl p-1' 
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className='bg-black hover:bg-gray-800 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'
                        >
                            Sign up
                        </button>
                    </form>
                    
                    <p className='my-5 text-center'>
                        Already have account?{' '}
                        <Link to="/login" className='text-red-600 hover:text-red-700 hover:underline'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};
