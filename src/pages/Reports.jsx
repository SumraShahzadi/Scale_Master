import React, { useState } from 'react';

const Reports = () => {
    const [reportType, setReportType] = useState('Daily Summary');

    const handleGenerate = () => {
        alert("Generating report...");
    }

    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Reports & Analytics</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Generate insights and export data.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-bold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-2 transition-colors">
                        <span className="material-icons-outlined text-lg">calendar_today</span>
                        Last 30 Days
                    </button>
                    <button
                        onClick={handleGenerate}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all"
                    >
                        <span className="material-icons-outlined text-lg">download</span>
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Report Type Selection */}
            {/* Report Type Selection */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                {[
                    { name: 'Daily Summary', path: '/reports/daily' },
                    { name: 'Customer Report', path: '/reports/customers' },
                    { name: 'Vehicle Report', path: '/reports/vehicles' },
                    { name: 'Product Summary', path: '/reports/products' },
                    { name: 'Financial Report', path: '/reports/financial' }
                ].map((item) => (
                    <button
                        key={item.name}
                        onClick={() => window.location.href = item.path}
                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-bold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary transition-all white-space-nowrap"
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Total Weight", value: "1,240 Tons", change: "+12%", color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
                    { title: "Total Slips", value: "450", change: "+5%", color: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
                    { title: "Revenue (Est)", value: "PKR 5.2M", change: "+8%", color: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                        <p className="text-sm font-medium text-gray-500 dark:text-slate-400 mb-1">{stat.title}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-2xl font-bold text-dark dark:text-white">{stat.value}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${stat.color}`}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts & Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visual Chart Placeholder */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm min-h-[300px] flex flex-col">
                    <h3 className="text-lg font-bold text-dark dark:text-white mb-6">Weight Trend (Last 7 Days)</h3>
                    <div className="flex-1 flex items-end justify-between gap-2 px-4 border-b border-gray-100 dark:border-slate-700 pb-2">
                        {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group w-full">
                                <div className="w-full bg-primary/20 dark:bg-primary/40 rounded-t-lg relative transition-all duration-500 group-hover:bg-primary dark:group-hover:bg-primary" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-sm">
                                        {h * 10} Tons
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">Day {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Customers Table */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-dark dark:text-white mb-4">Top Customers</h3>
                    <div className="flex-1 overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 dark:text-slate-400 uppercase font-semibold border-b border-gray-100 dark:border-slate-700">
                                <tr>
                                    <th className="py-3">Customer</th>
                                    <th className="py-3 text-right">Slips</th>
                                    <th className="py-3 text-right">Total Weight</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
                                {[
                                    { name: "Ali Traders", slips: 120, weight: "4,500 Tons" },
                                    { name: "Fast Logistics", slips: 85, weight: "3,200 Tons" },
                                    { name: "City Construction", slips: 60, weight: "2,800 Tons" },
                                    { name: "Agri Corp", slips: 45, weight: "1,500 Tons" },
                                    { name: "Metro Builders", slips: 30, weight: "900 Tons" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="py-3 font-medium text-dark dark:text-white">{row.name}</td>
                                        <td className="py-3 text-right text-gray-600 dark:text-slate-400">{row.slips}</td>
                                        <td className="py-3 text-right font-bold text-dark dark:text-slate-200">{row.weight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
