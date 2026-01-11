import React from 'react';

const FinancialReport = () => {
    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Financial Report</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Revenue analysis and financial metrics.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-bold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        This Quarter
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all">
                        <span className="material-icons-outlined text-lg">description</span>
                        Full Audit
                    </button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary to-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-primary/20">
                    <p className="text-blue-100 font-medium mb-1">Total Revenue</p>
                    <h3 className="text-3xl font-bold mb-4">PKR 12.5M</h3>
                    <div className="flex items-center gap-2 text-sm bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="material-icons-outlined text-sm">trending_up</span>
                        <span>+15% Growth</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600">
                            <span className="material-icons-outlined">payments</span>
                        </div>
                        <span className="text-xs font-bold bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-lg text-gray-500">Avg / Slip</span>
                    </div>
                    <p className="text-gray-500 dark:text-slate-400 text-sm mb-1">Average Ticket</p>
                    <h3 className="text-2xl font-bold text-dark dark:text-white">PKR 2,450</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-600">
                            <span className="material-icons-outlined">account_balance_wallet</span>
                        </div>
                        <span className="text-xs font-bold bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-lg text-gray-500">Unpaid</span>
                    </div>
                    <p className="text-gray-500 dark:text-slate-400 text-sm mb-1">Outstanding</p>
                    <h3 className="text-2xl font-bold text-dark dark:text-white">PKR 450K</h3>
                </div>
            </div>

            {/* Recent Revenue Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm flex flex-col flex-1">
                <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-dark dark:text-white">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 dark:text-slate-400 uppercase font-semibold bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Method</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                                <th className="px-6 py-4 text-center">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
                            {[
                                { date: "Oct 24, 2024", desc: "Weighing Charge - SL-001", customer: "Ali Traders", method: "Cash", amount: "PKR 2,500" },
                                { date: "Oct 24, 2024", desc: "Weighing Charge - SL-002", customer: "Fast Logistics", method: "Credit", amount: "PKR 1,800" },
                                { date: "Oct 23, 2024", desc: "Monthly Subscription", customer: "City Const.", method: "Bank Transfer", amount: "PKR 50,000" },
                                { date: "Oct 23, 2024", desc: "Weighing Charge - SL-098", customer: "Agri Corp", method: "Cash", amount: "PKR 2,200" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4 text-gray-500">{row.date}</td>
                                    <td className="px-6 py-4 font-medium text-dark dark:text-white">{row.desc}</td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">{row.customer}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-1 rounded text-xs font-bold">{row.method}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold text-dark dark:text-white">{row.amount}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="text-primary hover:text-primary-hover">
                                            <span className="material-icons-outlined text-lg">download</span>
                                        </button>
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

export default FinancialReport;
