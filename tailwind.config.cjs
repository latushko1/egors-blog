/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			padding: '20px',
			center: true,
		},

		extend: {
			colors: {
				primary: '#1f1f1f',
				secondary: '#b8ca9d',
			},
		},
	},
	plugins: [],
};
