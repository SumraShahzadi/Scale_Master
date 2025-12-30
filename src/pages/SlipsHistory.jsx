import React, { useState, useMemo } from 'react';

const SlipsHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const [selectedSlip, setSelectedSlip] = useState(null);

    // Mock Data
    const slipsData = [
        { id: 'SL-00451', date: '2023-11-08 14:30', customer: 'ABC Corp', vehicle: 'TRK-45B', material: 'Gravel', netWeight: 12300, status: 'Completed' },
        { id: 'SL-00450', date: '2023-11-08 13:15', customer: 'XYZ Ltd', vehicle: 'TRK-19C', material: 'Sand', netWeight: 8100, status: 'Completed' },
        { id: 'SL-00449', date: '2023-11-08 11:45', customer: 'City Builders', vehicle: 'TRK-22A', material: 'Asphalt', netWeight: 21500, status: 'Pending' },
        { id: 'SL-00448', date: '2023-11-08 10:20', customer: 'Roadworks Inc', vehicle: 'TRK-07F', material: 'Gravel', netWeight: 15000, status: 'Void' },
        { id: 'SL-00447', date: '2023-11-07 16:50', customer: 'ABC Corp', vehicle: 'TRK-45B', material: 'Concrete', netWeight: 18200, status: 'Completed' },
        { id: 'SL-00446', date: '2023-11-07 15:10', customer: 'Private', vehicle: 'VAN-99X', material: 'Sand', netWeight: 4500, status: 'Completed' },
    ];

    // Filter & Sort Logic
    const filteredData = useMemo(() => {
        let data = [...slipsData];

        if (searchTerm) {
            data = data.filter(slip =>
                slip.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                slip.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                slip.id.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (statusFilter !== 'All') {
            data = data.filter(slip => slip.status === statusFilter);
        }

        if (sortConfig.key) {
            data.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return data;
    }, [slipsData, searchTerm, statusFilter, sortConfig]);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            case 'Void': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Slips History</h1>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Manage and view all weighing records</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-xl">file_download</span>
                        Export CSV
                    </button>
                    <a href="/create-slip" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-xl">add</span>
                        Create Slip
                    </a>
                </div>
            </div>

            {/* Stats Summary - Dynamic Touch */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">Total Slips Today</p>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">145</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
                    <p className="text-xs font-semibold uppercase text-green-600 dark:text-green-400">Total Weight</p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">1,240 t</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800">
                    <p className="text-xs font-semibold uppercase text-purple-600 dark:text-purple-400">Completed</p>
                    <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">98%</p>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex-1 relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark group-focus-within:text-primary transition-colors">search</span>
                    <input
                        type="text"
                        placeholder="Search by Customer, Vehicle, ID..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none text-sm font-medium"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Void">Void</option>
                </select>
                <div className="relative">
                    <input
                        type="date"
                        className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none text-sm font-medium w-full md:w-auto"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-background-light dark:bg-background-dark/50 border-b border-border-light dark:border-border-dark text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-6 py-4 cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort('id')}>Slip ID {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort('date')}>Date/Time {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort('customer')}>Customer {sortConfig.key === 'customer' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4">Vehicle</th>
                                <th className="px-6 py-4">Material</th>
                                <th className="px-6 py-4 text-right cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort('netWeight')}>Net Weight {sortConfig.key === 'netWeight' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {filteredData.map((slip) => (
                                <tr key={slip.id} className="group hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-primary cursor-pointer hover:underline" onClick={() => setSelectedSlip(slip)}>{slip.id}</td>
                                    <td className="px-6 py-4 text-text-light dark:text-text-dark">{slip.date}</td>
                                    <td className="px-6 py-4 text-text-light dark:text-text-dark font-medium">{slip.customer}</td>
                                    <td className="px-6 py-4 text-text-muted-light dark:text-text-muted-dark font-mono text-xs">{slip.vehicle}</td>
                                    <td className="px-6 py-4 text-text-light dark:text-text-dark">{slip.material}</td>
                                    <td className="px-6 py-4 text-right font-medium text-text-light dark:text-text-dark">{slip.netWeight.toLocaleString()} kg</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${getStatusColor(slip.status)}`}>
                                            {slip.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-text-muted-light dark:text-text-muted-dark hover:text-primary" title="View Details" onClick={() => setSelectedSlip(slip)}>
                                                <span className="material-symbols-outlined text-lg">visibility</span>
                                            </button>
                                            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-text-muted-light dark:text-text-muted-dark hover:text-primary" title="Print">
                                                <span className="material-symbols-outlined text-lg">print</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredData.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="px-6 py-12 text-center text-text-muted-light dark:text-text-muted-dark">
                                        No slips found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Mock */}
                <div className="flex justify-between items-center p-4 border-t border-border-light dark:border-border-dark">
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length} of {filteredData.length} results</span>
                    <div className="flex gap-2">
                        <button disabled className="px-3 py-1 rounded border border-border-light dark:border-border-dark text-sm bg-background-light dark:bg-background-dark text-text-muted-light disabled:opacity-50">Previous</button>
                        <button disabled className="px-3 py-1 rounded border border-border-light dark:border-border-dark text-sm bg-background-light dark:bg-background-dark text-text-muted-light disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>

            {/* Quick View Modal */}
            {selectedSlip && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedSlip(null)}>
                    <div className="bg-white dark:bg-card-dark rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-6 border-b border-border-light dark:border-border-dark">
                            <h3 className="text-xl font-bold">Slip Details</h3>
                            <button onClick={() => setSelectedSlip(null)} className="text-text-muted-light hover:text-text-light dark:hover:text-text-dark">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Slip ID</p>
                                    <p className="text-lg font-bold font-mono">{selectedSlip.id}</p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedSlip.status)}`}>
                                    {selectedSlip.status}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Customer</p>
                                    <p className="font-medium">{selectedSlip.customer}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Vehicle</p>
                                    <p className="font-medium">{selectedSlip.vehicle}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Material</p>
                                    <p className="font-medium">{selectedSlip.material}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Date</p>
                                    <p className="font-medium">{selectedSlip.date}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg flex justify-between items-center mt-2">
                                <span className="font-medium">Net Weight</span>
                                <span className="text-xl font-bold text-primary">{selectedSlip.netWeight.toLocaleString()} kg</span>
                            </div>
                        </div>
                        <div className="p-6 bg-background-light dark:bg-background-dark/50 border-t border-border-light dark:border-border-dark flex justify-end gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 rounded-lg" onClick={() => setSelectedSlip(null)}>Close</button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">print</span> Print Slip
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlipsHistory;
