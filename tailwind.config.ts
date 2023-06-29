import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		screens: {
			sm: '600px',
			md: '859px',
			lg: '1099px',
			xl: '1439px',
		},
		extend: {
			backgroundImage: {
				phone: "url('/phone.png')",
			},
			colors: {
				primary: '#09aa0f',
				green: {
					light: '#e7f4e4',
				},
				blue: {
					light: '#bbdeda',
				},
			},
			fontFamily: {
				sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
} satisfies Config;
