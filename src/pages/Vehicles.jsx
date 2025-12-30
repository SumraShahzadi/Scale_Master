import React, { useState } from 'react';

const Vehicles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock Data
    const vehicles = [
        { id: 1, number: 'TRK-45B', type: 'Truck', customer: 'ABC Corp', capacity: '20 tons', status: 'Active' },
        { id: 2, number: 'VAN-99X', type: 'Van', customer: 'Private', capacity: '5 tons', status: 'Maintenance' },
        { id: 3, number: 'TRK-19C', type: 'Truck', customer: 'XYZ Ltd', capacity: '18 tons', status: 'Active' },
        { id: 4, number: 'DMP-221', type: 'Dumper', customer: 'City Builders', capacity: '25 tons', status: 'Active' },
    ];

    const filteredVehicles = vehicles.filter(v =>
        v.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Vehicles</h1>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Manage your fleet database</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                    <span className="material-symbols-outlined text-xl">add</span>
                    Add Vehicle
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Total Vehicles</p>
                    <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-2">452</p>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">On-Site Now</p>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">12</p>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Maintenance</p>
                    <p className="text-3xl font-bold text-orange-500 mt-2">5</p>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Types</p>
                    <p className="text-3xl font-bold text-text-light dark:text-text-dark mt-2">8</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-border-light dark:border-border-dark flex gap-4">
                    <div className="flex-1 max-w-md relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark">search</span>
                        <input
                            type="text"
                            placeholder="Search by number or customer..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <select className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary outline-none text-sm font-medium">
                        <option value="All">All Types</option>
                        <option value="Truck">Trucks</option>
                        <option value="Van">Vans</option>
                    </select>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-background-light dark:bg-background-dark/50 border-b border-border-light dark:border-border-dark text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-6 py-4">Vehicle Number</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Capacity</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {filteredVehicles.map((vehicle) => (
                                <tr key={vehicle.id} className="group hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-mono font-medium text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark px-2 py-1 rounded border border-border-light dark:border-border-dark">
                                            {vehicle.number}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-text-light dark:text-text-dark">{vehicle.type}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-text-light dark:text-text-dark">{vehicle.customer}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-text-muted-light dark:text-text-muted-dark">{vehicle.capacity}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${vehicle.status === 'Active'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                                                : 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
                                            }`}>
                                            {vehicle.status}
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

            {/* Add Vehicle Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-card-dark rounded-xl shadow-2xl w-full max-w-lg overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-6 border-b border-border-light dark:border-border-dark">
                            <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Add New Vehicle</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-text-muted-light hover:text-text-light dark:hover:text-text-dark">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-light dark:text-text-dark">Vehicle Number</span>
                                    <input type="text" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="ABC-123" />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-light dark:text-text-dark">Type</span>
                                    <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary">
                                        <option>Truck</option>
                                        <option>Van</option>
                                        <option>Dumper</option>
                                        <option>Trailer</option>
                                    </select>
                                </label>
                            </div>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-text-light dark:text-text-dark">Customer/Owner</span>
                                <input type="text" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="Select Customer" />
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-light dark:text-text-dark">Max Capacity</span>
                                    <input type="text" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" placeholder="e.g. 20 tons" />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-light dark:text-text-dark">Status</span>
                                    <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary">
                                        <option>Active</option>
                                        <option>Maintenance</option>
                                        <option>Inactive</option>
                                    </select>
                                </label>
                            </div>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-text-light dark:text-text-dark">Notes</span>
                                <textarea className="form-textarea rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary resize-none h-20" placeholder="Optional notes..."></textarea>
                            </label>
                        </div>
                        <div className="p-6 bg-background-light dark:bg-background-dark/50 border-t border-border-light dark:border-border-dark flex justify-end gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm">Save Vehicle</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Vehicles;
