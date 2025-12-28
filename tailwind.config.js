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
                    DEFAULT: '#1A374D',
                    hover: '#142a3b',
                },
                secondary: '#406882',
                accent: '#6998AB',
                dark: '#1A374D',
                medium: '#406882',
                light: '#6998AB',
                'bg-light': '#F5F9FC',
                'bg-dark': '#1A374D',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
