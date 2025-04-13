import React from "react";
import { Link } from "react-router-dom";


const OrderListPage = () => {
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
                        <h2 className="text-xl font-semibold text-gray-800">Order Management</h2>
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

                {/* Order Lists Table */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Order Lists</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update Data</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Inverness McKenzie</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-blue-600">#746815</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Plain Pizza</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400">★★★★★</td>
                                        <td className="px-6 py-4 whitespace-nowrap">100</td>
                                        <td className="px-6 py-4 whitespace-nowrap">$85.40</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-blue-600 hover:text-blue-800">Le Statistic</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Hermann R Schaittel</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-blue-600">#478651</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Chicken Birpani</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400">★★★★★</td>
                                        <td className="px-6 py-4 whitespace-nowrap">75</td>
                                        <td className="px-6 py-4 whitespace-nowrap">$40.75</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-blue-600 hover:text-blue-800">Clear List</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Spruce Springchem</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-blue-600">#584875</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Panzer Butter Masala</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400">★★★★★</td>
                                        <td className="px-6 py-4 whitespace-nowrap">56</td>
                                        <td className="px-6 py-4 whitespace-nowrap">$48.28</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-green-600 hover:text-green-800">Good</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Bailey Wenger</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-blue-600">#776182</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Egg Fried Rice</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400">★★★★★</td>
                                        <td className="px-6 py-4 whitespace-nowrap">30</td>
                                        <td className="px-6 py-4 whitespace-nowrap">$68.40</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-green-600 hover:text-green-800">Garden</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Usraka Gurumetszer</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-blue-600">#946874</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Sweet Corn Soap</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400">★★★★★</td>
                                        <td className="px-6 py-4 whitespace-nowrap">96</td>
                                        <td className="px-6 py-4 whitespace-nowrap">$68.40</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-green-600 hover:text-green-800">Gell</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Gustav Purpleson</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-blue-600">#676874</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Nutsides</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400">★★★★★</td>
                                        <td className="px-6 py-4 whitespace-nowrap">48</td>
                                        <td className="px-6 py-4 whitespace-nowrap">$84.25</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-green-600 hover:text-green-800">Green</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {/* Footer */}
                    <footer className="mt-6 text-center text-gray-500 text-sm">
                        <p>© 2025 Demo. All Right Reserved</p>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default OrderListPage;