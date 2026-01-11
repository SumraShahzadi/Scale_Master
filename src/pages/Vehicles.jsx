import React, { useState } from 'react';

const Vehicles = () => {
    // CRUD State
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Initial Data
    const [vehicles, setVehicles] = useState([
        { id: 1, reg: "KAB-902", type: "Truck 10-Wheeler", driver: "Ahmed Ali", capacity: "50,000", status: "Active" },
        { id: 2, reg: "LER-112", type: "Mazda High Roof", driver: "Bilal Khan", capacity: "20,000", status: "Active" },
        { id: 3, reg: "MNB-778", type: "Dumper", driver: "Rizwan Ahmed", capacity: "35,000", status: "Maintenance" },
        { id: 4, reg: "RIO-554", type: "Trailer 22-Wheeler", driver: "Dawood Shah", capacity: "80,000", status: "Active" },
        { id: 5, reg: "TKS-990", type: "Pickup", driver: "N/A", capacity: "5,000", status: "Inactive" },
    ]);

    // Form State
    const initialFormState = {
        reg: '',
        type: 'Truck 10-Wheeler',
        driver: '',
        capacity: '',
        status: 'Active'
    };
    const [formData, setFormData] = useState(initialFormState);

    // Derived Logic
    const filteredVehicles = vehicles.filter(v =>
        v.reg.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.driver.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handlers
    const handleSave = () => {
        if (!formData.reg) {
            alert("Registration Number is required");
            return;
        }

        if (editingId) {
            setVehicles(prev => prev.map(v => v.id === editingId ? { ...v, ...formData } : v));
        } else {
            setVehicles(prev => [...prev, { ...formData, id: Date.now() }]);
        }
        resetForm();
    };

    const handleEdit = (vehicle) => {
        setFormData(vehicle);
        setEditingId(vehicle.id);
        setIsAdding(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            setVehicles(prev => prev.filter(v => v.id !== id));
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
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Vehicles Management</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage fleet registry and tare weights.</p>
                </div>
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all"
                    >
                        <span className="material-icons-outlined text-lg">local_shipping</span>
                        Add Vehicle
                    </button>
                )}
            </div>

            {/* ADD / EDIT FORM */}
            {isAdding && (
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">{editingId ? 'edit' : 'add_circle'}</span>
                            {editingId ? 'Edit Vehicle' : 'New Vehicle Registry'}
                        </h2>
                        <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Registration # *</label>
                            <input
                                type="text"
                                value={formData.reg}
                                onChange={e => setFormData({ ...formData, reg: e.target.value })}
                                placeholder="e.g. KAB-902"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Driver Name</label>
                            <input
                                type="text"
                                value={formData.driver}
                                onChange={e => setFormData({ ...formData, driver: e.target.value })}
                                placeholder="Driver Name"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Vehicle Type</label>
                            <select
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            >
                                <option>Truck 10-Wheeler</option>
                                <option>Mazda High Roof</option>
                                <option>Dumper</option>
                                <option>Trailer 22-Wheeler</option>
                                <option>Pickup</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Max Capacity (kg)</label>
                            <input
                                type="number"
                                value={formData.capacity}
                                onChange={e => setFormData({ ...formData, capacity: e.target.value })}
                                placeholder="50000"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Status</label>
                            <select
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            >
                                <option>Active</option>
                                <option>Maintenance</option>
                                <option>Inactive</option>
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
                            <span className="material-symbols-outlined">check</span>
                            {editingId ? 'Update Vehicle' : 'Save Vehicle'}
                        </button>
                    </div>
                </div>
            )}

            {/* FILTERS */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex gap-4">
                <div className="relative flex-1">
                    <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                    <input
                        type="text"
                        placeholder="Search vehicles by Reg # or Driver..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-primary outline-none transition-colors"
                    />
                </div>
                <select className="px-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-600 dark:text-slate-300 focus:border-primary outline-none cursor-pointer">
                    <option>All Types</option>
                    <option>Truck</option>
                    <option>Dumper</option>
                    <option>Trailer</option>
                </select>
                <select className="px-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-600 dark:text-slate-300 focus:border-primary outline-none cursor-pointer">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Maintenance</option>
                    <option>Inactive</option>
                </select>
            </div>

            {/* TABLE */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50/50 dark:bg-slate-700/50 text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider font-semibold border-b border-gray-100 dark:border-slate-700">
                            <tr>
                                <th className="px-6 py-4">Registration #</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Driver</th>
                                <th className="px-6 py-4">Max Capacity</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                            {filteredVehicles.map((veh) => (
                                <tr key={veh.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-dark dark:text-white">{veh.reg}</td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-slate-300">{veh.type}</td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-slate-300">{veh.driver}</td>
                                    <td className="px-6 py-4 font-mono font-medium text-dark dark:text-slate-200">{veh.capacity} kg</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full border 
                                            ${veh.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900' :
                                                veh.status === 'Maintenance' ? 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-900' :
                                                    'bg-gray-50 text-gray-600 border-gray-200 dark:bg-slate-700 dark:text-slate-400'}`}>
                                            {veh.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEdit(veh)}
                                                className="p-1 text-gray-400 hover:text-primary transition-colors" title="Edit"
                                            >
                                                <span className="material-icons-outlined text-lg">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(veh.id)}
                                                className="p-1 text-gray-400 hover:text-red-500 transition-colors" title="Delete"
                                            >
                                                <span className="material-icons-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;
