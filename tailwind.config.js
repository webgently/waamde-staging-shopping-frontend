/** @type {import('tailwindcss').Config} */
function range(start, end, increment = 1) {
    const count = Math.floor((end - start + increment) / increment)
    return Array(count)
        .fill(0)
        .map((_, idx) => start + idx * increment)
}

const minFontSize = 5
const maxFontSize = 80
const minFontWeight = 100
const maxFontWeight = 100

const minSpacingPixel = 0
const maxSpacingPixel = 800
const spacingPixelIncrement = 5

const vhs = [
    '10vh',
    '20vh',
    '30vh',
    '40vh',
    '50vh',
    '60vh',
    '70vh',
    '80vh',
    '90vh',
    '100vh',
]
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        // Extend default configurations
        extend: {
            colors: {
                primary: '#09C6AA',
                second: '#025973',
                third: '#21405F',
                fourth: '#000000',
                fifth: '#232233',
                sixth: '#6C6C72',
                seventh: '#FFFFFF',
                eighth: '#F3EEEA',
                ninth: '#EEF3FF',
                tenth: '#CBCBCB',
                eleventh: '#F4F4F4',
            },
            container: {
                center: true,
            },
        },
        // Override default configurations
        fontWeight: {
            ...range(minFontWeight, maxFontWeight).reduce(
                (merged, f) => ({ ...merged, [f]: `${f}` }),
                {}
            ),
        },
        fontSize: {
            ...range(minFontSize, maxFontSize).reduce(
                (merged, f) => ({ ...merged, [f]: `${f}px` }),
                {}
            ),
        },
        spacing: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        },
        maxWidth: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        },
        minWidth: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        },
        maxHeight: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
            ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
        },
        minHeight: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
            ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
        },
    },
    plugins: [],
}
