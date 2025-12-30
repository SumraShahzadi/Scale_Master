import React, { useState } from 'react';

const Help = () => {

    const faqData = [
        { question: 'How do I reset my password?', answer: 'Go to your Profile settings and click on "Change Password". Follow the instructions sent to your email.' },
        { question: 'Can I export all slips?', answer: 'Yes, go to Slips History and click the "Export CSV" button at the top right.' },
        { question: 'How do I add a new branch?', answer: 'Branch management is available for Premium users. Upgrade your plan to access this feature.' },
        { question: 'Is the data backed up?', answer: 'Yes, all data is automatically backed up daily to our secure cloud servers.' },
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-5xl mx-auto w-full">
            {/* Search Header */}
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-2">How can we help?</h1>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6">Search our knowledge base or browse common topics below</p>
                <div className="max-w-xl mx-auto relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark text-xl">search</span>
                    <input
                        type="text"
                        placeholder="Search help articles..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg"
                    />
                </div>
            </div>

            {/* Quick Start Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">receipt_long</span>
                    </div>
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark mb-2">Creating Slips</h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Learn how to generate and print weight slips efficiently.</p>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">group</span>
                    </div>
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark mb-2">Managing Customers</h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Add, edit, and organize your client database.</p>
                </div>
                <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">analytics</span>
                    </div>
                    <h3 className="font-bold text-lg text-text-light dark:text-text-dark mb-2">Reports & Analytics</h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Understand your data with detailed reports.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* FAQ Section */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-4">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-3">
                        {faqData.map((faq, index) => (
                            <div key={index} className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between p-4 text-left font-medium text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 p-4 pt-0' : 'max-h-0'}`}>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support */}
                <div className="lg:col-span-1">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                        <p className="text-blue-100 text-sm mb-6">Our support team is available 24/7 to assist you with any issues.</p>
                        <div className="flex flex-col gap-3">
                            <button className="w-full py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-sm">Contact Support</button>
                            <button className="w-full py-2.5 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-sm border border-blue-500">Download Manual</button>
                        </div>
                        <div className="mt-6 pt-4 border-t border-blue-500/50 flex items-center gap-3 text-xs text-blue-100">
                            <span className="material-symbols-outlined text-base">phone</span>
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
