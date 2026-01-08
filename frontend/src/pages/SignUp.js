import React, { useState } from 'react';
import { FaRegEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import imageTobase64 from '../helpers/imageTobase64';
import { toast } from 'react-toastify';

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmpassword: "",
        profilePic: ""
    });
    const navigate = useNavigate();

    const handleuploadPic = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const imagePic = await imageTobase64(e.target.files[0]);
            setData((prev) => ({
                ...prev,
                profilePic: imagePic
            }));
        }
    };

    const handleOnChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (data.password !== data.confirmpassword) {
            toast.error("Passwords don't match!");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(SummaryApi.signUP.url, {
                method: SummaryApi.signUP.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (responseData.success) {
                toast.success("Account created successfully!");
                navigate("/login");
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            toast.error("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='SignUp' className='py-20'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 py-10 w-full max-w-sm mx-auto rounded-lg shadow-xl'>
                    <div className='w-24 h-24 mx-auto relative overflow-hidden rounded-full border-4 border-red-100'>
                        <img 
                            src={data.profilePic || "https://via.placeholder.com/100?text=GG"} 
                            alt='Profile' 
                            className='w-full h-full object-cover'
                        />
                        <label className='text-xs bg-red-100 text-red-600 pb-3 pt-2 cursor-pointer text-center absolute bottom-0 w-full hover:bg-red-200 transition-colors'>
                            <input 
                                type='file' 
                                className='hidden' 
                                onChange={handleuploadPic}
                                accept="image/*"
                            />
                            📸 Upload Photo
                        </label>
                    </div>

                    <form className='pt-8 flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label className='text-sm font-medium text-slate-700'>Name:</label>
                            <div className='bg-slate-100 p-3 rounded-lg border'>
                                <input 
                                    type='text' 
                                    placeholder='Enter your name' 
                                    name='name'
                                    value={data.name} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent text-lg'
                                />
                            </div>
                        </div>

                        <div className='grid'>
                            <label className='text-sm font-medium text-slate-700'>Email:</label>
                            <div className='bg-slate-100 p-3 rounded-lg border'>
                                <input 
                                    type='email' 
                                    placeholder='Enter email' 
                                    name='email'
                                    value={data.email} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent text-lg'
                                />
                            </div>
                        </div>

                        <div>
                            <label className='text-sm font-medium text-slate-700 block mb-1'>Password:</label>
                            <div className='bg-slate-100 p-3 rounded-lg border flex items-center gap-3'>
                                <input 
                                    type={showPassword ? "text" : 'password'} 
                                    placeholder='Enter password' 
                                    name='password'
                                    value={data.password} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent text-lg'
                                />
                                <div 
                                    className='cursor-pointer text-xl p-1 hover:bg-slate-200 rounded-full transition-colors' 
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='text-sm font-medium text-slate-700 block mb-1'>Confirm Password:</label>
                            <div className='bg-slate-100 p-3 rounded-lg border flex items-center gap-3'>
                                <input 
                                    type={showConfirmPassword ? "text" : 'password'} 
                                    placeholder='Confirm password' 
                                    name='confirmpassword'
                                    value={data.confirmpassword} 
                                    onChange={handleOnChange} 
                                    required 
                                    className='w-full h-full outline-none bg-transparent text-lg'
                                />
                                <div 
                                    className='cursor-pointer text-xl p-1 hover:bg-slate-200 rounded-full transition-colors' 
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 w-full rounded-full font-semibold text-lg transition-all duration-300 mx-auto block mt-4 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>
                    </form>
                    
                    <p className='my-6 text-center text-slate-600'>
                        Already have account?{' '}
                        <Link to="/login" className='text-red-600 hover:text-red-700 font-semibold hover:underline transition-all'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    ); 
};

export default SignUp;
