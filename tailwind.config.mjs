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
			fontSize: {
				sm: "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
				base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
				lg: "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
				xl: "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
				"2xl": "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
				"3xl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
				"4xl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
				"5xl": "clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)",
				"6xl": "clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)"
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
