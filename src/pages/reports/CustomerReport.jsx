import React from 'react';

const CustomerReport = () => {
    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Customer Reports</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">View customer performance and transaction history.</p>
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-dark dark:text-white focus:outline-none focus:border-primary">
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>This Year</option>
                    </select>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all">
                        <span className="material-icons-outlined text-lg">download</span>
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Ali Traders", totalSlips: 154, totalWeight: "5,430 Tons", lastActive: "2 mins ago" },
                    { name: "Fast Logistics", totalSlips: 120, totalWeight: "4,200 Tons", lastActive: "1 hour ago" },
                    { name: "City Construction", totalSlips: 98, totalWeight: "3,800 Tons", lastActive: "Yesterday" },
                    { name: "Agri Corp", totalSlips: 85, totalWeight: "2,950 Tons", lastActive: "Today" },
                    { name: "Metro Builders", totalSlips: 72, totalWeight: "2,100 Tons", lastActive: "3 days ago" },
                    { name: "Global Exports", totalSlips: 60, totalWeight: "1,850 Tons", lastActive: "1 week ago" },
                ].map((customer, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                {customer.name.charAt(0)}
                            </div>
                            <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full">{customer.lastActive}</span>
                        </div>
                        <h3 className="text-lg font-bold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">{customer.name}</h3>
                        <div className="flex justify-between items-center text-sm">
                            <div>
                                <p className="text-gray-500 dark:text-slate-400">Slips</p>
                                <p className="font-bold text-dark dark:text-white">{customer.totalSlips}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 dark:text-slate-400">Total Weight</p>
                                <p className="font-bold text-dark dark:text-white">{customer.totalWeight}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReport;
