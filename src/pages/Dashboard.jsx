import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Total Weigh-ins Today", value: "1,234" },
                    { title: "Active Scales", value: "8" },
                    { title: "Pending Slips", value: "27" },
                    { title: "Total Weight (24h)", value: "45.6 tons" }
                ].map((stat, index) => (
                    <div key={index} className="flex flex-col gap-2 rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                        <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">{stat.title}</p>
                        <p className="text-3xl font-bold text-text-light dark:text-text-dark tracking-tight">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Left Column - Chart & Table */}
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

                    {/* Chart Section */}
                    <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                        <div className="flex flex-col gap-2 mb-4">
                            <p className="text-base font-medium text-text-light dark:text-text-dark">Weighing Trends</p>
                            <div className="flex items-baseline gap-4">
                                <p className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">8,567</p>
                                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    <p className="text-xs font-medium">+5.2%</p>
                                </div>
                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark ml-auto">Last 7 Days</p>
                            </div>
                        </div>

                        {/* SVG Chart */}
                        <div className="w-full h-[200px] overflow-hidden">
                            <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg" className="w-full">
                                <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="239" x2="239" y1="0" y2="150">
                                        <stop stopColor="#2f75e4" stopOpacity="0.2"></stop>
                                        <stop offset="1" stopColor="#2f75e4" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
                                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#2f75e4" strokeLinecap="round" strokeWidth="3"></path>
                            </svg>
                        </div>

                        <div className="flex justify-between text-xs font-medium text-text-muted-light dark:text-text-muted-dark mt-4 px-2">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                            <h3 className="text-base font-medium text-text-light dark:text-text-dark">Recent Digital Slips</h3>
                            <button className="text-sm font-medium text-primary hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-background-light dark:bg-background-dark/50 border-b border-border-light dark:border-border-dark text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-3 font-semibold">Slip ID</th>
                                        <th className="px-6 py-3 font-semibold">Date/Time</th>
                                        <th className="px-6 py-3 font-semibold">Vehicle ID</th>
                                        <th className="px-6 py-3 font-semibold">Net Weight</th>
                                        <th className="px-6 py-3 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    {[
                                        { id: "#S120A4", time: "2023-10-27 14:30", veh: "TRK-45B", w: "12.3 tons", status: "Completed", color: "green" },
                                        { id: "#S120A3", time: "2023-10-27 14:22", veh: "TRK-19C", w: "8.1 tons", status: "Completed", color: "green" },
                                        { id: "#S120A2", time: "2023-10-27 14:15", veh: "TRK-22A", w: "21.5 tons", status: "Pending", color: "yellow" },
                                        { id: "#S120A1", time: "2023-10-27 14:01", veh: "TRK-07F", w: "15.0 tons", status: "Error", color: "red" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors">
                                            <td className="px-6 py-4 font-medium text-text-light dark:text-text-dark">{row.id}</td>
                                            <td className="px-6 py-4 text-text-muted-light dark:text-text-muted-dark">{row.time}</td>
                                            <td className="px-6 py-4 text-text-light dark:text-text-dark">{row.veh}</td>
                                            <td className="px-6 py-4 text-text-light dark:text-text-dark">{row.w}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full 
                          ${row.color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                                                        row.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                                                            'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'}`}>
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

                {/* Right Column */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    {/* Active Scale Status */}
                    <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                        <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-4">Active Scale Status</h3>
                        <div className="flex flex-col gap-4">
                            {[
                                { name: "Scale #1 (Main Gate)", status: "Online", color: "bg-green-500" },
                                { name: "Scale #2 (Warehouse A)", status: "Online", color: "bg-green-500" },
                                { name: "Scale #3 (Warehouse B)", status: "Offline", color: "bg-red-500" },
                                { name: "Scale #4 (Exit Gate)", status: "Online", color: "bg-green-500" },
                            ].map((scale, i) => (
                                <div key={i} className="flex justify-between items-center p-2 rounded hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">{scale.name}</p>
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2.5 w-2.5 rounded-full ${scale.color} ring-2 ring-white dark:ring-card-dark`}></div>
                                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">{scale.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Reports */}
                    <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm h-fit">
                        <h3 className="text-base font-medium text-text-light dark:text-text-dark mb-4">Quick Reports</h3>
                        <div className="flex flex-col gap-1">
                            {[
                                { icon: "summarize", text: "Daily Weigh-in Summary" },
                                { icon: "calendar_month", text: "Monthly Tonnage Report" },
                                { icon: "warning", text: "Alerts & Errors Log" }
                            ].map((item, i) => (
                                <a key={i} href="#" className="flex items-center gap-3 p-2 rounded-lg text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary hover:bg-primary/5 transition-all group">
                                    <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <span className="font-medium">{item.text}</span>
                                    <span className="material-symbols-outlined text-base ml-auto opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Help Banner - Extra aesthetic touch */}
                    <div className="rounded-lg p-6 bg-gradient-to-br from-primary to-blue-600 text-white shadow-md">
                        <div className="flex flex-col gap-3">
                            <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <span className="material-symbols-outlined">support_agent</span>
                            </div>
                            <div>
                                <h3 className="font-bold">Need Help?</h3>
                                <p className="text-sm text-blue-100">Contact our support details for immediate assistance with any scale issues.</p>
                            </div>
                            <button className="mt-2 w-full py-2 bg-white text-primary rounded font-bold text-sm hover:bg-blue-50 transition-colors">Contact Support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
