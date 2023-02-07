//--------------------------------------------------------------------------
// Tailwind baseline configuration
//--------------------------------------------------------------------------
//
// This file extends the base styling of TailwindCSS and is only used as a
// default configuration for the base repo. Do not put site specific
// configuration in this file.
//
// https://tailwindcss.com/docs/plugins
//

const plugin = require("tailwindcss/plugin");

module.exports = {
	theme: {
		extend: {
			// Fills in the missing spacing options in baseline Tailwind
			spacing: {
				// 1: "0.25rem",
				// 2: "0.5rem",
				// 3: "0.75rem",
				// 4: "1rem",
				// 5: "1.25rem",
				// 6: "1.5rem",
				// 7: "1.75rem",
				// 8: "2rem",
				// 9: "2.25rem",
				// 10: "2.5rem",
				// 11: "2.75rem",
				// 12: "3rem",
				13: "3.25rem",
				14: "3.5rem",
				14.5: "3.625rem",
				15: "3.75rem",
				// 16: "4rem",
				17: "4.25rem",
				18: "4.5rem",
				19: "4.75rem",
				19.5: "4.875rem",
				// 20: "5rem",
				21: "5.25rem",
				22: "5.5rem",
				23: "5.75rem",
				// 24: "6rem",
				25: "6.25rem",
				26: "6.5rem",
				27: "6.75rem",
				// 28: "7rem",
				29: "7.25rem",
				30: "7.5rem",
				31: "7.75rem",
				31.5: "7.875rem",
				// 32: "8rem",
				33: "8.25rem",
				34: "8.5rem",
				35: "8.75rem",
				// 36: "9rem",
				36.5: "9.125rem",
				37: "9.25rem",
				38: "9.5rem",
				39: "9.75rem",
				// 40: "10rem",
				41: "10.25rem",
				42: "10.5rem",
				43: "10.75rem",
				// 44: "11rem",
				45: "11.25rem",
				46: "11.5rem",
				47: "11.75rem",
				// 48: "12rem",
				49: "12.25rem",
				50: "12.5rem",
				51: "12.75rem",
				// 52: "13rem",
				53: "13.25rem",
				54: "13.5rem",
				55: "13.75rem",
				// 56: "14rem",
				57: "14.25rem",
				58: "14.5rem",
				59: "14.75rem",
				// 60: "15rem",
				61: "15.25rem",
				62: "15.5rem",
				63: "15.75rem",
				// 64: "16rem",
				65: "16.25rem",
				66: "16.5rem",
				67: "16.75rem",
				// 68: "17rem",
				69: "17.25rem",
				70: "17.5rem",
				71: "17.75rem",
				// 72: "18rem",
				73: "18.25rem",
				74: "18.5rem",
				75: "18.75rem",
				// 76: "19rem",
				77: "19.25rem",
				78: "19.5rem",
				79: "19.75rem",
				// 80: "20rem",
				81: "20.25rem",
				82: "20.5rem",
				83: "20.75rem",
				// 84: "21rem",
				85: "21.25rem",
				86: "21.5rem",
				87: "21.75rem",
				// 88: "22rem",
				89: "22.25rem",
				90: "22.5rem",
				91: "22.75rem",
				// 92: "23rem",
				93: "23.25rem",
				94: "23.5rem",
				95: "23.75rem",
				// 96: "24rem",
				97: "24.25rem",
				98: "24.5rem",
				99: "24.75rem",
			},
			zIndex: {
				behind: "-1",
				dropdown: 1000,
				sticky: 1020,
				fixed: 1030,
				"offcanvas-backdrop": 1040,
				offcanvas: 1045,
				"modal-backdrop": 1050,
				modal: 1055,
				popover: 1070,
				tooltip: 1080,
				toast: 1090,
			},
			screens: {
				"full-hd": "120rem", // Full HD Monitors (1920px)
				"quad-hd": "160rem", // 1440p Monitors (2560px)
				"wq-hd": "215rem", // Ultrawide Monitors (3440px)
				"4k": "240rem", // Native 4K Monitors (3840px)
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				html: {
					fontFamily: theme("fontFamily.sans"),
				},
			});
		}),
		plugin(function ({ addBase }) {
			addBase({
				":root": {
					// Safari resize fix.
					minHeight: "0vw",
				},
			});
		}),
	],
};