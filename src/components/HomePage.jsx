import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar Menu - Dark Theme */}
            <div className="w-64 bg-gray-800 text-white p-6">
                <h1 className="text-2xl font-bold mb-8">Demo</h1>



                {/* Order List Section */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-3 text-blue-300">Menu</h2>
                    <ul className="space-y-2">
                        <Link to='/'><li className="flex items-center ml-6 pb-2 text-gray-300 hover:text-white">
                            Home Page
                        </li></Link>

                        <Link to='/order-list'><li className="flex items-center pb-2 ml-6 text-gray-300 hover:text-white">
                            Orders Page
                        </li></Link>

                        <Link to='/chef-list'> <li className="flex items-center pb-2 ml-6 text-gray-300 hover:text-white">
                            Chef Page
                        </li>
                        </Link>

                        <Link to='/add-chef'> <li className="flex items-center ml-6 text-gray-300 hover:text-white">
                            Add Chef
                        </li>
                        </Link>
                    </ul>
                </div>

                {/* Attributization Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-3 text-blue-300">Attributization</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center ml-6 text-gray-300 hover:text-white">
                            <span className="mr-2">-</span>
                            <span>Login</span>
                        </li>
                        <li className="flex items-center ml-6 text-gray-300 hover:text-white">
                            <span className="mr-2">-</span>
                            <span>Register Now</span>
                        </li>
                        <li className="flex items-center ml-6 text-gray-300 hover:text-white">
                            <span className="mr-2">-</span>
                            <span>Local Screen</span>
                        </li>
                        <li className="flex items-center ml-6 text-gray-300 hover:text-white">
                            <span className="mr-2">-</span>
                            <span>Recover Password</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <div className="flex items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="User"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span className="text-sm font-medium">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {/* 15th Years Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">15th Years</h2>
                        <p className="text-gray-700 mb-3">
                            This Year Winner to Tomatsu. Congratulation!
                        </p>
                        <p className="text-gray-600 mb-4">
                            A small river named Duden flows by their place and supplies it with the necessary reguillills. It is a paradisomatic country.
                        </p>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Summary</h3>
                            <ul className="space-y-1">
                                <li className="flex items-center">
                                    <span className="mr-2">-</span>
                                    <span className="font-medium">Authority/Date</span>
                                </li>
                                <li className="flex items-center ml-6">
                                    <span className="mr-2">-</span>
                                    <span>Login</span>
                                </li>
                                <li className="flex items-center ml-6">
                                    <span className="mr-2">-</span>
                                    <span>Register Now</span>
                                </li>
                                <li className="flex items-center ml-6">
                                    <span className="mr-2">-</span>
                                    <span>Lock Screen</span>
                                </li>
                                <li className="flex items-center ml-6">
                                    <span className="mr-2">-</span>
                                    <span>Receiver Password</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Rest of your dashboard content... */}
                    {/* (Include all the other sections from previous implementation) */}

                </main>
            </div>
        </div>
    );
};

export default HomePage;