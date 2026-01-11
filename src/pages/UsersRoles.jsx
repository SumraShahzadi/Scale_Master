import React, { useState } from 'react';

const UsersRoles = () => {
    // CRUD State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Initial Data
    const [users, setUsers] = useState([
        { id: 1, name: "Avi Cohen", email: "avi.cohen@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Maya Levi", email: "maya.levi@example.com", role: "Manager", status: "Active" },
        { id: 3, name: "Daniel Katz", email: "daniel.katz@example.com", role: "Operator", status: "Inactive" },
        { id: 4, name: "Yael Sharon", email: "yael.sharon@example.com", role: "Operator", status: "Active" },
    ]);

    // Form State
    const initialFormState = {
        name: '',
        email: '',
        role: 'Operator',
        status: 'Active',
        password: '' // Optional for edit
    };
    const [formData, setFormData] = useState(initialFormState);

    // Handlers
    const handleSave = () => {
        if (!formData.name || !formData.email) {
            alert("Name and Email are required!");
            return;
        }

        if (editingId) {
            setUsers(prev => prev.map(u => u.id === editingId ? { ...u, ...formData } : u));
        } else {
            setUsers(prev => [...prev, { ...formData, id: Date.now() }]);
        }
        resetForm();
    };

    const handleEdit = (user) => {
        setFormData(user);
        setEditingId(user.id);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(prev => prev.filter(u => u.id !== id));
        }
    };

    const resetForm = () => {
        setIsModalOpen(false);
        setEditingId(null);
        setFormData(initialFormState);
    };

    return (
        <div className="flex flex-col h-full font-display text-gray-800 dark:text-gray-200 overflow-y-auto">
            {/* Page Heading */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">Users & Roles</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage system access and permissions.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                >
                    Add User +
                </button>
            </div>

            {/* Table */}
            <div className="@container">
                <div className="flex overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-slate-700/50 border-b border-gray-100 dark:border-slate-700">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Name</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Email</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Role</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Status</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/80 dark:hover:bg-slate-700/50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-300">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border ${user.role === 'Admin' ? 'bg-primary/10 text-primary border-primary/20' :
                                            user.role === 'Manager' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-900' :
                                                'bg-gray-100 text-gray-700 border-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${user.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900' : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-900'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="text-gray-400 hover:text-primary transition-colors"
                                            >
                                                <span className="material-icons-outlined text-xl">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="text-gray-400 hover:text-red-600 transition-colors"
                                            >
                                                <span className="material-icons-outlined text-xl">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit User Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-800 shadow-2xl transform transition-all scale-100 border border-slate-200 dark:border-slate-700">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-dark dark:text-white">{editingId ? 'Edit User' : 'Add New User'}</h2>
                            <button onClick={resetForm} className="text-gray-400 hover:text-dark dark:hover:text-white transition-colors">
                                <span className="material-icons-outlined">close</span>
                            </button>
                        </div>

                        <div className="p-8 space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-2" htmlFor="name">Full Name *</label>
                                <input
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="block w-full rounded-lg border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 px-4 py-3 text-sm font-medium focus:border-primary focus:ring-primary outline-none transition-all dark:text-white"
                                    id="name" type="text" placeholder="e.g. John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-2" htmlFor="email">Email Address *</label>
                                <input
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="block w-full rounded-lg border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 px-4 py-3 text-sm font-medium focus:border-primary focus:ring-primary outline-none transition-all dark:text-white"
                                    id="email" type="email" placeholder="john@example.com"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-2" htmlFor="role">Role</label>
                                    <select
                                        value={formData.role}
                                        onChange={e => setFormData({ ...formData, role: e.target.value })}
                                        className="block w-full rounded-lg border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 px-4 py-3 text-sm font-medium focus:border-primary focus:ring-primary outline-none transition-all cursor-pointer dark:text-white"
                                        id="role"
                                    >
                                        <option>Admin</option>
                                        <option>Manager</option>
                                        <option>Operator</option>
                                        <option>Viewer</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-2" htmlFor="status">Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={e => setFormData({ ...formData, status: e.target.value })}
                                        className="block w-full rounded-lg border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 px-4 py-3 text-sm font-medium focus:border-primary focus:ring-primary outline-none transition-all cursor-pointer dark:text-white"
                                        id="status"
                                    >
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-2" htmlFor="password">Password</label>
                                <input
                                    value={formData.password}
                                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    className="block w-full rounded-lg border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 px-4 py-3 text-sm font-medium focus:border-primary focus:ring-primary outline-none transition-all dark:text-white"
                                    id="password" type="password" placeholder={editingId ? "Leave blank to keep current" : "••••••••"}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 p-6 bg-gray-50 dark:bg-slate-700/50 rounded-b-2xl border-t border-gray-100 dark:border-slate-700">
                            <button onClick={resetForm} className="px-6 py-2.5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 font-bold text-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all"
                            >
                                {editingId ? 'Update User' : 'Save User'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersRoles;
