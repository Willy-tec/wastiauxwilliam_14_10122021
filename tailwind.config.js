module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                react: '#61dafb',
                'react-grey': '#282c34',
            },
            fontSize: {
                custo: 'calc(10px + 2vmin)',
            },
            animation: {
                'react-spin': 'logo-spin infinite 20s linear',
            },
            keyframes: {
                'logo-spin': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};
