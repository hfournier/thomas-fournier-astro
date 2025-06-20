import { defineConfig } from "astro/config"
import netlify from "@astrojs/netlify"

import icon from "astro-icon"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
	output: "server",

	adapter: netlify({
		cacheOnDemandPages: true
	}),

	image: {
		layout: "constrained",
		breakpoints: [425, 640, 750, 828, 1080, 1280, 1668, 2048, 2560]
	},

	integrations: [
		icon({
			include: {
				mdi: ["close", "email", "phone", "linkedin", "twitter", "facebook", "close-circle"]
			}
		})
	],

	vite: {
		plugins: [tailwindcss()]
	}
})
