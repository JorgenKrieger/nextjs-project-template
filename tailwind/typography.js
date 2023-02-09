//--------------------------------------------------------------------------
// Tailwind Typography configuration
//--------------------------------------------------------------------------
//
// Here you may overwrite the default Tailwind Typography (or prosé) styles or configure certain variants.
//
// More info: https://tailwindcss.com/docs/typography-plugin.
//

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	theme: {
		extend: {
			// The font families available for this site
			fontFamily: {
				decorative: [...defaultTheme.fontFamily.sans],
				sans: [...defaultTheme.fontFamily.sans],
				serif: [...defaultTheme.fontFamily.serif],
				mono: [...defaultTheme.fontFamily.mono],
			},

			// CSS reset tricks
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "none",
						"ul > li p, ol > li p": {
							marginTop: "0em !important",
							marginBottom: "0em !important",
						},
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography")({
			modifiers: [],
		}),
		require("@tailwindcss/line-clamp"),
		plugin(function ({ addBase, addUtilities, theme }) {
			const typography = {
				h1: {
					fontFamily: theme("fontFamily.decorative"),
					fontWeight: theme("fontWeight.bold"),
					lineHeight: theme("lineHeight.none"),
				},
				h2: {
					fontFamily: theme("fontFamily.decorative"),
					fontWeight: theme("fontWeight.bold"),
					lineHeight: theme("lineHeight.none"),
				},
				h3: {
					fontFamily: theme("fontFamily.decorative"),
					fontWeight: theme("fontWeight.bold"),
					lineHeight: theme("lineHeight.none"),
				},
				h4: {
					fontFamily: theme("fontFamily.decorative"),
					fontWeight: theme("fontWeight.bold"),
					lineHeight: theme("lineHeight.none"),
				},
				h5: {
					fontFamily: theme("fontFamily.decorative"),
					fontWeight: theme("fontWeight.bold"),
					lineHeight: theme("lineHeight.none"),
				},
				h6: {
					fontFamily: theme("fontFamily.decorative"),
					fontWeight: theme("fontWeight.bold"),
				},
				p: {
					fontFamily: theme("fontFamily.sans"),
					fontWeight: theme("fontWeight.normal"),
					fontSize: theme("fontSize.base"),
				}
			};

			addBase({
				h1: typography.h1,
				h2: typography.h2,
				h3: typography.h3,
				h4: typography.h4,
				h5: typography.h5,
				h6: typography.h6,
				p: typography.p
			});

			// This is required for the roxdigital/bard-seo-settings composer package
			addUtilities({
				".h1": typography.h1,
				".h2": typography.h2,
				".h3": typography.h3,
				".h4": typography.h4,
				".h5": typography.h5,
				".h6": typography.h6,
				".p": typography.p
			});
		}),
	],
};