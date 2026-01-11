import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    // Icons as Components
    const GoogleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
    );

    const FacebookIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
            <path fill="#1877F2" d="M24,4C12.954,4,4,12.954,4,24c0,9.961,7.262,18.239,16.75,19.728V29.77h-5.042v-5.77h5.042v-4.376c0-4.97,2.958-7.72,7.495-7.72c2.173,0,4.453,0.388,4.453,0.388v4.882h-2.508c-2.464,0-3.232,1.529-3.232,3.097v3.729h5.5l-0.879,5.77h-4.621v13.958C36.738,42.239,44,33.961,44,24C44,12.954,35.046,4,24,4z" />
        </svg>
    );

    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
            <path fill="#0A66C2" d="M41,4H7C5.343,4,4,5.343,4,7v34c0,1.657,1.343,3,3,3h34c1.657,0,3-1.343,3-3V7C44,5.343,42.657,4,41,4z M17,20v19h-6V20H17z M11,14.471c-1.999,0-3.611-1.612-3.611-3.611s1.612-3.611,3.611-3.611c1.999,0,3.611,1.612,3.611,3.611S12.999,14.471,11,14.471z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
        </svg>
    );

    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.7-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
    );

    // Updated container styles in the render to remove text-coloring classes that might override internal fills
    const socialBtnClass = "flex items-center justify-center w-10 h-10 border border-gray-100 rounded-full bg-white shadow-sm hover:shadow-md transition-all transform hover:scale-110";

    const EnvelopeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
    );

    const LockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" /></svg>
    );

    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.5 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-bg-light font-sans relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px]" />
                <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
            </div>

            <div className="relative w-full max-w-4xl min-h-[600px] flex bg-white rounded-2xl shadow-2xl z-10 overflow-hidden">

                {/* Left Side: Static Information Panel (Now on Left) */}
                <div className="hidden md:flex w-1/2 bg-gradient-to-br from-primary to-blue-700 text-white flex-col justify-center items-center p-12 relative overflow-hidden order-1">
                    {/* Decorative Circles */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 text-center max-w-md">
                        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Scale Master</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            The intelligent weighing management solution for modern industries. Accurate, reliable, and secure.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                <span className="text-2xl mb-2 block">⚖️</span>
                                <h3 className="font-bold text-sm">Precise Weighing</h3>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                <span className="text-2xl mb-2 block">📊</span>
                                <h3 className="font-bold text-sm">Smart Reports</h3>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                <span className="text-2xl mb-2 block">🔒</span>
                                <h3 className="font-bold text-sm">Secure Data</h3>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                <span className="text-2xl mb-2 block">☁️</span>
                                <h3 className="font-bold text-sm">Cloud Sync</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Area (Now on Right) */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center transition-all bg-white relative z-20 order-2">
                    <div className="w-full max-w-sm mx-auto">
                        <h1 className="text-3xl font-bold text-primary mb-2 text-center">
                            {isSignUp ? 'Create Account' : 'Sign In'}
                        </h1>
                        <p className="text-center text-gray-400 text-xs mb-6">
                            {isSignUp ? 'Register to get started' : 'Welcome back to Scale Master'}
                        </p>

                        <div className="flex gap-4 mb-6 justify-center">
                            <a href="#" className={socialBtnClass}>
                                <GoogleIcon />
                            </a>
                            <a href="#" className={socialBtnClass}>
                                <FacebookIcon />
                            </a>
                            <a href="#" className={socialBtnClass}>
                                <LinkedinIcon />
                            </a>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                                {isSignUp ? 'or register with email' : 'or login with email'}
                            </span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        {/* FORM FIELDS */}
                        <form className="space-y-4">
                            {isSignUp && (
                                <div className="relative group animate-fade-in-up">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                        <UserIcon />
                                    </span>
                                    <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" />
                                </div>
                            )}

                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                    <EnvelopeIcon />
                                </span>
                                <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" />
                            </div>

                            {isSignUp && (
                                <div className="relative group animate-fade-in-up">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                        <PhoneIcon />
                                    </span>
                                    <input type="tel" placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" />
                                </div>
                            )}

                            {isSignUp && (
                                <div className="relative group animate-fade-in-up">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                        <span className="text-sm">🏢</span>
                                    </span>
                                    <input type="text" placeholder="Company Name" className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" />
                                </div>
                            )}

                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                    <LockIcon />
                                </span>
                                <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" />
                            </div>

                            {!isSignUp && (
                                <div className="flex items-center justify-between mt-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300" />
                                        <span className="text-xs text-gray-500">Remember me</span>
                                    </label>
                                    <a href="#" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline">Forgot Password?</a>
                                </div>
                            )}

                            <button type="button" className="w-full mt-4 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all transform rounded-lg bg-primary shadow-lg shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/50 hover:-translate-y-0.5 active:scale-95">
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </button>
                        </form>

                        {/* TOGGLE LINK */}
                        <div className="mt-8 text-center text-sm">
                            <span className="text-gray-500">
                                {isSignUp ? "Already have an account? " : "Don't have an account? "}
                            </span>
                            <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="font-bold text-primary hover:underline focus:outline-none"
                            >
                                {isSignUp ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <Link to="/" className="mt-8 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-600 hover:text-primary hover:bg-white border border-gray-200 shadow-sm transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>
        </div>
    );
};

export default Auth;
