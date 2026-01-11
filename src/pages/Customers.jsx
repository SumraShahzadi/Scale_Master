import React, { useState } from 'react';

const Customers = () => {
    // State for CRUD
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Initial Data
    const [customers, setCustomers] = useState([
        { id: "CUST-001", name: "Ali Traders", contact: "Ali Ahmed", phone: "+92 300 1234567", email: "ali@traders.com", address: "Plot 45, Ind. Area", type: "Commercial", balance: "PKR 50,000", status: "Active" },
        { id: "CUST-002", name: "Fast Logistics", contact: "Bilal Khan", phone: "+92 321 7654321", email: "info@fastlog.com", address: "Warehouse 22, Port Qasim", type: "Logistics", balance: "PKR 12,500", status: "Active" },
        { id: "CUST-003", name: "City Construction", contact: "Ch. Rizwan", phone: "+92 333 9876543", email: "rizwan@citycon.com", address: "Office 102, Blue Area", type: "Construction", balance: "PKR -5,000", status: "Overdue" },
        { id: "CUST-004", name: "Agri Corp", contact: "Dawood Shah", phone: "+92 345 1122334", email: "contact@agricorp.pk", address: "Farm 7, Multan Rd", type: "Agriculture", balance: "PKR 0", status: "Inactive" },
    ]);

    // Form State
    const initialFormState = {
        name: '',
        contact: '',
        phone: '',
        email: '',
        address: '',
        type: 'Commercial', // Default
        status: 'Active'
    };
    const [formData, setFormData] = useState(initialFormState);

    // READ: Filtered Customers
    const filteredCustomers = customers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.contact.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // CREATE / UPDATE: Handle Form Submit
    const handleSave = () => {
        if (!formData.name || !formData.phone) {
            alert("Name and Phone are required!");
            return;
        }

        if (editingId) {
            // Update
            setCustomers(prev => prev.map(c => c.id === editingId ? { ...c, ...formData } : c));
        } else {
            // Create
            const newCustomer = {
                ...formData,
                id: `CUST-00${customers.length + 1}`,
                balance: "PKR 0"
            };
            setCustomers(prev => [...prev, newCustomer]);
        }

        // Reset
        setIsAdding(false);
        setEditingId(null);
        setFormData(initialFormState);
    };

    // UPDATE: Handle Edit Click
    const handleEdit = (customer) => {
        setFormData(customer);
        setEditingId(customer.id);
        setIsAdding(true);
    };

    // DELETE: Handle Delete Click
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            setCustomers(prev => prev.filter(c => c.id !== id));
        }
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData(initialFormState);
    };

    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Customers Management</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Manage customer accounts, contacts, and details.</p>
                </div>
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 flex items-center gap-2 shadow-sm shadow-blue-500/30 transition-all"
                    >
                        <span className="material-icons-outlined text-lg">person_add</span>
                        Add Customer
                    </button>
                )}
            </div>

            {/* ADD / EDIT FORM SECTION */}
            {isAdding && (
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="material-icons-outlined text-primary">{editingId ? 'edit' : 'add_circle'}</span>
                            {editingId ? 'Edit Customer' : 'New Customer Registration'}
                        </h2>
                        <button onClick={handleCancel} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            <span className="material-icons-outlined">close</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Company Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g. Acme Corp"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Contact Person</label>
                            <input
                                type="text"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                placeholder="Full Name"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Phone Number *</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+1 234 567890"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@company.com"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1 lg:col-span-2">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Components Address</label>
                            <input
                                type="text"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                placeholder="Street, City, Postal Code"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Customer Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            >
                                <option>Commercial</option>
                                <option>Logistics</option>
                                <option>Construction</option>
                                <option>Agriculture</option>
                                <option>Individual</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3">
                        <button
                            onClick={handleCancel}
                            className="px-5 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2.5 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 shadow-md shadow-green-500/20 transition-all flex items-center gap-2"
                        >
                            <span className="material-icons-outlined">check</span>
                            {editingId ? 'Update Customer' : 'Save Customer'}
                        </button>
                    </div>
                </div>
            )}

            {/* FILTERS */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Search customers by name or contact..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-primary outline-none transition-colors"
                    />
                </div>
                <select className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 focus:border-primary outline-none cursor-pointer">
                    <option>All Types</option>
                    <option>Commercial</option>
                    <option>Logistics</option>
                    <option>Construction</option>
                </select>
                <select className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 focus:border-primary outline-none cursor-pointer">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Overdue</option>
                    <option>Inactive</option>
                </select>
            </div>

            {/* LIST VIEW (CARDS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                {filteredCustomers.map((cust) => (
                    <div key={cust.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group relative">
                        <div className="flex justify-between items-start mb-5">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-primary dark:text-blue-400 flex items-center justify-center text-xl font-bold shadow-inner">
                                {cust.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${cust.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900' :
                                cust.status === 'Overdue' ? 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900' :
                                    'bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
                                }`}>
                                {cust.status}
                            </span>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-slate-900 dark:text-white text-lg truncate mb-1" title={cust.name}>{cust.name}</h3>
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                {cust.type}
                            </p>
                        </div>

                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <span className="material-icons-outlined text-slate-400 text-[18px]">person</span>
                                <span className="font-medium truncate">{cust.contact}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons-outlined text-slate-400 text-[18px]">phone</span>
                                <span className="font-medium truncate">{cust.phone}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons-outlined text-slate-400 text-[18px] mt-0.5">location_on</span>
                                <span className="font-medium leading-tight line-clamp-2">{cust.address || 'N/A'}</span>
                            </div>
                            <div className="flex items-center gap-3 pt-3 mt-1 border-t border-slate-200 dark:border-slate-700">
                                <span className="material-icons-outlined text-slate-400 text-[18px]">account_balance_wallet</span>
                                <span className={`font-mono font-bold ${cust.balance.includes('-') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{cust.balance}</span>
                            </div>
                        </div>

                        <div className="mt-5 pt-0 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                            <button
                                onClick={() => handleEdit(cust)}
                                className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 rounded transition-colors"
                                title="Edit"
                            >
                                <span className="material-icons-outlined text-[18px]">edit</span>
                            </button>
                            <button
                                onClick={() => handleDelete(cust.id)}
                                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                                title="Delete"
                            >
                                <span className="material-icons-outlined text-[18px]">delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customers;
