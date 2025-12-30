import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    // Icons as Components
    const GoogleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4" fill="currentColor"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
    );

    const FacebookIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
    );

    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
    );

    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.7-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
    );

    const EnvelopeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
    );

    const LockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" /></svg>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-bg-light font-sans relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px]" />
                <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
            </div>

            <div className="relative w-full max-w-4xl min-h-[600px] overflow-hidden bg-white rounded-2xl shadow-2xl z-10 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">

                {/* Sign Up Form Container */}
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center p-10 transition-all duration-700 ease-in-out ${isSignUp ? 'translate-x-full opacity-100 z-50' : 'opacity-0 z-10'
                        }`}
                >
                    <form className="flex flex-col items-center w-full text-center">
                        <h1 className="mb-4 text-3xl font-bold text-primary">Create Account</h1>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all transform hover:scale-110">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all transform hover:scale-110">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-all transform hover:scale-110">
                                <LinkedinIcon />
                            </a>
                        </div>
                        <span className="mb-4 text-xs text-gray-400 font-medium">or use your email for registration</span>

                        <div className="relative w-full mb-3 group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                <UserIcon />
                            </span>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="relative w-full mb-3 group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                <EnvelopeIcon />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="relative w-full mb-4 group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                <LockIcon />
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <button type="button" className="px-10 py-3 text-xs font-bold text-white uppercase tracking-wider transition-all transform rounded-full bg-primary shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Sign Up
                        </button>
                    </form>
                </div>

                {/* Sign In Form Container */}
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center p-10 transition-all duration-700 ease-in-out z-20 ${isSignUp ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                        }`}
                >
                    <form className="flex flex-col items-center w-full text-center">
                        <h1 className="mb-4 text-3xl font-bold text-primary">Sign in</h1>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all transform hover:scale-110">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all transform hover:scale-110">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-all transform hover:scale-110">
                                <LinkedinIcon />
                            </a>
                        </div>
                        <span className="mb-4 text-xs text-gray-400 font-medium">or use your account</span>

                        <div className="relative w-full mb-3 group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                <EnvelopeIcon />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="relative w-full mb-2 group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                                <LockIcon />
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <a href="#" className="mb-6 text-xs text-gray-500 hover:text-primary font-medium transition-colors">Forgot your password?</a>

                        <button type="button" className="px-10 py-3 text-xs font-bold text-white uppercase tracking-wider transition-all transform rounded-full bg-primary shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Overlay Container */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100 ${isSignUp ? '-translate-x-full' : ''
                        }`}
                >
                    <div
                        className={`relative -left-full h-full w-[200%] bg-gradient-to-r from-secondary to-primary/90 text-white transform transition-transform duration-700 ease-in-out ${isSignUp ? 'translate-x-1/2' : 'translate-x-0'
                            }`}
                    >
                        {/* Overlay Left (Visible when Sign Up is active) */}
                        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center transform translate-x-0 transition-transform duration-700 ease-in-out">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Welcome Back!</h1>
                            <p className="mb-8 text-sm font-light leading-6 tracking-wide text-gray-100">
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                className="px-10 py-3 text-xs font-bold text-white uppercase tracking-wider bg-transparent border-2 border-white rounded-full transition-all hover:bg-white hover:text-primary active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                                onClick={() => setIsSignUp(false)}
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Overlay Right (Visible when Sign In is active) */}
                        <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center transform translate-x-0 transition-transform duration-700 ease-in-out">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Hello, Friend!</h1>
                            <p className="mb-8 text-sm font-light leading-6 tracking-wide text-gray-100">
                                Enter your personal details and start journey with us
                            </p>
                            <button
                                className="px-10 py-3 text-xs font-bold text-white uppercase tracking-wider bg-transparent border-2 border-white rounded-full transition-all hover:bg-white hover:text-primary active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
                                onClick={() => setIsSignUp(true)}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/" className="mt-8 text-sm text-gray-500 hover:text-primary flex items-center gap-2 transition-colors z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>
        </div>
    );
};

export default Auth;
