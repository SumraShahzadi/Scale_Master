/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563EB', // Primary Blue
                    hover: '#1E40AF',   // Dark Blue
                    light: '#DBEAFE',   // Light Blue
                },
                secondary: '#1E40AF', // Dark Blue
                accent: '#DBEAFE',    // Light Blue

                // Neutrals
                dark: '#1F2937',      // Dark Gray (Text)
                medium: '#6B7280',    // Medium Gray (Secondary Text)
                light: '#F9FAFB',     // Light Gray (Backgrounds)
                white: '#FFFFFF',
                border: '#E5E7EB',    // Border Gray

                // Feedback
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
                info: '#8B5CF6',

                // Custom Backgrounds
                'bg-light': '#F9FAFB',
                'bg-dark': '#1F2937',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
