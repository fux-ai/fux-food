const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
