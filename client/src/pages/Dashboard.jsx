import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
                <p className="text-gray-600 text-lg">
                    Welcome back, <span className="font-semibold text-blue-600">{user?.name}</span>!
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-2">User Profile Info</h3>
                    <ul className="space-y-2 text-blue-700">
                        <li><span className="font-bold">ID:</span> {user?.id}</li>
                        <li><span className="font-bold">Email:</span> {user?.email}</li>
                        <li><span className="font-bold">Role:</span> {user?.role}</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                        <h3 className="font-bold text-gray-800 mb-2">Feature Card {item}</h3>
                        <p className="text-gray-500 text-sm">This is a protected component only visible to authenticated users.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
