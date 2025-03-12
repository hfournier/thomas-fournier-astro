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
		// Used for all Markdown images; not configurable per-image
		// Used for all `<Image />` and `<Picture />` components unless overridden with a prop
		experimentalLayout: "none"
	},
	experimental: {
		responsiveImages: true,
		svg: true
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
