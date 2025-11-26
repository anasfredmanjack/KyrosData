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
                    blue: '#003F7D',
                    gold: '#D4AF37',
                },
                secondary: {
                    
                    navy: '#0A1A2F',
                },
                neutral: {
                    softWhite: '#F8F9FA',
                    coolGrey: '#A7A9AC',
                }
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Lato', 'sans-serif'],
                accent: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
