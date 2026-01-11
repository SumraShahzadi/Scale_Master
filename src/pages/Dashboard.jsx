import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

const Dashboard = () => {
    // Access context from layout if needed (e.g. for role-based display)
    const { userRole, currentBranch } = useOutletContext() || { userRole: 'Owner', currentBranch: 'Main Branch' };

    return (
        <div className="flex flex-col gap-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Total Weigh-ins Today", value: "48", icon: "scale", trend: "+12%", color: "text-primary", bg: "bg-blue-50" },
                    { title: "Active Scales", value: "3/4", icon: "speed", trend: "Online", color: "text-green-600", bg: "bg-green-50" },
                    { title: "Pending Slips", value: "5", icon: "pending_actions", trend: "Needs Review", color: "text-amber-600", bg: "bg-amber-50" },
                    { title: "Total Weight (24h)", value: "1,240T", icon: "fitness_center", trend: "+5%", color: "text-purple-600", bg: "bg-purple-50" }
                ].map((stat, index) => (
                    <div key={index} className="flex flex-col justify-between rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex justify-between items-start">
                            <div className={`p-3.5 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <span className="material-icons-outlined">{stat.icon}</span>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${stat.trend.includes('+') || stat.trend === 'Online' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-3xl font-black text-dark tracking-tight">{stat.value}</h3>
                            <p className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-wide">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Insights Panel (New Feature) */}
            <div className="rounded-2xl p-1 bg-gradient-to-r from-primary to-accent shadow-lg">
                <div className="bg-white rounded-[14px] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full animate-pulse">
                            <span className="material-icons-outlined">auto_awesome</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-dark flex items-center gap-2">
                                AI Insights
                                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">Beta</span>
                            </h3>
                            <p className="text-medium text-sm mt-1 max-w-xl">
                                Your main scale at "City Weighbridge" is showing inconsistent readings (±5kg variance).
                                Suggested Action: Schedule calibration.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-semibold transition-colors">Dismiss</button>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover text-sm font-semibold transition-colors shadow-md hover:shadow-lg">Schedule Fix</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Column - Chart & Table */}
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

                    {/* Chart Section */}
                    <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-dark">Weekly Activity</h3>
                                <p className="text-xs text-gray-400">Weigh-ins over the last 7 days</p>
                            </div>
                            <select className="bg-bg-light border-none text-xs font-semibold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-gray-600">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Year</option>
                            </select>
                        </div>

                        {/* SVG Chart Placeholder */}
                        <div className="w-full h-[250px] flex items-end justify-between gap-2 px-2 pb-2">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="relative group flex-1 flex flex-col justify-end items-center gap-2 h-full">
                                    <div
                                        className="w-full bg-primary/10 rounded-t-lg transition-all duration-500 group-hover:bg-primary"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                    <span className="text-xs text-gray-400 font-medium">Day {i + 1}</span>
                                    {/* Tooltip */}
                                    <div className="absolute -top-8 bg-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {h * 2} Slips
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity Table */}
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-dark">Recent Activity</h3>
                            <Link to="/slips" className="text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1">
                                View History
                                <span className="material-icons-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Slip ID</th>
                                        <th className="px-6 py-4">Vehicle</th>
                                        <th className="px-6 py-4">Customer</th>
                                        <th className="px-6 py-4">Weight</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { id: "#SL-4021", veh: "KAB-902", cust: "Ali Traders", w: "42,500 kg", status: "Completed", date: "2 mins ago" },
                                        { id: "#SL-4020", veh: "LER-112", cust: "Fast Logistics", w: "--", status: "In Process", date: "15 mins ago" },
                                        { id: "#SL-4019", veh: "MNB-778", cust: "City Construction", w: "38,100 kg", status: "Completed", date: "1 hour ago" },
                                        { id: "#SL-4018", veh: "RIO-554", cust: "Walk-in", w: "12,200 kg", status: "Completed", date: "2 hours ago" },
                                        { id: "#SL-4017", veh: "TKS-990", cust: "Agri Corp", w: "0 kg", status: "Error", date: "3 hours ago" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors group">
                                            <td className="px-6 py-4 font-bold text-dark">{row.id}</td>
                                            <td className="px-6 py-4 font-medium text-gray-700">{row.veh}</td>
                                            <td className="px-6 py-4 text-gray-500">{row.cust}</td>
                                            <td className="px-6 py-4 font-medium text-dark">{row.w}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full 
                                                    ${row.status === 'Completed' ? 'bg-green-100 text-green-700 border border-green-200' :
                                                        row.status === 'In Process' ? 'bg-blue-100 text-blue-700 border border-blue-200 animate-pulse' :
                                                            'bg-red-100 text-red-700 border border-red-200'}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 hover:text-primary transition-colors">
                                                    <span className="material-icons-outlined">more_vert</span>
                                                </button>
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
                    {/* Quick Configuration Warning (Mock ROI Calc/Plan Prompts) */}
                    <div className="rounded-2xl p-6 border border-yellow-200 bg-yellow-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-full blur-2xl -mr-8 -mt-8"></div>
                        <h3 className="font-bold text-yellow-900 mb-2 relative z-10">Premium Features Locked</h3>
                        <p className="text-xs text-yellow-800 mb-4 relative z-10">
                            You've reached the limit of your Basic Plan (50 slips/day). Upgrade to Pro for unlimited weighing.
                        </p>
                        <button className="w-full py-2 bg-yellow-400 text-yellow-900 font-bold rounded-lg text-sm hover:bg-yellow-500 transition-colors relative z-10">
                            Upgrade Plan
                        </button>
                    </div>

                    {/* Scale Monitor */}
                    <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-dark mb-4">Live Scale Monitor</h3>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: "Main Gate Scale", status: "Active", weight: "0 kg", icon: "rss_feed", color: "text-green-500" },
                                { name: "Warehouse B", status: "Active", weight: "42,500 kg", icon: "rss_feed", color: "text-green-500" },
                                { name: "Exit Scale", status: "Maintenance", weight: "--", icon: "error_outline", color: "text-red-500" },
                            ].map((scale, i) => (
                                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-white shadow-sm ${scale.color}`}>
                                            <span className="material-icons-outlined text-lg">{scale.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-dark">{scale.name}</p>
                                            <p className="text-xs text-gray-500">{scale.status}</p>
                                        </div>
                                    </div>
                                    <span className="font-mono font-bold text-dark">{scale.weight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Shortcuts */}
                    <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-dark mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <Link to="/create-slip" className="flex flex-col items-center justify-center p-4 rounded-xl bg-bg-light hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all group">
                                <span className="material-icons-outlined text-2xl text-primary mb-2 group-hover:scale-110 transition-transform">add_circle</span>
                                <span className="text-xs font-bold text-dark">New Slip</span>
                            </Link>
                            <Link to="/customers" className="flex flex-col items-center justify-center p-4 rounded-xl bg-bg-light hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all group">
                                <span className="material-icons-outlined text-2xl text-accent mb-2 group-hover:scale-110 transition-transform">person_add</span>
                                <span className="text-xs font-bold text-dark">Add Customer</span>
                            </Link>
                            <Link to="/vehicles" className="flex flex-col items-center justify-center p-4 rounded-xl bg-bg-light hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all group">
                                <span className="material-icons-outlined text-2xl text-secondary mb-2 group-hover:scale-110 transition-transform">local_shipping</span>
                                <span className="text-xs font-bold text-dark">Add Vehicle</span>
                            </Link>
                            <Link to="/reports" className="flex flex-col items-center justify-center p-4 rounded-xl bg-bg-light hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all group">
                                <span className="material-icons-outlined text-2xl text-green-500 mb-2 group-hover:scale-110 transition-transform">download</span>
                                <span className="text-xs font-bold text-dark">Export Data</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
