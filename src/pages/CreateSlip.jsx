import React from 'react';

const CreateSlip = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 text-sm font-medium">
                <a href="/" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">Home</a>
                <span className="text-text-muted-light dark:text-text-muted-dark">/</span>
                <a href="/dashboard" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">Dashboard</a>
                <span className="text-text-muted-light dark:text-text-muted-dark">/</span>
                <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">Slips</a>
                <span className="text-text-muted-light dark:text-text-muted-dark">/</span>
                <span className="text-text-light dark:text-text-dark">Create Slip</span>
            </div>

            {/* Page Heading */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Create New Slip</h1>
            </div>

            <div className="flex flex-col gap-8 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">

                {/* General Information Section */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">General Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Slip ID (auto-generated)</span>
                            <input
                                type="text"
                                value="SL-00451"
                                disabled
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-muted-light dark:text-text-muted-dark cursor-not-allowed"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Date</span>
                            <input
                                type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Hauler</span>
                            <input
                                type="text"
                                placeholder="Select Hauler"
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Customer</span>
                            <input
                                type="text"
                                placeholder="Select Customer"
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                    </div>
                </section>

                {/* Vehicle & Driver Section */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">Vehicle & Driver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Vehicle ID</span>
                            <input
                                type="text"
                                placeholder="e.g., TRUCK-123"
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Driver Name</span>
                            <input
                                type="text"
                                placeholder="e.g., John Doe"
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                    </div>
                </section>

                {/* Weight & Material Section */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">Weight & Material</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Material Type</span>
                            <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary">
                                <option>Select Material</option>
                                <option>Gravel</option>
                                <option>Sand</option>
                                <option>Asphalt</option>
                                <option>Concrete</option>
                            </select>
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Unit</span>
                            <select className="form-select rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary">
                                <option>kg</option>
                                <option>lbs</option>
                                <option>tons</option>
                            </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Gross Weight</span>
                            <input
                                type="number"
                                placeholder="e.g., 20000"
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Tare Weight</span>
                            <input
                                type="number"
                                placeholder="e.g., 5000"
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-light dark:text-text-dark">Net Weight</span>
                            <input
                                type="number"
                                placeholder="15000"
                                disabled
                                className="form-input rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-muted-light dark:text-text-muted-dark cursor-not-allowed"
                            />
                        </label>
                    </div>
                </section>

                {/* Notes & Attachments Section */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">Notes & Attachments</h2>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-text-light dark:text-text-dark">Notes</span>
                        <textarea
                            className="form-textarea w-full min-h-[120px] rounded-lg border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary focus:border-primary resize-y"
                            placeholder="Add any relevant notes here..."
                        ></textarea>
                    </label>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-text-light dark:text-text-dark">Attachments</span>
                        <div className="flex justify-center items-center w-full px-6 py-10 border-2 border-dashed border-border-light dark:border-border-dark rounded-lg bg-background-light/50 dark:bg-background-dark/50 hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer group">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-4xl group-hover:text-primary transition-colors">upload_file</span>
                                <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                                    <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">PNG, JPG, PDF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Action Bar */}
                <div className="flex justify-end items-center gap-4 pt-4 border-t border-border-light dark:border-border-dark">
                    <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-text-light dark:text-text-dark bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-border-light dark:border-border-dark transition-all">
                        Cancel
                    </button>
                    <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 shadow-sm transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                        Create Slip
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CreateSlip;
