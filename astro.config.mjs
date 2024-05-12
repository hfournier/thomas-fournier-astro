import { defineConfig } from "astro/config"
import netlify from "@astrojs/netlify"
import tailwind from "@astrojs/tailwind"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: netlify({
		cacheOnDemandPages: true
	}),
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		icon({
			include: {
				mdi: ["close", "email", "phone", "linkedin", "twitter", "facebook", "close-circle"]
			}
		})
	]
})
