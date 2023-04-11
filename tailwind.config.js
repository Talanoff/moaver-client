const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },

            container: {
                center: true,
                padding: {
                    DEFAULT: '0.625rem',
                    lg: '1.25rem'
                }
            }
        },
    },
    plugins: [],
}
