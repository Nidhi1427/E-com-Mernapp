import React, { useState } from 'react';
import { FaRegEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa6";
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
        <div style={{
            minHeight: '100vh',
            padding: '2rem 1rem',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ width: '100%', maxWidth: '480px' }}>
                {/* Header Title */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ 
                        fontSize: '3.5rem', 
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, #10b981, #34d399)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                    }}>
                        Gadget Gallery
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>
                        Create Your Account
                    </p>
                </div>

                {/* Main Form Card */}
                <div style={{
                    padding: '3rem',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '2.5rem',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 35px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)'
                }}>
                    {/* Profile Picture */}
                    <div style={{
                        width: '120px',
                        height: '120px',
                        margin: '0 auto 2.5rem',
                        position: 'relative',
                        borderRadius: '50%',
                        border: '4px solid rgba(16,185,129,0.7)',
                        overflow: 'hidden',
                        boxShadow: '0 0 0 6px rgba(16,185,129,0.3), 0 20px 40px rgba(16,185,129,0.15)'
                    }}>
                        <img 
                            src={data.profilePic || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"} 
                            alt='Profile' 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                transition: 'all 0.4s ease',
                                filter: data.profilePic ? 'none' : 'brightness(0.65) saturate(0.9)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <label style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'all 0.4s ease',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}>
                            <input 
                                type='file' 
                                style={{ display: 'none' }}
                                onChange={handleuploadPic}
                                accept="image/*"
                            />
                            <span style={{
                                color: 'white',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                padding: '0.75rem 1.5rem',
                                background: 'linear-gradient(135deg, #10b981, #34d399)',
                                borderRadius: '2rem',
                                boxShadow: '0 8px 25px rgba(16,185,129,0.4)',
                                whiteSpace: 'nowrap'
                            }}>
                                📸 Change Photo
                            </span>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                        {/* Name Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.75rem', 
                                fontSize: '1.25rem', 
                                fontWeight: '600', 
                                color: 'rgba(255,255,255,0.95)' 
                            }}>
                                <FaUser style={{ color: '#10b981', fontSize: '1.4rem' }} />
                                Full Name
                            </label>
                            <div style={{
                                padding: '1.25rem 1.5rem',
                                background: 'rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.15)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                <input 
                                    type='text' 
                                    name='name'
                                    value={data.name} 
                                    onChange={handleOnChange} 
                                    required 
                                    placeholder="Enter your full name"
                                    style={{
                                        width: '100%',
                                        height: '3.5rem',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        padding: 0
                                    }}
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.75rem', 
                                fontSize: '1.25rem', 
                                fontWeight: '600', 
                                color: 'rgba(255,255,255,0.95)' 
                            }}>
                                <FaEnvelope style={{ color: '#3b82f6', fontSize: '1.4rem' }} />
                                Email Address
                            </label>
                            <div style={{
                                padding: '1.25rem 1.5rem',
                                background: 'rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.15)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                <input 
                                    type='email' 
                                    name='email'
                                    value={data.email} 
                                    onChange={handleOnChange} 
                                    required 
                                    placeholder="Enter your email"
                                    style={{
                                        width: '100%',
                                        height: '3.5rem',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        padding: 0
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.75rem', 
                                fontSize: '1.25rem', 
                                fontWeight: '600', 
                                color: 'rgba(255,255,255,0.95)' 
                            }}>
                                <FaLock style={{ color: '#f59e0b', fontSize: '1.4rem' }} />
                                Password
                            </label>
                            <div style={{
                                padding: '1.25rem 1.5rem',
                                background: 'rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.6)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                <input 
                                    type={showPassword ? "text" : 'password'} 
                                    name='password'
                                    value={data.password} 
                                    onChange={handleOnChange} 
                                    required 
                                    placeholder="Create password"
                                    style={{
                                        flex: 1,
                                        height: '3.5rem',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        padding: '0 0.5rem 0 0'
                                    }}
                                />
                                <button 
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '1rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        border: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.75rem', 
                                fontSize: '1.25rem', 
                                fontWeight: '600', 
                                color: 'rgba(255,255,255,0.95)' 
                            }}>
                                <FaLock style={{ color: '#f59e0b', fontSize: '1.4rem' }} />
                                Confirm Password
                            </label>
                            <div style={{
                                padding: '1.25rem 1.5rem',
                                background: 'rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.6)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
                                <input 
                                    type={showConfirmPassword ? "text" : 'password'} 
                                    name='confirmpassword'
                                    value={data.confirmpassword} 
                                    onChange={handleOnChange} 
                                    required 
                                    placeholder="Confirm password"
                                    style={{
                                        flex: 1,
                                        height: '3.5rem',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        padding: '0 0.5rem 0 0'
                                    }}
                                />
                                <button 
                                    type='button'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={{
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        borderRadius: '1rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        border: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                height: '4.5rem',
                                background: 'linear-gradient(135deg, #10b981, #34d399)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '2rem',
                                fontSize: '1.4rem',
                                fontWeight: '800',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                boxShadow: '0 15px 35px rgba(16,185,129,0.4)',
                                transition: 'all 0.3s ease',
                                opacity: loading ? 0.7 : 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem'
                            }}
                            onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = 'translateY(-3px)')}
                            onMouseLeave={(e) => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            {loading ? (
                                <>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        border: '2px solid rgba(255,255,255,0.3)',
                                        borderTop: '2px solid white',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }}></div>
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    🚀 Create Account
                                </>
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div style={{ 
                        paddingTop: '2.5rem', 
                        marginTop: '3rem', 
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        textAlign: 'center'
                    }}>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                            Already have an account?
                        </p>
                        <Link 
                            to="/login" 
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                color: '#3b82f6',
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '1rem 2.5rem',
                                borderRadius: '2rem',
                                textDecoration: 'none',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(59,130,246,0.3)',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 5px 20px rgba(59,130,246,0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59,130,246,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(59,130,246,0.2)';
                            }}
                        >
                            Sign In →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default SignUp;
