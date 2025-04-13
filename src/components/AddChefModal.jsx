import React from "react";
import { Link } from "react-router-dom";

const AddChefModal = () => {

    return (

        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
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

                {/* Authentication Section */}
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Add New Chef</h2>
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

                {/* Main Content Area */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Add New Chef Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h2 className="text-xl font-bold mb-4">ADD NEW CHIT</h2>
                                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                                    <h3 className="font-semibold mb-2">Invite New Chef</h3>
                                    <p className="text-gray-600 mb-3">Invite top your organization you Member by Email</p>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        Sprite Now Chef
                                    </button>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-1">Full Name:</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1">Designation:</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Special Dish:</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-1">Age:</label>
                                            <input
                                                type="number"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1">Experience:</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Phone No:</label>
                                        <input
                                            type="tel"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Address:</label>
                                        <textarea
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Email ID:</label>
                                        <input
                                            type="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">About Me:</label>
                                        <textarea
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-1">Facebook URL:</label>
                                            <input
                                                type="url"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1">Twitter URL:</label>
                                            <input
                                                type="url"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-1">Linked in URL:</label>
                                            <input
                                                type="url"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mt-4"
                                    >
                                        Add Chef
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Existing Chefs List */}
                        <div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-bold mb-4">Name / Chef Page</h2>

                                <div className="space-y-4">
                                    {/* Chef Card 1 */}
                                    <div className="border-b pb-4">
                                        <h3 className="font-semibold">Inverness Moderate</h3>
                                        <p className="text-gray-600">Junior Chef</p>
                                        <p className="text-gray-600">Special Dish: <span className="font-medium">Chicken Burger</span></p>
                                    </div>

                                    {/* Chef Card 2 */}
                                    <div className="border-b pb-4">
                                        <h3 className="font-semibold">Brandon Guidelines</h3>
                                        <p className="text-gray-600">Junior Chef</p>
                                        <p className="text-gray-600">Special Dish: <span className="font-medium">Chicken Fried Rice</span></p>
                                    </div>

                                    {/* Chef Card 3 */}
                                    <div className="border-b pb-4">
                                        <h3 className="font-semibold">Partley Montana</h3>
                                        <p className="text-gray-600">Chef</p>
                                        <p className="text-gray-600">Special Dish: <span className="font-medium">Chilli Chicken</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddChefModal;