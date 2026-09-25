/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'system-ui', 'sans-serif'],
                display: ['Manrope', 'system-ui', 'sans-serif'],
            },
            colors: {
                brand: {
                    lime: '#CDF138',
                    pinelight: '#E9F7B8',
                    pine: '#0B1F17',
                },
            },
        },
    },
    plugins: [],
}
