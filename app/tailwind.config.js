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
                sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                display: ['Anton', '"Plus Jakarta Sans"', 'sans-serif'],
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
