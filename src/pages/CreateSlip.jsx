import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CreateSlip = () => {
    const location = useLocation();

    // Tab State
    const [activeTab, setActiveTab] = useState('1st Weight');

    // Live Weight Simulation
    const [liveWeight, setLiveWeight] = useState(0);
    const [isAutoWeight, setIsAutoWeight] = useState(true);

    // Styling Constants
    const labelClass = "block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2";
    const inputClass = "w-full bg-blue-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-medium text-slate-900 dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-sm";

    // Form States
    const [firstWeightForm, setFirstWeightForm] = useState({
        serialNo: '1001',
        voucherNo: '', // Added Voucher No
        customerType: 'Commercial', // Added Customer Type
        inDate: new Date().toISOString().split('T')[0],
        inTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        vehicle: '',
        material: '',
        partyName: '',
        supplierName: '',
        driver: '',
        amount: '',
        paid: 'No', // Yes/No
        packing: '',
        remarks: '',
        weight1: '',
        phone: '',
        printType: 'Win Print' // DOS Print, Win Print
    });

    const [secondWeightForm, setSecondWeightForm] = useState({
        serialNo: '',
        voucherNo: '',
        customerType: 'Commercial',
        inDate: '',
        inTime: '',
        outDate: new Date().toISOString().split('T')[0],
        outTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        vehicle: '',
        material: '',
        partyName: '',
        supplierName: '',
        driver: '',
        amount: '',
        remarks: '',
        weight1: '',
        weight2: '',
        netWeight: 0,
    });

    // Mock Data
    const [recentSlips, setRecentSlips] = useState([
        { id: 1, serialNo: '1000', date1: '2024-03-10', time1: '08:30', weight1: 15000, date2: '2024-03-10', time2: '14:30', weight2: 45000, netWeight: 30000 },
        { id: 2, serialNo: '0999', date1: '2024-03-09', time1: '09:15', weight1: 14500, date2: '2024-03-09', time2: '13:45', weight2: 42000, netWeight: 27500 },
    ]);

    // Pending Slips for 2nd Weight Lookup
    const pendingSlips = [
        { serialNo: '1001', vehicle: 'LES-1234', weight1: 14800, date1: '2024-03-15' },
        { serialNo: '1002', vehicle: 'KHI-9876', weight1: 15200, date1: '2024-03-16' },
    ];

    // Effect to handle incoming navigation state from SlipsHistory
    useEffect(() => {
        if (location.state && location.state.selectedSlip) {
            const { selectedSlip, activeTab: newTab } = location.state;

            // Switch tab
            if (newTab) setActiveTab(newTab);

            // Populate Form
            setSecondWeightForm(prev => ({
                ...prev,
                serialNo: selectedSlip.serialNo || prev.serialNo,
                vehicle: selectedSlip.vehicle || prev.vehicle,
                weight1: selectedSlip.weight1 || prev.weight1,
                inDate: selectedSlip.date1 || prev.inDate,
                inTime: selectedSlip.time1 || prev.inTime,
                partyName: selectedSlip.partyName || prev.partyName,
                material: selectedSlip.material || prev.material,
                // Assuming other fields might be fetched or remain default
            }));

            // Optional: Clear state to prevent re-filling on refresh (if desired, though React Router handles this well usually)
            // window.history.replaceState({}, document.title)
        }
    }, [location.state]);

    // Effect to simulate live weight
    useEffect(() => {
        const interval = setInterval(() => {
            // Random fluctuate around 40000
            setLiveWeight(Math.floor(Math.random() * 500) + 40000);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Effect to auto-update weight field if Auto is ON
    useEffect(() => {
        if (isAutoWeight) {
            if (activeTab === '1st Weight') {
                setFirstWeightForm(prev => ({ ...prev, weight1: liveWeight }));
            } else {
                setSecondWeightForm(prev => ({ ...prev, weight2: liveWeight }));
            }
        }
    }, [liveWeight, isAutoWeight, activeTab]);

    // Calculate Net Weight
    useEffect(() => {
        if (secondWeightForm.weight1 && secondWeightForm.weight2) {
            setSecondWeightForm(prev => ({ ...prev, netWeight: Math.abs(prev.weight2 - prev.weight1) }));
        }
    }, [secondWeightForm.weight1, secondWeightForm.weight2]);

    const handleFirstWeightSubmit = (type) => { // type: 'Save' or 'SavePrint'
        alert(`${type} Clicked! Serial: ${firstWeightForm.serialNo}`);
    };

    const handleSecondWeightSubmit = (type) => { // type: 'Save' or 'PrintSave'
        alert(`${type} Clicked! Serial: ${secondWeightForm.serialNo}`);
    };

    const loadPendingSlip = (slip) => {
        setSecondWeightForm({
            ...secondWeightForm,
            serialNo: slip.serialNo,
            weight1: slip.weight1,
            vehicle: slip.vehicle,
            inDate: slip.date1,
            // Mock filling other fields
            partyName: 'Ali Traders',
            supplierName: 'Best Supplies',
            material: 'Sand'
        });
    };

    return (
        <div className="flex flex-col h-full gap-4">
            {/* Header / Tabs */}
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex gap-4">
                    <button
                        onClick={() => setActiveTab('1st Weight')}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === '1st Weight'
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                    >
                        1st Weight (Inbound)
                    </button>
                    <button
                        onClick={() => setActiveTab('2nd Weight')}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === '2nd Weight'
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                    >
                        2nd Weight (Outbound)
                    </button>
                </div>

                {/* Visual Indicator of Connection */}
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Connected</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 h-full">
                {/* LEFT COLUMN: FORMS */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">

                    {/* 1ST WEIGHT FORM */}
                    {activeTab === '1st Weight' && (
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in-up">
                            {/* AI Suggestion Banner */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/50 mb-6 flex items-start gap-3">
                                <span className="material-icons-outlined text-blue-600 dark:text-blue-400 text-lg mt-0.5">auto_awesome</span>
                                <div>
                                    <h4 className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-0.5">AI Suggestions</h4>
                                    <p className="text-xs text-blue-600 dark:text-blue-400">
                                        Based on Vehicle ID <span className="font-bold">786-ABZ</span>, Past Customer is <span className="font-bold underline decoration-dotted cursor-pointer">Ali Traders</span> carrying <span className="font-bold">Sand</span>.
                                        <span className="ml-2 text-blue-500 hover:text-blue-700 cursor-pointer underline">Apply Suggestion</span>
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                                <span className="material-icons-outlined">input</span>
                                First Weight Entry
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
                                    <button onClick={() => handleFirstWeightSubmit('Save')} className="flex-1 md:flex-none px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">Save Only</button>
                                    <button onClick={() => handleFirstWeightSubmit('SavePrint')} className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg shadow-blue-500/30 transition-colors flex items-center justify-center gap-2">
                                        <span className="material-icons-outlined">print</span>
                                        Save & Print
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2ND WEIGHT FORM */}
                    {activeTab === '2nd Weight' && (
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in-up">
                            <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                                <span className="material-icons-outlined">output</span>
                                Second Weight Entry
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                {/* Row 1: Type & Voucher (Aligned with Tab 1) */}
                                <div><label className={labelClass}>Customer Type</label><input type="text" value={secondWeightForm.customerType} readOnly className={`${inputClass} bg-slate-100`} /></div>
                                <div><label className={labelClass}>Voucher No</label><input type="text" value={secondWeightForm.voucherNo} readOnly className={`${inputClass} bg-slate-100`} /></div>

                                {/* Row 2: Search (Equivalent to Serial No) & IN Date */}
                                <div className="relative">
                                    <label className={labelClass}>Search Serial No</label>
                                    <div className="relative">
                                        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                        <input
                                            type="text"
                                            value={secondWeightForm.serialNo}
                                            onChange={e => setSecondWeightForm({ ...secondWeightForm, serialNo: e.target.value })}
                                            className={`${inputClass} pl-10`}
                                            placeholder="Enter Serial..."
                                        />
                                    </div>
                                </div>
                                <div><label className={labelClass}>IN Date / Time</label><div className="flex gap-2"><input type="text" value={secondWeightForm.inDate} readOnly className={`${inputClass} bg-slate-100`} /><input type="text" value={secondWeightForm.inTime} readOnly className={`${inputClass} bg-slate-100`} /></div></div>

                                {/* Row 3: Vehicle & Material */}
                                <div><label className={labelClass}>Vehicle No</label><input type="text" value={secondWeightForm.vehicle} readOnly className={`${inputClass} bg-slate-100`} /></div>
                                <div><label className={labelClass}>Material</label><input type="text" value={secondWeightForm.material} readOnly className={`${inputClass} bg-slate-100`} /></div>

                                {/* Row 4: Party & Supplier */}
                                <div><label className={labelClass}>Party Name</label><input type="text" value={secondWeightForm.partyName} readOnly className={`${inputClass} bg-slate-100`} /></div>
                                <div><label className={labelClass}>Supplier Name</label><input type="text" value={secondWeightForm.supplierName} readOnly className={`${inputClass} bg-slate-100`} /></div>

                                {/* Row 5: OUT Date & Remarks */}
                                <div><label className={labelClass}>OUT Date / Time</label><div className="flex gap-2"><input type="date" value={secondWeightForm.outDate} className={inputClass} /><input type="time" value={secondWeightForm.outTime} className={inputClass} /></div></div>
                                <div><label className={labelClass}>Remarks</label><input type="text" value={secondWeightForm.remarks} onChange={e => setSecondWeightForm({ ...secondWeightForm, remarks: e.target.value })} className={inputClass} /></div>

                                {/* Row 6: Charges */}
                                <div><label className={labelClass}>Charges Amount</label><input type="number" value={secondWeightForm.amount} onChange={e => setSecondWeightForm({ ...secondWeightForm, amount: e.target.value })} className={inputClass} /></div>
                                <div></div> {/* Empty slot for balance */}
                            </div>

                            {/* Weights Section */}
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-3 bg-slate-50 rounded-lg border">
                                    <label className={labelClass}>1st Weight</label>
                                    <div className="text-xl font-mono font-bold text-slate-700">{secondWeightForm.weight1 || 0} kg</div>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-lg border relative">
                                    <label className={`${labelClass} flex justify-between`}>
                                        2nd Weight
                                        <div className="flex gap-1">
                                            <button onClick={() => setIsAutoWeight(false)} className={`px-1 py-0.5 text-[10px] rounded ${!isAutoWeight ? 'bg-slate-600 text-white' : 'bg-white border'}`}>MAN</button>
                                            <button onClick={() => setIsAutoWeight(true)} className={`px-1 py-0.5 text-[10px] rounded ${isAutoWeight ? 'bg-primary text-white' : 'bg-white border'}`}>AUTO</button>
                                        </div>
                                    </label>
                                    <input
                                        type="number"
                                        value={secondWeightForm.weight2}
                                        readOnly={isAutoWeight}
                                        onChange={e => setSecondWeightForm({ ...secondWeightForm, weight2: e.target.value })}
                                        className="w-full bg-transparent text-xl font-mono font-bold text-dark outline-none border-b border-primary"
                                    />
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                    <label className={`${labelClass} text-primary`}>Net Weight</label>
                                    <div className="text-2xl font-mono font-bold text-primary">{secondWeightForm.netWeight} kg</div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex justify-end gap-3">
                                <button onClick={() => handleSecondWeightSubmit('PrintSave')} className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 shadow-lg flex items-center gap-2">
                                    <span className="material-icons-outlined">print</span>
                                    Print & Save
                                </button>
                                <button onClick={() => handleSecondWeightSubmit('Save')} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg shadow-blue-500/30 flex items-center gap-2">
                                    <span className="material-icons-outlined">check_circle</span>
                                    Save
                                </button>
                            </div>
                        </div>
                    )}

                    {/* BOTTOM TABLE: Slip List */}
                    <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-500 uppercase tracking-wider">
                            Recent Slips History
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-white dark:bg-slate-800 text-slate-500 text-xs uppercase font-bold border-b border-slate-100 dark:border-slate-700">
                                    <tr>
                                        <th className="px-4 py-3">Serial No</th>
                                        <th className="px-4 py-3">1st Date</th>
                                        <th className="px-4 py-3">1st Time</th>
                                        <th className="px-4 py-3 text-right">1st Weight</th>
                                        <th className="px-4 py-3">2nd Date</th>
                                        <th className="px-4 py-3">2nd Time</th>
                                        <th className="px-4 py-3 text-right">2nd Weight</th>
                                        <th className="px-4 py-3 text-right">Net Weight</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                                    {recentSlips.map(slip => (
                                        <tr key={slip.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-4 py-3 font-mono font-bold">{slip.serialNo}</td>
                                            <td className="px-4 py-3 text-slate-600">{slip.date1}</td>
                                            <td className="px-4 py-3 text-slate-600">{slip.time1}</td>
                                            <td className="px-4 py-3 text-right font-mono">{slip.weight1.toLocaleString()}</td>
                                            <td className="px-4 py-3 text-slate-600">{slip.date2}</td>
                                            <td className="px-4 py-3 text-slate-600">{slip.time2}</td>
                                            <td className="px-4 py-3 text-right font-mono">{slip.weight2.toLocaleString()}</td>
                                            <td className="px-4 py-3 text-right font-mono font-bold text-primary">{slip.netWeight.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: LIVE INDICATOR & PENDING LIST */}
                <div className="w-full lg:w-80 flex flex-col gap-6">
                    {/* Live Indicator (Black Screen) */}
                    <div className="bg-black rounded-2xl p-6 shadow-2xl border-4 border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>

                        <div className="text-center mb-2">
                            <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] animate-pulse">Live Weight</span>
                        </div>

                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 backdrop-blur-sm">
                            <div className="text-5xl md:text-6xl font-mono font-black text-green-500 tracking-tighter tabular-nums text-center drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                                {liveWeight.toLocaleString()}
                            </div>
                            <div className="text-center text-slate-500 text-sm font-bold mt-2">kg</div>
                        </div>

                        <div className="mt-4 flex justify-between items-center text-xs text-slate-400 font-mono">
                            <span>Scale ID: #01</span>
                            <span className="text-green-500">Online</span>
                        </div>
                    </div>

                    {/* Digital Slip Preview */}
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                        <div className="p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                            <div className="text-center mb-6">
                                <h3 className="font-bold text-xl text-slate-800 uppercase tracking-widest border-b-2 border-slate-100 pb-2 inline-block">Weight Slip</h3>
                                <p className="text-[10px] text-slate-400 font-mono mt-1">{new Date().toLocaleString()}</p>
                            </div>

                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                    <span className="text-slate-400 font-medium">Serial No</span>
                                    <span className="font-mono font-bold text-slate-700">#{activeTab === '1st Weight' ? firstWeightForm.serialNo : secondWeightForm.serialNo}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                    <span className="text-slate-400 font-medium">Vehicle</span>
                                    <span className="font-bold text-slate-700">{activeTab === '1st Weight' ? firstWeightForm.vehicle : secondWeightForm.vehicle || '-----'}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                    <span className="text-slate-400 font-medium">Customer</span>
                                    <span className="font-bold text-slate-700 text-right truncate w-32">{activeTab === '1st Weight' ? firstWeightForm.partyName : secondWeightForm.partyName || '-----'}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                    <span className="text-slate-400 font-medium">Material</span>
                                    <span className="font-bold text-slate-700">{activeTab === '1st Weight' ? firstWeightForm.material : secondWeightForm.material || '-----'}</span>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-lg p-3 space-y-2 mb-6 border border-slate-100">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 uppercase font-bold">1st Weight</span>
                                    <span className="font-mono font-bold text-slate-700">{activeTab === '1st Weight' ? (firstWeightForm.weight1 || 0) : secondWeightForm.weight1} kg</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 uppercase font-bold">2nd Weight</span>
                                    <span className="font-mono font-bold text-slate-700">{activeTab === '2nd Weight' ? (secondWeightForm.weight2 || 0) : '-----'} kg</span>
                                </div>
                                <div className="border-t border-slate-200 pt-2 flex justify-between items-center">
                                    <span className="text-slate-700 font-black uppercase">Net Weight</span>
                                    <span className="font-mono font-black text-lg text-slate-800">{activeTab === '2nd Weight' ? secondWeightForm.netWeight : '0'} kg</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center pt-2">
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=SLIP-${activeTab === '1st Weight' ? firstWeightForm.serialNo : secondWeightForm.serialNo}`}
                                    alt="QR Code"
                                    className="w-24 h-24 mix-blend-multiply opacity-90"
                                />
                                <p className="text-[10px] text-slate-400 mt-2 font-mono">Scan to verify slip</p>
                            </div>
                        </div>
                    </div>

                    {/* Pending Slips Sidebar (Weight Report List) */}
                    {activeTab === '2nd Weight' && (
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex-1 flex flex-col overflow-hidden">
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase">Pending Report</h3>
                            </div>
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-slate-100 dark:bg-slate-700 sticky top-0 z-10 text-slate-500 font-bold">
                                        <tr>
                                            <th className="px-2 py-2">Serial</th>
                                            <th className="px-2 py-2 text-right">1st</th>
                                            <th className="px-2 py-2 text-right">2nd</th>
                                            <th className="px-2 py-2 text-right">Net</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                                        {pendingSlips.map((slip, idx) => (
                                            <tr
                                                key={slip.serialNo}
                                                onClick={() => loadPendingSlip(slip)}
                                                className="hover:bg-blue-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group"
                                            >
                                                <td className="px-2 py-1.5 font-mono font-bold text-primary group-hover:underline">#{slip.serialNo}</td>
                                                <td className="px-2 py-1.5 text-right font-mono text-slate-600">{slip.weight1}</td>
                                                <td className="px-2 py-1.5 text-right font-mono text-slate-400">-</td>
                                                <td className="px-2 py-1.5 text-right font-mono text-slate-400">-</td>
                                            </tr>
                                        ))}
                                        {/* Mocking some completed ones for demo if needed */}
                                        <tr className="bg-blue-50/30">
                                            <td className="px-2 py-1.5 font-mono font-bold text-slate-400">#1000</td>
                                            <td className="px-2 py-1.5 text-right font-mono text-slate-400">15000</td>
                                            <td className="px-2 py-1.5 text-right font-mono text-slate-400">45000</td>
                                            <td className="px-2 py-1.5 text-right font-mono text-primary font-bold">30000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Helper Info */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/50">
                        <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 text-sm flex items-center gap-2">
                            <span className="material-icons-outlined text-sm">info</span>
                            Instructions
                        </h4>
                        <ul className="text-xs text-blue-600/80 dark:text-blue-300 space-y-1 ml-4 list-disc">
                            <li>Ensure vehicle is properly positioned.</li>
                            <li>Wait for weight to stabilize.</li>
                            <li>Verify serial number for 2nd weight.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSlip;
