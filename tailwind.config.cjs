/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'card-all': '#5e96ec',
                'card-active': '#39ccb9',
                'card-inactive': '#e8564a',
                'card-atention': '#e9c460',
                white: '#F6F6F6',
                green: '#CAFA5F',
                yellow: '#F2D852',
                blue: '#0C46F2',
                black: '#1E1E1E',
            },
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
    },
    // eslint-disable-next-line global-require
    plugins: [require('autoprefixer')],
}
