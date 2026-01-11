import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userRole] = useState('Owner'); // Mock Role: Owner, Manager, Operator
    const [currentBranch, setCurrentBranch] = useState('Main Branch');

    // Define links with role access
    const allLinks = [
        { name: 'Dashboard', path: '/dashboard', icon: 'dashboard', roles: ['Owner', 'Manager', 'Operator'] },
        { name: 'Create Slip', path: '/create-slip', icon: 'add_circle', roles: ['Owner', 'Manager', 'Operator'] },
        { name: 'Slips History', path: '/slips', icon: 'receipt_long', roles: ['Owner', 'Manager', 'Operator'] },
        { name: 'Customers', path: '/customers', icon: 'group', roles: ['Owner', 'Manager'] },
        { name: 'Vehicles', path: '/vehicles', icon: 'local_shipping', roles: ['Owner', 'Manager'] },
        { name: 'Reports', path: '/reports', icon: 'pie_chart', roles: ['Owner', 'Manager'] },
        { name: 'Branches', path: '/branches', icon: 'store', roles: ['Owner'] },
        { name: 'Devices', path: '/devices', icon: 'scale', roles: ['Owner'] },
        { name: 'Users & Roles', path: '/users', icon: 'manage_accounts', roles: ['Owner'] },
    ];

    const secondaryLinks = [
        { name: 'Settings', path: '/settings', icon: 'settings', roles: ['Owner', 'Manager'] },
        { name: 'Help & Support', path: '/help', icon: 'help', roles: ['Owner', 'Manager', 'Operator'] },
    ];

    // Filter links based on role
    const sidebarLinks = allLinks.filter(link => link.roles.includes(userRole));
    const footerLinks = secondaryLinks.filter(link => link.roles.includes(userRole));

    const getPageTitle = () => {
        const currentPath = location.pathname;
        const link = [...allLinks, ...secondaryLinks].find(l => l.path === currentPath);
        return link ? link.name : 'Dashboard';
    };

    return (
        <div className="flex h-screen bg-bg-light font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-dark/50 z-40 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Sidebar */}
            <aside className={`fixed lg:static top-0 left-0 z-50 h-full w-[280px] bg-dark text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col shadow-2xl lg:shadow-none border-r border-white/5`}>
                <div className="h-20 flex items-center px-8 border-b border-white/10 mb-2">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">SM</div>
                        <div>
                            <span className="text-xl font-bold tracking-tight block leading-none text-white">ScaleMaster</span>
                            <span className="text-[10px] text-blue-200 uppercase tracking-[0.2em] font-bold block mt-1.5">Management</span>
                        </div>
                    </Link>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar flex flex-col gap-8">
                    <div>
                        <div className="mb-4 text-xs font-bold text-gray-500 uppercase tracking-[0.15em] px-4 font-display">Main Menu</div>
                        <nav className="space-y-1.5">
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden ${location.pathname === link.path
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className={`material-icons-outlined text-[22px] transition-colors w-6 text-center ${location.pathname === link.path ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{link.icon}</span>
                                    <span className="whitespace-nowrap tracking-wide">{link.name}</span>
                                    {location.pathname === link.path && (
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/20 rounded-l-full"></div>
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 text-xs font-bold text-gray-500 uppercase tracking-[0.15em] px-4 font-display">System</div>
                        <nav className="space-y-1.5">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${location.pathname === link.path
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className={`material-icons-outlined text-[22px] transition-colors w-6 text-center ${location.pathname === link.path ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{link.icon}</span>
                                    <span className="whitespace-nowrap tracking-wide">{link.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* User Profile Card */}
                <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
                    <Link to="/profile" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-inner ring-2 ring-black/20 group-hover:ring-white/20 transition-all">
                            OM
                        </div>
                        <div className="overflow-hidden flex-1">
                            <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors truncate">Omar Malik</h4>
                            <p className="text-[10px] text-gray-500 group-hover:text-gray-400 truncate uppercase tracking-wider font-bold">{userRole}</p>
                        </div>
                        <span className="material-icons-outlined text-gray-600 group-hover:text-white transition-colors text-lg">chevron_right</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Header */}
                <header className="bg-white h-20 border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 shadow-sm z-30 sticky top-0">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <span className="material-icons-outlined">menu</span>
                        </button>
                        <div>
                            <h1 className="text-2xl font-bold text-dark hidden sm:block">
                                {getPageTitle()}
                            </h1>
                            <p className="text-xs text-light hidden sm:block font-medium">Welcome back, operations are running smoothly.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Branch Selector */}
                        <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 hover:border-primary/50 transition-colors cursor-pointer group relative hover:shadow-sm">
                            <span className="material-icons-outlined text-gray-400 group-hover:text-primary transition-colors">store</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">Current Branch</span>
                                <select
                                    value={currentBranch}
                                    onChange={(e) => setCurrentBranch(e.target.value)}
                                    className="bg-transparent text-sm font-bold text-dark focus:outline-none cursor-pointer appearance-none pr-4 -ml-1 mt-0.5"
                                >
                                    <option>Main Branch</option>
                                    <option>City Weighbridge</option>
                                    <option>Port Terminal</option>
                                </select>
                            </div>
                            <span className="material-icons-outlined text-gray-400 absolute right-2 pointer-events-none text-sm group-hover:text-primary">expand_more</span>
                        </div>

                        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                        {/* Search (Icon only on mobile) */}
                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-xl transition-all">
                            <span className="material-icons-outlined">search</span>
                        </button>

                        {/* Notifications */}
                        <Link to="/notifications" className="relative p-2 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-xl transition-all">
                            <span className="material-icons-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </Link>

                        {/* Create Button (Quick Action) */}
                        <Link to="/create-slip" className="hidden sm:flex items-center gap-2 bg-dark text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-dark/20 hover:bg-primary transition-all transform hover:-translate-y-0.5">
                            <span className="material-icons-outlined text-lg">add</span>
                            <span>New Slip</span>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar scroll-smooth relative">
                    {children}

                    <footer className="mt-12 py-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
                        <p>© 2024 ScaleMaster. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="/help" className="hover:text-primary transition-colors">Help Center</a>
                            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
                            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
