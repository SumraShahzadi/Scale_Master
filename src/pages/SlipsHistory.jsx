import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SlipsHistory = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('');

    // Form styling constants
    const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1";
    const inputClass = "w-full bg-blue-50/50 backdrop-blur-sm border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 font-medium focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all outline-none";

    // Form State (Mock for UI)
    const [firstWeightForm, setFirstWeightForm] = useState({
        customerType: 'Commercial',
        voucherNo: '',
        serialNo: '1001',
        inDate: new Date().toISOString().split('T')[0],
        inTime: '',
        vehicle: '',
        material: '',
        partyName: '',
        supplierName: '',
        driver: '',
        phone: '',
        amount: '',
        paid: 'No',
        packing: '',
        remarks: '',
        weight1: 0,
        printType: 'DOS Print'
    });

    const [isAutoWeight, setIsAutoWeight] = useState(true);
    const [liveWeight, setLiveWeight] = useState(0);

    // Effect to simulate live weight
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveWeight(Math.floor(Math.random() * 500) + 40000);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Sync live weight if auto
    useEffect(() => {
        if (isAutoWeight) {
            setFirstWeightForm(prev => ({ ...prev, weight1: liveWeight }));
        }
    }, [liveWeight, isAutoWeight]);


    // Mock Data - History
    const slips = [
        { id: "SL-4021", date: "2024-03-10", vehicle: "KAB-902", customer: "Ali Traders", product: "Gravel", net: "42,500", status: "Completed" },
        { id: "SL-4020", date: "2024-03-10", vehicle: "LER-112", customer: "Fast Logistics", product: "Sand", net: "--", status: "Pending" },
        { id: "SL-4019", date: "2024-03-09", vehicle: "MNB-778", customer: "City Construction", product: "Cement", net: "38,100", status: "Completed" },
        { id: "SL-4018", date: "2024-03-09", vehicle: "RIO-554", customer: "Walk-in", product: "Gravel", net: "12,200", status: "Completed" },
        { id: "SL-4017", date: "2024-03-09", vehicle: "TKS-990", customer: "Agri Corp", product: "Wheat", net: "0", status: "Error" },
        { id: "SL-4016", date: "2024-03-08", vehicle: "NYC-101", customer: "Global Trade", product: "Steel", net: "25,000", status: "Completed" },
        { id: "SL-4015", date: "2024-03-08", vehicle: "LAX-202", customer: "Metro Builders", product: "Sand", net: "18,400", status: "Completed" },
    ];

    // Filter Logic
    const filteredSlips = slips.filter(slip => {
        const matchesSearch =
            slip.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            slip.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            slip.customer.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'All' || slip.status === statusFilter;
        const matchesDate = !dateFilter || slip.date === dateFilter;

        return matchesSearch && matchesStatus && matchesDate;
    });

    const handlePrint = (id) => {
        alert(`Printing Slip #${id}...`);
    }

    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Slips History</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage and export your weighing records.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-bold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-2 transition-colors">
                        <span className="material-icons-outlined text-lg">download</span>
                        Export CSV
                    </button>
                    <button
                        onClick={() => navigate('/create-slip')}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all"
                    >
                        <span className="material-icons-outlined text-lg">add</span>
                        New Slip
                    </button>
                </div>
            </div>

            {/* TOP SECTION: 1ST WEIGHT FORM FIELDS */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                    <span className="material-icons-outlined">input</span>
                    New First Weight Entry
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    {/* Row 0: Type & Voucher */}
                    <div>
                        <label className={labelClass}>Customer Type</label>
                        <select
                            value={firstWeightForm.customerType}
                            onChange={e => setFirstWeightForm({ ...firstWeightForm, customerType: e.target.value })}
                            className={inputClass}
                        >
                            <option>Commercial</option>
                            <option>Company</option>
                        </select>
                    </div>
                    <div><label className={labelClass}>Voucher No</label><input type="text" value={firstWeightForm.voucherNo} onChange={e => setFirstWeightForm({ ...firstWeightForm, voucherNo: e.target.value })} className={inputClass} placeholder="Optional" /></div>

                    {/* Row 1 */}
                    <div><label className={labelClass}>Serial No (Auto)</label><input type="text" value={firstWeightForm.serialNo} readOnly className={`${inputClass} bg-slate-100`} /></div>
                    <div><label className={labelClass}>IN Date / Time</label><div className="flex gap-2"><input type="date" value={firstWeightForm.inDate} className={inputClass} /><input type="time" value={firstWeightForm.inTime} className={inputClass} /></div></div>

                    {/* Row 2 */}
                    <div><label className={labelClass}>Vehicle No</label><input type="text" value={firstWeightForm.vehicle} onChange={e => setFirstWeightForm({ ...firstWeightForm, vehicle: e.target.value })} className={inputClass} placeholder="e.g. LES-1234" /></div>
                    <div>
                        <label className={labelClass}>Material / Product</label>
                        <select className={inputClass} value={firstWeightForm.material} onChange={e => setFirstWeightForm({ ...firstWeightForm, material: e.target.value })}>
                            <option value="">Select Material</option>
                            <option>Sand</option>
                            <option>Cement</option>
                            <option>Bricks</option>
                        </select>
                    </div>

                    {/* Row 3 */}
                    <div><label className={labelClass}>Party Name</label><input type="text" value={firstWeightForm.partyName} onChange={e => setFirstWeightForm({ ...firstWeightForm, partyName: e.target.value })} className={inputClass} /></div>
                    <div><label className={labelClass}>Supplier Name</label><input type="text" value={firstWeightForm.supplierName} onChange={e => setFirstWeightForm({ ...firstWeightForm, supplierName: e.target.value })} className={inputClass} /></div>

                    {/* Row 4 */}
                    <div><label className={labelClass}>Driver Name</label><input type="text" value={firstWeightForm.driver} onChange={e => setFirstWeightForm({ ...firstWeightForm, driver: e.target.value })} className={inputClass} /></div>
                    <div><label className={labelClass}>Phone No (Auto)</label><input type="text" value={firstWeightForm.phone} className={`${inputClass} bg-slate-50`} placeholder="Auto-filled" readOnly /></div>

                    {/* Row 5 */}
                    <div><label className={labelClass}>Charges Amount</label><input type="number" value={firstWeightForm.amount} onChange={e => setFirstWeightForm({ ...firstWeightForm, amount: e.target.value })} className={inputClass} /></div>
                    <div>
                        <label className={labelClass}>Paid?</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="paid" value="Yes" checked={firstWeightForm.paid === 'Yes'} onChange={() => setFirstWeightForm({ ...firstWeightForm, paid: 'Yes' })} className="accent-primary" />
                                <span className="text-sm font-medium">Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="paid" value="No" checked={firstWeightForm.paid === 'No'} onChange={() => setFirstWeightForm({ ...firstWeightForm, paid: 'No' })} className="accent-red-500" />
                                <span className="text-sm font-medium">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Row 6 */}
                    <div><label className={labelClass}>Packing / Bags</label><input type="text" value={firstWeightForm.packing} onChange={e => setFirstWeightForm({ ...firstWeightForm, packing: e.target.value })} className={inputClass} /></div>
                    <div><label className={labelClass}>Remarks</label><input type="text" value={firstWeightForm.remarks} onChange={e => setFirstWeightForm({ ...firstWeightForm, remarks: e.target.value })} className={inputClass} /></div>
                </div>

                {/* Weight Section (Integrated) */}
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700/30 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className={`${labelClass} text-lg !text-primary mb-2 block`}>1st Weight</label>
                    <div className="flex gap-2 mb-2">
                        <button onClick={() => setIsAutoWeight(false)} className={`flex-1 py-1 px-2 text-xs font-bold rounded uppercase ${!isAutoWeight ? 'bg-slate-600 text-white' : 'bg-white border text-slate-500'}`}>Manual</button>
                        <button onClick={() => setIsAutoWeight(true)} className={`flex-1 py-1 px-2 text-xs font-bold rounded uppercase ${isAutoWeight ? 'bg-primary text-white' : 'bg-white border text-slate-500'}`}>Auto</button>
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            value={firstWeightForm.weight1}
                            readOnly={isAutoWeight}
                            onChange={e => setFirstWeightForm({ ...firstWeightForm, weight1: e.target.value })}
                            className="w-full text-3xl font-mono font-bold text-center py-3 rounded-lg border-2 border-slate-300 focus:border-primary outline-none"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">KG</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="print" checked={firstWeightForm.printType === 'DOS Print'} onChange={() => setFirstWeightForm({ ...firstWeightForm, printType: 'DOS Print' })} className="accent-primary" />
                            <span className="text-sm font-bold">DOS Print</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="print" checked={firstWeightForm.printType === 'Win Print'} onChange={() => setFirstWeightForm({ ...firstWeightForm, printType: 'Win Print' })} className="accent-primary" />
                            <span className="text-sm font-bold">Win Print</span>
                        </label>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">Save Only</button>
                        <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg shadow-blue-500/30 transition-colors flex items-center justify-center gap-2">
                            <span className="material-icons-outlined">print</span>
                            Save & Print
                        </button>
                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>

            {/* BOTTOM SECTION: Filters & All History */}
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold text-dark dark:text-white">All Records History</h2>

                {/* Filters */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder="Search by Slip ID, Vehicle, or Customer..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-primary outline-none transition-colors"
                        />
                    </div>

                    <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-600 dark:text-slate-300 focus:border-primary outline-none cursor-pointer"
                        >
                            <option value="All">All Status</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Error">Error</option>
                        </select>

                        <input
                            type="date"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            className="px-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-600 dark:text-slate-300 focus:border-primary outline-none cursor-pointer"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50/50 dark:bg-slate-700/50 text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider font-semibold border-b border-gray-100 dark:border-slate-700">
                                <tr>
                                    <th className="px-6 py-4">Slip ID</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Vehicle</th>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">Net Weight</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                                {filteredSlips.map((slip) => (
                                    <tr key={slip.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors group">
                                        <td className="px-6 py-4 font-bold text-dark dark:text-white">{slip.id}</td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-slate-400">{slip.date}</td>
                                        <td className="px-6 py-4 font-medium text-dark dark:text-slate-200">{slip.vehicle}</td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-slate-300">{slip.customer}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold border border-blue-100 dark:border-blue-800">{slip.product}</span>
                                        </td>
                                        <td className="px-6 py-4 font-mono font-bold text-dark dark:text-slate-200">{slip.net} kg</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full border 
                                            ${slip.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900' :
                                                    slip.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-900' :
                                                        'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-900'}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${slip.status === 'Completed' ? 'bg-green-500' : slip.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                                                {slip.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1 text-gray-400 hover:text-primary transition-colors" title="View">
                                                    <span className="material-icons-outlined text-lg">visibility</span>
                                                </button>
                                                <button
                                                    onClick={() => handlePrint(slip.id)}
                                                    className="p-1 text-gray-400 hover:text-dark dark:hover:text-white transition-colors" title="Print"
                                                >
                                                    <span className="material-icons-outlined text-lg">print</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredSlips.length === 0 && (
                                    <tr>
                                        <td colSpan="8" className="px-6 py-8 text-center text-gray-500 dark:text-slate-400 text-sm">
                                            No slips found matching your filters.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center text-xs text-gray-500 dark:text-slate-400">
                        <span>Showing {filteredSlips.length} of {slips.length} slips</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 border border-gray-200 dark:border-slate-600 rounded hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50">Previous</button>
                            <button className="px-3 py-1 bg-primary text-white rounded shadow-sm">1</button>
                            <button className="px-3 py-1 border border-gray-200 dark:border-slate-600 rounded hover:bg-gray-50 dark:hover:bg-slate-700">2</button>
                            <button className="px-3 py-1 border border-gray-200 dark:border-slate-600 rounded hover:bg-gray-50 dark:hover:bg-slate-700">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlipsHistory;
