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

            colors: {
                gray: {
                    ...defaultTheme.colors.gray,
                    500: '#9c9fa9',
                },
                blue: {
                    ...defaultTheme.colors.blue,
                    500: '#3875ff',
                    600: '#1a60ff',
                    950: '#0B122D'
                }
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
