const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                emerald: {
                    ...colors.emerald,
                    400: '#32EE9E'
                },
                slate: {
                    ...colors.slate,
                    200: '#EDF0F5',
                    900:'#14121E'
                },
                gray: {
                    ...colors.gray,
                    500: '#9694A2',
                },
                blue: {
                    ...colors.blue,
                    500: '#2266FB',
                    600: '#1a60ff',
                    950: '#04246B'
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
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
