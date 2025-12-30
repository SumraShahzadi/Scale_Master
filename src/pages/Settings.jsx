import React, { useState } from 'react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-4xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Settings</h1>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Manage your system preferences</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b border-border-light dark:border-border-dark overflow-x-auto">
                <button
                    onClick={() => setActiveTab('general')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'general'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-muted-light hover:text-text-light dark:hover:text-text-dark'
                        }`}
                >
                    General & Company
                </button>
                <button
                    onClick={() => setActiveTab('notifications')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'notifications'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-muted-light hover:text-text-light dark:hover:text-text-dark'
                        }`}
                >
                    Notifications
                </button>
                <button
                    onClick={() => setActiveTab('billing')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'billing'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-muted-light hover:text-text-light dark:hover:text-text-dark'
                        }`}
                >
                    Billing
                </button>
            </div>

            {/* Content */}
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm">

                {/* General Tab */}
                {activeTab === 'general' && (
                    <div className="p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-light dark:text-text-dark">Company Name</label>
                                <input type="text" className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary" defaultValue="My Scale Co." />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-light dark:text-text-dark">Company Logo</label>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">M</div>
                                    <button className="px-3 py-1.5 text-sm border border-border-light dark:border-border-dark rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Upload New</button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-border-light dark:border-border-dark" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-base font-semibold text-text-light dark:text-text-dark">Regional Preferences</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-text-light dark:text-text-dark">Language</label>
                                    <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary">
                                        <option>English (US)</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-text-light dark:text-text-dark">Weight Unit</label>
                                    <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary">
                                        <option>Kilograms (kg)</option>
                                        <option>Pounds (lb)</option>
                                        <option>Tons (t)</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-text-light dark:text-text-dark">Date Format</label>
                                    <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary">
                                        <option>MM/DD/YYYY</option>
                                        <option>DD/MM/YYYY</option>
                                        <option>YYYY-MM-DD</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr className="border-border-light dark:border-border-dark" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-base font-semibold text-text-light dark:text-text-dark">Slip Template</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                    <input type="radio" name="template" className="mt-1" defaultChecked />
                                    <div>
                                        <span className="block text-sm font-medium text-text-light dark:text-text-dark">Standard</span>
                                        <span className="block text-xs text-text-muted-light dark:text-text-muted-dark mt-1">Balanced layout with all key info.</span>
                                    </div>
                                </label>
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                    <input type="radio" name="template" className="mt-1" />
                                    <div>
                                        <span className="block text-sm font-medium text-text-light dark:text-text-dark">Detailed</span>
                                        <span className="block text-xs text-text-muted-light dark:text-text-muted-dark mt-1">Includes compact spacing for more items.</span>
                                    </div>
                                </label>
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                    <input type="radio" name="template" className="mt-1" />
                                    <div>
                                        <span className="block text-sm font-medium text-text-light dark:text-text-dark">Minimal</span>
                                        <span className="block text-xs text-text-muted-light dark:text-text-muted-dark mt-1">Logo, weight, and date only.</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                    <div className="p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                <div>
                                    <p className="font-medium text-text-light dark:text-text-dark">Email Alerts</p>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Receive emails when a new slip is created.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                                <div>
                                    <p className="font-medium text-text-light dark:text-text-dark">Daily Summary</p>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Get a summary report every morning.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* Billing Tab */}
                {activeTab === 'billing' && (
                    <div className="p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-primary font-semibold uppercase tracking-wide">Current Plan</p>
                                <p className="text-2xl font-bold text-text-light dark:text-text-dark">Pro Business</p>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Renews on Jan 15, 2026</p>
                            </div>
                            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">Upgrade</button>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-text-light dark:text-text-dark mb-4">Payment Method</h3>
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                                <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-[10px] font-bold tracking-widest">VISA</div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">Visa ending in 4242</p>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Expires 12/28</p>
                                </div>
                                <button className="text-sm text-primary hover:underline">Edit</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer actions */}
                <div className="p-4 bg-background-light dark:bg-background-dark/50 border-t border-border-light dark:border-border-dark flex justify-end gap-3 rounded-b-xl">
                    <button className="px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">Discard Changes</button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
