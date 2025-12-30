import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutLocal, logoutUser } from '../slices/authSlice';
import { LogOut, User, LayoutDashboard, ShieldCheck } from 'lucide-react';

const Layout = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logoutUser());
        dispatch(logoutLocal());
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                MERN Auth
                            </Link>
                        </div>
                        <nav className="flex items-center space-x-4">
                            {isAuthenticated ? (
                                <>
                                    <span className="text-gray-600 text-sm hidden sm:block">
                                        Welcome, <span className="font-semibold text-gray-800">{user?.name}</span>
                                    </span>
                                    {user?.role === 'admin' && (
                                        <Link to="/admin" className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full transition" title="Admin Panel">
                                            <ShieldCheck size={20} />
                                        </Link>
                                    )}
                                    <Link to="/dashboard" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition" title="Dashboard">
                                        <LayoutDashboard size={20} />
                                    </Link>
                                    <button 
                                        onClick={handleLogout}
                                        className="flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition text-sm font-medium"
                                    >
                                        <LogOut size={16} />
                                        <span>Logout</span>
                                    </button>
                                </>
                            ) : (
                                <div className="space-x-4">
                                    <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition">Login</Link>
                                    <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
