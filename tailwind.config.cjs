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
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sancs-serif'],
            roboto: ['Roboto', 'sans-serif'],
        },
    },
    // eslint-disable-next-line global-require
    plugins: [require('autoprefixer')],
}
