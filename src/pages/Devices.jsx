import React, { useState } from 'react';

const Devices = () => {

    const [devices, setDevices] = useState([
        { id: 1, name: 'Main Gate Scale 1', ip: '192.168.1.101', status: 'Online', lastSync: 'Just now', location: 'Gate A' },
        { id: 2, name: 'Main Gate Scale 2', ip: '192.168.1.102', status: 'Offline', lastSync: '2 hours ago', location: 'Gate B' },
        { id: 3, name: 'Warehouse Scale', ip: '192.168.1.105', status: 'Online', lastSync: '5 mins ago', location: 'Whse 1' },
    ]);

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Devices</h1>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Manage connected weighing terminals</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-xl">add</span>
                    Add New Device
                </button>
            </div>

            {/* Device Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devices.map((device) => (
                    <div key={device.id} className="group relative overflow-hidden rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-all">
                        {/* Status Indicator Bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 ${device.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`}></div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${device.status === 'Online'
                                        ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                                        : 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                                    }`}>
                                    <span className="material-symbols-outlined text-2xl">scale</span>
                                </div>
                                <div className="flex gap-1">
                                    <button className="p-1.5 rounded-lg text-text-muted-light hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-lg">settings</span>
                                    </button>
                                    <button className="p-1.5 rounded-lg text-text-muted-light hover:text-red-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-1">{device.name}</h3>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">{device.location} • {device.ip}</p>

                            <div className="flex items-center justify-between text-xs font-medium bg-background-light dark:bg-background-dark/50 p-2 rounded-lg">
                                <div className="flex items-center gap-1.5">
                                    <span className={`w-2 h-2 rounded-full ${device.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <span className={device.status === 'Online' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                                        {device.status}
                                    </span>
                                </div>
                                <span className="text-text-muted-light dark:text-text-muted-dark">
                                    Sync: {device.lastSync}
                                </span>
                            </div>
                        </div>

                        {/* Action Footer */}
                        <div className="border-t border-border-light dark:border-border-dark p-3 flex gap-2 bg-background-light/50 dark:bg-background-dark/30">
                            <button className="flex-1 py-1.5 text-xs font-medium text-text-light dark:text-text-dark hover:bg-white dark:hover:bg-card-dark rounded border border-transparent hover:border-border-light dark:hover:border-border-dark transition-all shadow-sm">
                                Test Connection
                            </button>
                            <button className="flex-1 py-1.5 text-xs font-medium text-text-light dark:text-text-dark hover:bg-white dark:hover:bg-card-dark rounded border border-transparent hover:border-border-light dark:hover:border-border-dark transition-all shadow-sm">
                                View Logs
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add New Placeholder Card */}
                <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 border-dashed border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:border-primary hover:text-primary transition-all group min-h-[240px]">
                    <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">add</span>
                    </div>
                    <span className="font-medium">Connect New Device</span>
                </button>
            </div>
        </div>
    );
};

export default Devices;
