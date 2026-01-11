import React, { useState } from 'react';

const Branches = () => {
    // CRUD State
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Initial Data
    const [branches, setBranches] = useState([
        { id: 1, name: "Main Head Office", location: "Industrial Estate, Lahore", manager: "Muhammad Usman", status: "Active", devices: 2 },
        { id: 2, name: "City Weighbridge", location: "Ring Road, Lahore", manager: "Faisal Iqbal", status: "Active", devices: 1 },
        { id: 3, name: "Port Terminal", location: "Port Qasim, Karachi", manager: "Saeed Anwar", status: "Active", devices: 4 },
        { id: 4, name: "North Warehouse", location: "G.T Road, Gujranwala", manager: "Tariq Jamil", status: "Maintenance", devices: 1 },
    ]);

    // Form State
    const initialFormState = {
        name: '',
        location: '',
        manager: '',
        status: 'Active',
        devices: 0
    };
    const [formData, setFormData] = useState(initialFormState);

    // Handlers
    const handleSave = () => {
        if (!formData.name) {
            alert("Branch Name is required!");
            return;
        }

        if (editingId) {
            setBranches(prev => prev.map(b => b.id === editingId ? { ...b, ...formData } : b));
        } else {
            setBranches(prev => [...prev, { ...formData, id: Date.now() }]);
        }
        resetForm();
    };

    const handleEdit = (branch) => {
        setFormData(branch);
        setEditingId(branch.id);
        setIsAdding(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this branch?")) {
            setBranches(prev => prev.filter(b => b.id !== id));
        }
    };

    const resetForm = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData(initialFormState);
    };

    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Branches</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage your locations and site settings.</p>
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30"
                >
                    <span className="material-icons-outlined text-lg">store</span>
                    Add Branch
                </button>
            </div>

            {/* List View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                {branches.map((branch) => (
                    <div key={branch.id} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 flex items-center justify-center">
                                <span className="material-icons-outlined text-2xl">business</span>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(branch)} className="p-1 text-gray-400 hover:text-primary transition-colors">
                                    <span className="material-icons-outlined">edit</span>
                                </button>
                                <button onClick={() => handleDelete(branch.id)} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                                    <span className="material-icons-outlined">delete</span>
                                </button>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-dark dark:text-white">{branch.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                            <span className="material-icons-outlined text-xs">location_on</span>
                            {branch.location}
                        </p>

                        <div className="space-y-3 pt-4 border-t border-gray-50 dark:border-slate-700">
                            <div className="flex justify-between text-sm text-gray-600 dark:text-slate-300">
                                <span className="text-gray-500 dark:text-slate-400">Manager</span>
                                <span className="font-medium text-dark dark:text-white">{branch.manager}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 dark:text-slate-300">
                                <span className="text-gray-500 dark:text-slate-400">Active Scales</span>
                                <span className="font-medium text-dark dark:text-white">{branch.devices} Devices</span>
                            </div>
                            <div className="flex justify-between text-sm items-center">
                                <span className="text-gray-500 dark:text-slate-400">Status</span>
                                <span className={`px-2 py-0.5 rounded textxs font-bold ${branch.status === 'Active' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                                    }`}>
                                    {branch.status}
                                </span>
                            </div>
                        </div>

                        <button className="w-full mt-4 py-2 border border-blue-100 dark:border-blue-900/50 text-primary rounded-lg text-sm font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            Manage Branch
                        </button>
                    </div>
                ))}

                <button
                    onClick={() => setIsAdding(true)}
                    className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all min-h-[280px]"
                >
                    <span className="material-icons-outlined text-4xl mb-2">add_circle_outline</span>
                    <span className="font-bold">Add New Branch</span>
                </button>
            </div>

            {/* ADD / EDIT MODAL */}
            {isAdding && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-2xl transform transition-all scale-100">
                        <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">
                            <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                <span className="material-icons-outlined text-primary">{editingId ? 'edit' : 'add_circle'}</span>
                                {editingId ? 'Edit Branch Details' : 'Register New Branch'}
                            </h2>
                            <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                <span className="material-icons-outlined">close</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Branch Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g. Main Head Office"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-dark dark:text-white"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Location / Address</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    placeholder="City, Address"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-dark dark:text-white"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Branch Manager</label>
                                <input
                                    type="text"
                                    value={formData.manager}
                                    onChange={e => setFormData({ ...formData, manager: e.target.value })}
                                    placeholder="Manager Name"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-dark dark:text-white"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-dark dark:text-white cursor-pointer"
                                >
                                    <option>Active</option>
                                    <option>Maintenance</option>
                                    <option>Closed</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3">
                            <button
                                onClick={resetForm}
                                className="px-5 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover shadow-md shadow-primary/20 transition-all flex items-center gap-2"
                            >
                                <span className="material-icons-outlined">check</span>
                                {editingId ? 'Update Branch' : 'Save Branch'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Branches;
