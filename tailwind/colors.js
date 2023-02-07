//--------------------------------------------------------------------------
// Tailwind configuration - Colors
//--------------------------------------------------------------------------
//
// This configuration is specifically for setting/extending the color scheme
// of tailwind.
//
// https://tailwindcss.com/docs/customizing-colors#using-custom-colors
//

module.exports = {
	theme: {
		extend: {
			colors: {
				current: "currentColor",
				transparent: "transparent",
				foreground: "var(--color-foreground)",
				background: "var(--color-background)",
				accent: "var(--color-accent)"
			},
		},
	},
};