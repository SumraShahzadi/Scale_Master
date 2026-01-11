import React, { useState } from 'react';

const Devices = () => {
    // CRUD State
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Initial Data
    const [devices, setDevices] = useState([
        { id: "SCL-101", name: "Main Gate Scale", branch: "Main Head Office", status: "Online", lastSync: "1 min ago", calibrationDue: "2024-05-15", ip: "192.168.1.101", port: "8080" },
        { id: "SCL-102", name: "Warehouse Scale", branch: "City Weighbridge", status: "Online", lastSync: "3 mins ago", calibrationDue: "2024-06-01", ip: "192.168.1.102", port: "8081" },
        { id: "SCL-103", name: "Exit Gate Scale", branch: "Main Head Office", status: "Offline", lastSync: "2 hours ago", calibrationDue: "2024-04-20", ip: "192.168.1.103", port: "8080" },
        { id: "SCL-104", name: "Port Scale A", branch: "Port Terminal", status: "Maintenance", lastSync: "Yesterday", calibrationDue: "2024-03-30", ip: "10.0.0.50", port: "9000" },
    ]);

    // Form State
    const initialFormState = {
        name: '',
        branch: 'Main Head Office',
        status: 'Online',
        ip: '',
        port: ''
    };
    const [formData, setFormData] = useState(initialFormState);

    // Logic
    const filteredDevices = devices.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handlers
    const handleSave = () => {
        if (!formData.name || !formData.ip) {
            alert("Name and IP Address are required!");
            return;
        }

        if (editingId) {
            setDevices(prev => prev.map(d => d.id === editingId ? { ...d, ...formData } : d));
        } else {
            const newId = `SCL-10${devices.length + 1}`;
            setDevices(prev => [...prev, { ...formData, id: newId, lastSync: 'Just now', calibrationDue: '2025-01-01' }]);
        }
        resetForm();
    };

    const handleEdit = (device) => {
        setFormData(device);
        setEditingId(device.id);
        setIsAdding(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this device?")) {
            setDevices(prev => prev.filter(d => d.id !== id));
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
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Devices</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Monitor scale connectivity and calibration status.</p>
                </div>
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30"
                    >
                        <span className="material-icons-outlined text-lg">add_link</span>
                        Connect New Device
                    </button>
                )}
            </div>

            {/* ADD / EDIT FORM */}
            {isAdding && (
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">{editingId ? 'edit' : 'add_circle'}</span>
                            {editingId ? 'Edit Device Configuration' : 'Connect New Device'}
                        </h2>
                        <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Device Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g. Gate 1 Scale"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">IP Address *</label>
                            <input
                                type="text"
                                value={formData.ip}
                                onChange={e => setFormData({ ...formData, ip: e.target.value })}
                                placeholder="192.168.1.x"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Port</label>
                            <input
                                type="text"
                                value={formData.port}
                                onChange={e => setFormData({ ...formData, port: e.target.value })}
                                placeholder="8080"
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Branch</label>
                            <select
                                value={formData.branch}
                                onChange={e => setFormData({ ...formData, branch: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            >
                                <option>Main Head Office</option>
                                <option>City Weighbridge</option>
                                <option>Port Terminal</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Status</label>
                            <select
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            >
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Maintenance</option>
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
                            {editingId ? 'Update Device' : 'Connect Device'}
                        </button>
                    </div>
                </div>
            )}

            {/* Filter Bar */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex gap-4">
                <div className="relative flex-1">
                    <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                    <input
                        type="text"
                        placeholder="Search devices by ID or Name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-primary outline-none transition-colors"
                    />
                </div>
                {/* ... existing filters ... */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredDevices.map((device, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-all group relative">
                        {/* Status Dot */}
                        <div className={`absolute top-6 right-6 w-3 h-3 rounded-full ring-4 ring-opacity-20 ${device.status === 'Online' ? 'bg-green-500 ring-green-500' :
                            device.status === 'Offline' ? 'bg-red-500 ring-red-500' :
                                'bg-yellow-500 ring-yellow-500'
                            }`}></div>

                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-slate-900 text-dark dark:text-white flex items-center justify-center mb-4">
                            <span className="material-icons-outlined text-2xl">scale</span>
                        </div>

                        <h3 className="text-lg font-bold text-dark dark:text-white">{device.name}</h3>
                        <p className="text-xs font-mono text-gray-400 mb-1">{device.id}</p>
                        <p className="text-xs text-gray-500 dark:text-slate-400 mb-4">{device.branch}</p>

                        <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-3 space-y-2 mb-4 border border-gray-100 dark:border-slate-700">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500 dark:text-slate-400">Status</span>
                                <span className={`font-bold ${device.status === 'Online' ? 'text-green-600' :
                                    device.status === 'Offline' ? 'text-red-600' : 'text-yellow-600'
                                    }`}>{device.status}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500 dark:text-slate-400">IP Addr</span>
                                <span className="font-medium text-dark dark:text-slate-200">{device.ip}:{device.port}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500 dark:text-slate-400">Calibration</span>
                                <span className="font-medium text-dark dark:text-slate-200">{device.calibrationDue}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(device)}
                                className="flex-1 py-2 text-xs font-bold text-white bg-dark dark:bg-slate-600 rounded-lg hover:bg-black dark:hover:bg-slate-500 transition-colors"
                            >
                                Configure
                            </button>
                            <button
                                onClick={() => handleDelete(device.id)}
                                className="flex-1 py-2 text-xs font-bold text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-700 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Devices;
