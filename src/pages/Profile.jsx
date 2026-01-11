import React, { useState } from 'react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Omar Malik",
        role: "Owner",
        branch: "Main Head Office",
        email: "omar.malik@scalemaster.com",
        phone: "+92 300 9876543"
    });

    const handleSave = () => {
        setIsEditing(false);
        // Save logic here
    };

    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto">
            <h1 className="text-2xl font-bold text-dark dark:text-white">My Profile</h1>

            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-8 shadow-sm flex flex-col items-center sm:flex-row gap-8 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-600 shadow-lg overflow-hidden">
                        <img src={`https://ui-avatars.com/api/?name=${profile.name.replace(' ', '+')}&background=random&size=200`} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-center sm:text-left flex-1 space-y-4 z-10 w-full">
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                className="text-2xl font-bold text-dark dark:text-white bg-transparent border-b border-primary outline-none w-full sm:w-auto"
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-dark dark:text-white">{profile.name}</h2>
                        )}
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{profile.role} • {profile.branch}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                        <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-lg text-left">
                            <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                    className="font-medium text-dark dark:text-white bg-transparent border-b border-primary outline-none w-full"
                                />
                            ) : (
                                <p className="font-medium text-dark dark:text-white truncate">{profile.email}</p>
                            )}
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded-lg text-left">
                            <p className="text-xs text-gray-400 font-bold uppercase">Phone</p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profile.phone}
                                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                    className="font-medium text-dark dark:text-white bg-transparent border-b border-primary outline-none w-full"
                                />
                            ) : (
                                <p className="font-medium text-dark dark:text-white">{profile.phone}</p>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="flex gap-2 justify-center sm:justify-start pt-2">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 font-bold text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-md"
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>

                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="absolute top-6 right-6 p-2 bg-primary text-white rounded-full shadow-md hover:bg-primary-hover transition-transform active:scale-95 z-20"
                    >
                        <span className="material-icons-outlined text-sm">edit</span>
                    </button>
                )}
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <p className="text-gray-500 dark:text-slate-400 text-sm font-medium">Total Logins</p>
                    <h3 className="text-2xl font-bold text-dark dark:text-white mt-1">1,204</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <p className="text-gray-500 dark:text-slate-400 text-sm font-medium">Last Active</p>
                    <h3 className="text-2xl font-bold text-dark dark:text-white mt-1">Just Now</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                    <p className="text-gray-500 dark:text-slate-400 text-sm font-medium">Security Level</p>
                    <h3 className="text-2xl font-bold text-green-500 mt-1">High</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
