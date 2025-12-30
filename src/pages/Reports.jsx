import React, { useState } from 'react';

const Reports = () => {
    const [reportType, setReportType] = useState('daily');

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Reports & Analytics</h1>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Insights into your weighing operations</p>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary outline-none text-sm font-medium"
                    >
                        <option value="daily">Daily Report</option>
                        <option value="weekly">Weekly Summary</option>
                        <option value="monthly">Monthly Overview</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-xl">download</span>
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Total Slips</p>
                    <div className="flex items-end gap-2 mt-2">
                        <span className="text-3xl font-bold text-text-light dark:text-text-dark">145</span>
                        <span className="text-sm text-green-600 dark:text-green-400 mb-1">↑ 12%</span>
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Total Weight</p>
                    <div className="flex items-end gap-2 mt-2">
                        <span className="text-3xl font-bold text-text-light dark:text-text-dark">3,240 t</span>
                        <span className="text-sm text-green-600 dark:text-green-400 mb-1">↑ 5%</span>
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Avg. Truck Load</p>
                    <div className="flex items-end gap-2 mt-2">
                        <span className="text-3xl font-bold text-text-light dark:text-text-dark">22.5 t</span>
                        <span className="text-sm text-text-muted-light dark:text-text-muted-dark mb-1">Stable</span>
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Revenue Estimate</p>
                    <div className="flex items-end gap-2 mt-2">
                        <span className="text-3xl font-bold text-text-light dark:text-text-dark">$12.4k</span>
                        <span className="text-sm text-green-600 dark:text-green-400 mb-1">↑ 8%</span>
                    </div>
                </div>
            </div>

            {/* Visuals & Breakdowns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mock Chart Area */}
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-6">Activity Volume</h3>
                    <div className="h-64 flex items-end justify-between gap-2 px-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                <div
                                    className="w-full bg-primary/20 dark:bg-primary/30 rounded-t-sm transition-all duration-500 group-hover:bg-primary"
                                    style={{ height: `${h}%` }}
                                ></div>
                                <span className="text-xs text-text-muted-light dark:text-text-muted-dark">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Customers Table */}
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-6">Top Customers</h3>
                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider border-b border-border-light dark:border-border-dark">
                                <tr>
                                    <th className="py-2">Customer</th>
                                    <th className="py-2 text-right">Slips</th>
                                    <th className="py-2 text-right">Volume</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                {[
                                    { name: 'ABC Corp', slips: 42, volume: '840 t' },
                                    { name: 'City Builders', slips: 35, volume: '710 t' },
                                    { name: 'Roadworks Inc', slips: 28, volume: '560 t' },
                                    { name: 'XYZ Ltd', slips: 15, volume: '300 t' },
                                    { name: 'Global Logistics', slips: 12, volume: '240 t' },
                                ].map((c, i) => (
                                    <tr key={i}>
                                        <td className="py-3 font-medium text-text-light dark:text-text-dark">{c.name}</td>
                                        <td className="py-3 text-right text-text-muted-light dark:text-text-muted-dark">{c.slips}</td>
                                        <td className="py-3 text-right font-medium text-text-light dark:text-text-dark">{c.volume}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="mt-4 w-full py-2 text-center text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors">
                        View All Customers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reports;
