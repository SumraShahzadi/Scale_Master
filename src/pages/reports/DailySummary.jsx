import React from 'react';

const DailySummary = () => {
    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Daily Summary</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Detailed transactions and weight summary for today.</p>
                </div>
                <div className="flex gap-2">
                    <input
                        type="date"
                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all">
                        <span className="material-icons-outlined text-lg">download</span>
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: "Total Slips", value: "45", icon: "receipt_long", color: "bg-blue-50 text-blue-600" },
                    { title: "Total Weight", value: "850 Tons", icon: "monitor_weight", color: "bg-green-50 text-green-600" },
                    { title: "Avg Weight/Slip", value: "18.8 Tons", icon: "analytics", color: "bg-purple-50 text-purple-600" },
                    { title: "Active Hours", value: "8.5 Hrs", icon: "schedule", color: "bg-orange-50 text-orange-600" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color} bg-opacity-100 dark:bg-opacity-20`}>
                            <span className="material-icons-outlined">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">{stat.title}</p>
                            <h3 className="text-xl font-bold text-dark dark:text-white">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Transactions Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm flex flex-col flex-1">
                <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-dark dark:text-white">Transactions</h3>
                    <div className="relative">
                        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder="Search slips..."
                            className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary w-64"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 dark:text-slate-400 uppercase font-semibold bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                                <th className="px-6 py-4">Slip ID</th>
                                <th className="px-6 py-4">Time</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Vehicle</th>
                                <th className="px-6 py-4 text-right">Net Weight</th>
                                <th className="px-6 py-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
                            {[
                                { id: "SL-2024-001", time: "08:15 AM", customer: "Ali Traders", vehicle: "LES-1234", weight: "45.2 Tons", status: "Completed" },
                                { id: "SL-2024-002", time: "09:30 AM", customer: "Fast Logistics", vehicle: "KHI-9876", weight: "32.1 Tons", status: "Pending" },
                                { id: "SL-2024-003", time: "10:45 AM", customer: "City Construction", vehicle: "LHR-5544", weight: "28.5 Tons", status: "Completed" },
                                { id: "SL-2024-004", time: "11:20 AM", customer: "Agri Corp", vehicle: "MNZ-3322", weight: "15.0 Tons", status: "Completed" },
                                { id: "SL-2024-005", time: "12:10 PM", customer: "Metro Builders", vehicle: "FSD-1122", weight: "40.8 Tons", status: "Pending" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-primary">{row.id}</td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">{row.time}</td>
                                    <td className="px-6 py-4 text-dark dark:text-white font-medium">{row.customer}</td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">{row.vehicle}</td>
                                    <td className="px-6 py-4 text-right font-bold text-dark dark:text-slate-200">{row.weight}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.status === 'Completed'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DailySummary;
