import React, { useState } from 'react';
import moview_bg from '../../assets/auth/moview_bg.png';
import google from '../../assets/auth/google.png';
import facebook from '../../assets/auth/facebook.png';
import apple from '../../assets/auth/apple.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginPage = () => {
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        // Add your login logic here
        nav("/dashboard/home");
    };

    return (
        <div style={{ background: `url(${moview_bg})` }} className='flex justify-center items-center w-screen h-screen bg-cover bg-center'>
            
            <div className="bg-[#112F5A] bg-opacity-90 rounded-md w-[90%] sm:w-[500px] p-8 md:p-12 relative">
                
                <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => nav("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-white text-2xl font-bold text-center mb-2">Welcome back!</h2>
                <p className="text-center text-[#C5DDFF] text-sm mb-6">Log in to access MORE earnings</p>

                <div className="flex justify-center space-x-3 mb-6">
                    <button className="flex items-center justify-center bg-white border border-gray-600 rounded-lg py-2 w-full max-w-[120px] ">
                        <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                        <span className="text-sm">Google</span>
                    </button>
                    <button className="flex items-center justify-center bg-white border border-gray-600 rounded-lg py-2 w-full max-w-[120px] ">
                        <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                        <span className="text-sm">Facebook</span>
                    </button>
                    <button className="flex items-center justify-center bg-white border border-gray-600 rounded-lg py-2 w-full max-w-[120px] ">
                        <img src={apple} alt="Apple" className="w-4 mr-2" />
                        <span className="text-sm">Apple</span>
                    </button>
                </div>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-600" />
                    <span className="px-3 text-sm text-gray-400">Or sign in with</span>
                    <hr className="flex-grow border-gray-600" />
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <MdOutlineMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#112F5A] border border-gray-600 rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-[#12B037] placeholder-gray-400 text-white"
                            required
                        />
                    </div>
                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full bg-[#112F5A] border border-gray-600 rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-[#12B037] placeholder-gray-400  text-white"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="text-left text-sm text-[#C5DDFF] hover:underline cursor-pointer">
                       <Link to={"/forgot"}>Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#12B037] to-[#18B451] text-white py-3 rounded-full text-md font-medium shadow-[0_11px_29px_0_rgba(20,169,144,0.3)] hover:opacity-90 transition-opacity"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-[#C5DDFF]">
                    Don't have an account? <Link to={"/register"} className="font-semibold text-white hover:underline">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;