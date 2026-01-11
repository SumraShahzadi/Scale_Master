import React from 'react';

const VehicleReport = () => {
    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Vehicle Reports</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Vehicle efficiency and haulage analytics.</p>
                </div>
                <div className="flex gap-2">
                    <span className="relative">
                        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder="Search no. plate..."
                            className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:ring-1 focus:ring-primary h-full"
                        />
                    </span>
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-bold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        Filter
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 dark:text-slate-400 uppercase font-semibold bg-gray-50 dark:bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-4">Vehicle No.</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4 text-center">Trips</th>
                            <th className="px-6 py-4 text-right">Avg Weight</th>
                            <th className="px-6 py-4 text-right">Total Haulage</th>
                            <th className="px-6 py-4">Last Visit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
                        {[
                            { plate: "LES-1234", type: "Trailer (22-Wheeler)", trips: 45, avg: "42.5 Tons", total: "1,912 Tons", last: "Today, 10:30 AM" },
                            { plate: "KHI-9876", type: "Truck (10-Wheeler)", trips: 38, avg: "25.2 Tons", total: "957 Tons", last: "Yesterday" },
                            { plate: "LHR-5544", type: "Dumper", trips: 32, avg: "28.5 Tons", total: "912 Tons", last: "2 days ago" },
                            { plate: "MNZ-3322", type: "Mazda", trips: 56, avg: "8.5 Tons", total: "476 Tons", last: "Today, 09:15 AM" },
                            { plate: "FSD-1122", type: "Trailer (18-Wheeler)", trips: 22, avg: "38.5 Tons", total: "847 Tons", last: "3 days ago" },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-dark dark:text-white">{row.plate}</td>
                                <td className="px-6 py-4 text-gray-600 dark:text-slate-400">{row.type}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-bold">{row.trips}</span>
                                </td>
                                <td className="px-6 py-4 text-right text-gray-600 dark:text-slate-400">{row.avg}</td>
                                <td className="px-6 py-4 text-right font-bold text-dark dark:text-slate-200">{row.total}</td>
                                <td className="px-6 py-4 text-gray-500 text-xs">{row.last}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VehicleReport;
