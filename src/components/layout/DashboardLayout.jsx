import React, { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const sidebarLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Slips History', path: '/slips', icon: 'receipt_long' },
    { name: 'Manage Devices', path: '/devices', icon: 'scale' },
    { name: 'Customers', path: '/customers', icon: 'group' },
    { name: 'Vehicles', path: '/vehicles', icon: 'local_shipping' },
    { name: 'Reports', path: '/reports', icon: 'pie_chart' },
];

const secondaryLinks = [
    { name: 'Settings', path: '/settings', icon: 'settings' },
    { name: 'Help & Support', path: '/help', icon: 'help' },
];

const DashboardLayout = ({ children }) => {
    const location = useLocation();

    // Helper to determine page title based on current path
    const getPageTitle = () => {
        const currentPath = location.pathname;
        if (currentPath === '/dashboard') return 'Dashboard';
        if (currentPath === '/create-slip') return 'Create New Slip';

        const allLinks = [...sidebarLinks, ...secondaryLinks];
        const activeLink = allLinks.find(link => currentPath.startsWith(link.path));
        return activeLink ? activeLink.name : 'Dashboard';
    };

    return (
        <div className="flex h-screen bg-gray-50/50 dark:bg-[#0f1117] font-sans text-slate-800 dark:text-slate-100 overflow-hidden">
            {/* SideNavBar */}
            <aside className="hidden md:flex w-72 flex-col border-r border-slate-200 dark:border-white/5 bg-white dark:bg-[#161b22] shadow-sm z-20">
                <div className="flex h-20 items-center px-8 border-b border-slate-100 dark:border-white/5">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="size-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <span className="material-symbols-outlined text-[20px] leading-none shrink-0">dataset</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">ScaleMaster</h2>
                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">Management</p>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 px-6 overflow-y-auto custom-scrollbar">
                    <nav className="flex flex-col gap-1.5 pt-4">
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
                        {sidebarLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3.5 rounded-xl px-4 py-3 transition-all duration-200 group ${isActive
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                    }`
                                }
                            >
                                <span className="material-symbols-outlined text-[22px] leading-none shrink-0">{link.icon}</span>
                                <p className="text-sm font-medium">{link.name}</p>
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-6 pb-2">
                        <nav className="flex flex-col gap-1.5">
                            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">System</p>
                            {secondaryLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3.5 rounded-xl px-4 py-3 transition-all duration-200 group ${isActive
                                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md' // Different active style for secondary
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                        }`
                                    }
                                >
                                    <span className="material-symbols-outlined text-[22px] leading-none shrink-0">{link.icon}</span>
                                    <p className="text-sm font-medium">{link.name}</p>
                                </NavLink>
                            ))}
                        </nav>

                        {/* Admin Profile Card */}
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center gap-3">
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-xl size-10 ring-2 ring-white dark:ring-white/10 shadow-sm"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-7fNSgQ53EFG6CfXrt8cnXfAANTtNMoa5rQ2yeBOHifwGeYooIkEi76aXF8_EXR8J-2uETLLkZeW2mYblkeYiTMUJ1txlXbJSIVkO9a3DJmm_ycoNXZ2ef2-D0BDH4fvTvqntVOXZS30H_BrWQOHpLFJ89u2b24Kpg9Tntu5gm5eNCqEJTj8oyjutjRpdmXk4i-VaFaBqdIuYecwPLcEbMl-gsj9tbS6whTFZ3iSaSXQ3hIPxr45dNBZrSwZLFPbDC4UyxqJahwAj")' }}
                            ></div>
                            <div className="flex flex-col min-w-0 flex-1">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">Admin Account</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">admin@scale.co</p>
                            </div>
                            <Link to="/auth" className="size-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-red-500 hover:shadow-sm transition-all" title="Logout">
                                <span className="material-symbols-outlined text-[20px] leading-none shrink-0">logout</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Header */}
                <header className="flex h-20 items-center justify-between px-8 border-b border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-[#0f1117]/80 backdrop-blur-xl z-10 sticky top-0 md:static">
                    <div className="flex items-center gap-2">
                        {/* Mobile Menu Trigger (Visible on small screens) */}
                        <button className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <span className="material-symbols-outlined">menu</span>
                        </button>

                        <div>
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                                {getPageTitle()}
                            </h1>
                            <p className="text-xs text-slate-500 font-medium hidden sm:block">Welcome back, here's what's happening today.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex relative group">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors cursor-pointer material-symbols-outlined text-[20px] leading-none shrink-0">search</span>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-11 pl-10 pr-4 w-64 rounded-xl bg-slate-100 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-[#161b22] focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all font-medium text-sm outline-none"
                            />
                        </div>

                        <button className="relative size-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-white hover:shadow-md hover:text-primary transition-all duration-300">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-3 right-3.5 size-2 bg-red-500 rounded-full border border-white dark:border-[#161b22]"></span>
                        </button>

                        <Link
                            to="/create-slip"
                            className="hidden sm:flex h-11 items-center gap-2 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:scale-105 hover:shadow-slate-900/30 active:scale-95 transition-all duration-200"
                        >
                            <span className="material-symbols-outlined text-[20px] leading-none shrink-0">add</span>
                            <span>New Slip</span>
                        </Link>
                    </div>
                </header>

                {/* Main Scrollable Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth custom-scrollbar">
                    <div className="max-w-7xl mx-auto min-h-full flex flex-col">
                        <div className="flex-1">
                            {children}
                        </div>

                        {/* Dashboard Footer */}
                        <footer className="mt-12 py-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
                            <p>© {new Date().getFullYear()} ScaleMaster v1.0. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                                <a href="/help" className="hover:text-primary transition-colors">Help Center</a>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
