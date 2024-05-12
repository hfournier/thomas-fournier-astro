/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				slide1: "slideOutBackIn 21s ease-in-out infinite",
				slide2: "slideInOutBack 21s ease-in-out infinite",
				slide3: "slideBackInOut 21s ease-in-out infinite",
				"slide-text": "slideText 21s ease-in-out infinite",
				"slide-in": "slideIn 1s ease-in-out 5s forwards",
				"slide-out": "slideOut 1s ease-in-out 5s forwards",
				"slide-back": "slideBack 1s ease-in-out 5s forwards"
			},
			fontFamily: {
				josefin: "'Josefin Sans', sans-serif",
				montserrat: "'Montserrat', sans-serif"
			},
			keyframes: {
				slideText: {
					"0%, 100%": { transform: "translateX(0)" },
					"30%": { transform: "translateX(0)" },
					"33.3%": { transform: "translateX(calc(100cqw - 100%))" },
					"63.3%": { transform: "translateX(calc(100cqw - 100%))" },
					"66.6%": { transform: "translateX(0)" },
					"96.6%": { transform: "translateX(0)" }
				},
				slideOutBackIn: {
					"0%, 100%": { transform: "translateX(0)", opacity: 1 },
					"30%": { transform: "translateX(0)", opacity: 1 },
					"33.3%": { transform: "translateX(100%)", opacity: 1 },
					"63.3%": { transform: "translateX(100%)", opacity: 0 },
					"66.6%": { transform: "translateX(-100%)", opacity: 0 },
					"96.6%": { transform: "translateX(-100%)", opacity: 1 }
				},
				slideInOutBack: {
					"0%, 100%": { transform: "translateX(-100%)", opacity: 0 },
					"30%": { transform: "translateX(-100%)", opacity: 1 },
					"33.3%": { transform: "translateX(0)", opacity: 1 },
					"63.3%": { transform: "translateX(0)", opacity: 1 },
					"66.6%": { transform: "translateX(100%)", opacity: 1 },
					"96.6%": { transform: "translateX(100%)", opacity: 0 }
				},
				slideBackInOut: {
					"0%, 100%": { transform: "translateX(100%)", opacity: 1 },
					"30%": { transform: "translateX(100%)", opacity: 0 },
					"33.3%": { transform: "translateX(-100%)", opacity: 0 },
					"63.3%": { transform: "translateX(-100%)", opacity: 1 },
					"66.6%": { transform: "translateX(0)", opacity: 1 },
					"96.6%": { transform: "translateX(0)", opacity: 1 }
				},
				slideIn: {
					"0%, 100%": { opacity: 1 },
					from: { transform: "translateX(-100%)" },
					to: { transform: "translateX(0)" }
				},
				slideOut: {
					"0%, 100%": { opacity: 1 },
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(100%)" }
				},
				slideBack: {
					"0%, 100%": { opacity: 0 },
					from: { transform: "translateX(100%)" },
					to: { transform: "translateX(-100%)" }
				}
			}
		},
		plugins: []
	}
}
