import React, { useState } from 'react';

const Customers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock Data
    const customers = [
        { id: 1, name: 'ABC Corp', contact: '0300-1234567', email: 'contact@abc.com', slips: 45, status: 'Active' },
        { id: 2, name: 'XYZ Ltd', contact: '0301-7654321', email: 'info@xyz.com', slips: 32, status: 'Active' },
        { id: 3, name: 'City Builders', contact: '0321-9876543', email: 'procurement@city.com', slips: 128, status: 'Active' },
        { id: 4, name: 'Roadworks Inc', contact: '0333-5555555', email: 'admin@roadworks.com', slips: 12, status: 'Inactive' },
    ];

    const filteredCustomers = customers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Customers</h1>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Manage your client database</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                    <span className="material-symbols-outlined text-xl">add</span>
                    Add Customer
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Total Customers</p>
                            <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-2">1,248</p>
                        </div>
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined">group</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <span className="material-symbols-outlined text-base">trending_up</span>
                        <span>+12% this month</span>
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Active Clients</p>
                            <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-2">892</p>
                        </div>
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                            <span className="material-symbols-outlined">person_check</span>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                        Generated most revenue
                    </div>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">New (This Month)</p>
                            <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-2">24</p>
                        </div>
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                            <span className="material-symbols-outlined">person_add</span>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                        Target: 30
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center gap-4">
                    <div className="flex-1 max-w-md relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark">search</span>
                        <input
                            type="text"
                            placeholder="Search customers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <button className="p-2 text-text-muted-light hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">filter_list</span>
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-background-light dark:bg-background-dark/50 border-b border-border-light dark:border-border-dark text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-6 py-4">Customer Name</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Total Slips</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="group hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <div className="font-medium text-text-light dark:text-text-dark">{customer.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-text-light dark:text-text-dark">{customer.contact}</span>
                                            <span className="text-xs text-text-muted-light dark:text-text-muted-dark">{customer.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-text-light dark:text-text-dark">{customer.slips}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${customer.status === 'Active'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-text-muted-light hover:text-primary transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-text-muted-light hover:text-red-500 transition-colors" title="Delete">
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Customer Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-card-dark rounded-xl shadow-2xl w-full max-w-lg overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-6 border-b border-border-light dark:border-border-dark">
                            <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Add New Customer</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-text-muted-light hover:text-text-light dark:hover:text-text-dark">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-text-light dark:text-text-dark">Company Name</span>
                                <input type="text" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="e.g. Acme Corp" />
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-light dark:text-text-dark">Contact Person</span>
                                    <input type="text" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="Full Name" />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-light dark:text-text-dark">Phone Number</span>
                                    <input type="tel" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="+1 234..." />
                                </label>
                            </div>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-text-light dark:text-text-dark">Email Address</span>
                                <input type="email" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="name@company.com" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-text-light dark:text-text-dark">Address</span>
                                <textarea className="form-textarea rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary resize-none h-24" placeholder="Full address..."></textarea>
                            </label>
                        </div>
                        <div className="p-6 bg-background-light dark:bg-background-dark/50 border-t border-border-light dark:border-border-dark flex justify-end gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm">Save Customer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Customers;
