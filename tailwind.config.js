module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: true
    },
    theme: {
        extend: {
            height: {
                unset: 'unset'
            },
            width: {
                unset: 'unset'
            },
            maxWidth: {
                225: '56.25rem'
            }
        }
    },
    plugins: []
}
