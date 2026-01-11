import React from 'react';

const ProductSummary = () => {
    const products = [
        { name: "Coal", weight: "2,540 Tons", percentage: 45, color: "bg-gray-800", count: 120 },
        { name: "Sand", weight: "1,240 Tons", percentage: 25, color: "bg-yellow-600", count: 85 },
        { name: "Cement", weight: "950 Tons", percentage: 18, color: "bg-gray-400", count: 65 },
        { name: "Gravel", weight: "450 Tons", percentage: 8, color: "bg-stone-500", count: 32 },
        { name: "Bricks", weight: "210 Tons", percentage: 4, color: "bg-red-700", count: 18 },
    ];

    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-dark dark:text-white">Product Summary</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Inventory movement and product distribution analysis.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-bold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        Last 30 Days
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover flex items-center gap-2 shadow-sm shadow-primary/30 transition-all">
                        <span className="material-icons-outlined text-lg">pie_chart</span>
                        Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visual Distribution */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <h3 className="text-lg font-bold text-dark dark:text-white mb-6">Weight Distribution</h3>
                    <div className="space-y-6">
                        {products.map((product, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-bold text-dark dark:text-white flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${product.color}`}></span>
                                        {product.name}
                                    </span>
                                    <span className="text-gray-500 font-medium">{product.weight} ({product.percentage}%)</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${product.color}`} style={{ width: `${product.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Stats */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <h3 className="text-lg font-bold text-dark dark:text-white mb-6">Product Details</h3>
                    <div className="divide-y divide-gray-50 dark:divide-slate-700">
                        {products.map((product, i) => (
                            <div key={i} className="py-4 flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg ${product.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center`}>
                                        <span className={`material-icons-outlined text-lg ${product.color.replace('bg-', 'text-')}`}>category</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark dark:text-white group-hover:text-primary transition-colors">{product.name}</h4>
                                        <p className="text-xs text-gray-500">{product.count} Transactions</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-dark dark:text-white">{product.weight}</p>
                                    <p className="text-xs text-green-500">+12% vs last month</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;
