/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	],
	presets: [
		require('./tailwind/base'),
		require('./tailwind/colors'),
		require('./tailwind/typography')
	]
};
